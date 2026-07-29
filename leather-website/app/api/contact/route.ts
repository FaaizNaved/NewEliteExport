import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { contactSchema } from "@/lib/validators/contact"
import type { ContactSchema } from "@/lib/validators/contact"
import { sendMail, getTransporter } from "@/lib/email/mailer"
import { ownerHtml, ownerSubject } from "@/lib/email/templates/owner"
import { customerHtml, customerSubject } from "@/lib/email/templates/customer"

// Utility for returning safe json responses
function jsonResponse(data: unknown, status = 200) {
  return NextResponse.json(data, { status })
}

function formatFieldErrors(err: any) {
  const errors: Record<string, string> = {}
  if (err?.issues && Array.isArray(err.issues)) {
    for (const issue of err.issues) {
      const key = issue.path?.[0]
      if (typeof key === "string") errors[key] = issue.message
    }
  }
  return errors
}

export async function POST(req: NextRequest) {
  try {
    let body: Record<string, unknown> | null = null
    const contentType = req.headers.get("content-type") || ""

    if (contentType.includes("application/json")) {
      body = await req.json().catch(() => null)
    } else {
      const formData = await req.formData().catch(() => null)
      if (formData) {
        body = Object.fromEntries(
          Array.from(formData.entries()).map(([key, value]) => [key, typeof value === "string" ? value : ""])
        )
      }
    }

    if (!body) {
      return jsonResponse({ success: false, message: "Invalid request body." }, 400)
    }

    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      const errors = formatFieldErrors(parsed.error)
      return jsonResponse({ success: false, message: "Validation failed.", errors }, 400)
    }

    const data = parsed.data as ContactSchema

    // Get metadata
    const headers = Object.fromEntries(req.headers.entries())
    const ip = headers["x-forwarded-for"] || headers["x-real-ip"] || "Unavailable"
    const userAgent = headers["user-agent"] || undefined

    const submittedAt = new Date().toISOString()

    // Ensure transporter present (will validate envs)
    try {
      getTransporter()
    } catch (e) {
      console.error("[contact] Mailer configuration error", e)
      return jsonResponse({ success: false, message: "Email service is not configured properly." }, 500)
    }

    // Send owner email first. This is authoritative — failure here is an error.
    try {
      await sendMail({
        from: process.env.MAIL_USER,
        to: process.env.OWNER_EMAIL,
        subject: ownerSubject(data.reason),
        html: ownerHtml({
          name: data.name,
          email: data.email,
          phone: data.phone,
          country: data.country,
          reason: data.reason,
          message: data.message,
          submittedAt,
          ip: String(ip),
          userAgent,
        }),
      })
    } catch (err) {
      console.error("[contact] Failed to send owner email:", err)
      return jsonResponse({ success: false, message: "Failed to deliver enquiry. Please try again later." }, 500)
    }

    // Owner email succeeded — send acknowledgement to customer. Failure here should not fail overall.
    try {
      await sendMail({
        from: process.env.MAIL_USER,
        to: data.email,
        subject: customerSubject(),
        html: customerHtml({ name: data.name, reason: data.reason }),
      })
    } catch (err) {
      // Log but do not surface internal error to the client.
      console.error("[contact] Failed to send acknowledgement email to customer:", err)
    }

    return jsonResponse({ success: true, message: "Your enquiry has been submitted successfully." }, 200)
  } catch (err) {
    console.error("[contact] Unexpected error:", err)
    return jsonResponse({ success: false, message: "An unexpected error occurred." }, 500)
  }
}
