"use server"

import type { EnquiryState } from "@/lib/enquiry"

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE = /^[+\d][\d\s().-]{5,24}$/

function read(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

export async function submitEnquiry(
  _previous: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  // Honeypot: a field hidden from people but not from bots.
  if (read(formData, "company")) {
    return { status: "success", message: "Thank you — your enquiry is with the atelier.", fieldErrors: {} }
  }

  const name = read(formData, "name")
  const email = read(formData, "email")
  const phone = read(formData, "phone")
  const country = read(formData, "country")
  const message = read(formData, "message")

  const fieldErrors: EnquiryState["fieldErrors"] = {}

  if (name.length < 2 || name.length > 120) fieldErrors.name = "Please enter your full name."
  if (!EMAIL.test(email) || email.length > 200) fieldErrors.email = "Please enter a valid email address."
  if (phone && !PHONE.test(phone)) fieldErrors.phone = "Please enter a reachable phone number."
  if (country.length > 80) fieldErrors.country = "Please choose a country from the list."
  if (message.length < 20) fieldErrors.message = "A little more detail helps us reply properly."
  if (message.length > 4000) fieldErrors.message = "Please keep the enquiry under 4000 characters."

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Some details need attention before we can send this.",
      fieldErrors,
    }
  }

  // ponytail: validated and logged, not yet delivered. Swap this line for a
  // transactional send (Resend / SES / SMTP) once credentials exist — the
  // validated payload above is everything such a call needs.
  console.info("[enquiry]", { name, email, phone, country, length: message.length })

  return {
    status: "success",
    message: "Thank you — your enquiry is with the atelier. We reply within two working days.",
    fieldErrors: {},
  }
}
