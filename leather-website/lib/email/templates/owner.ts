import { escape } from "./utils"

export type OwnerEmailData = {
  name: string
  email: string
  phone: string
  country: string
  reason: string
  message: string
  submittedAt: string
  ip?: string
  userAgent?: string
}

export function ownerSubject(reason: string) {
  return `New Website Enquiry - ${reason}`
}

export function ownerHtml(data: OwnerEmailData) {
  // Premium white & leather-inspired design with inline styles for compatibility
  const {
    name,
    email,
    phone,
    country,
    reason,
    message,
    submittedAt,
    ip,
    userAgent,
  } = data

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Enquiry</title>
  </head>
  <body style="margin:0;padding:0;background:#f7f6f4;font-family:Helvetica,Arial,sans-serif;color:#222">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f6f4;padding:32px 16px">
      <tr>
        <td align="center">
          <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08)">
            <tr>
              <td style="padding:28px 36px;border-bottom:1px solid #f0ebea">
                <h1 style="margin:0;font-size:20px;color:#0b0b0b;font-weight:600">New Website Enquiry</h1>
                <p style="margin:8px 0 0;color:#6b6763;font-size:13px">A new enquiry has been submitted through the website.</p>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 36px">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="vertical-align:top;padding-bottom:12px">
                      <p style="margin:0;font-size:13px;color:#6b6763">Name</p>
                      <p style="margin:6px 0 12px;font-size:15px;color:#111"><strong>${escape(name)}</strong></p>

                      <p style="margin:0;font-size:13px;color:#6b6763">Email</p>
                      <p style="margin:6px 0 12px;font-size:15px;color:#111">${escape(email)}</p>

                      <p style="margin:0;font-size:13px;color:#6b6763">Phone</p>
                      <p style="margin:6px 0 12px;font-size:15px;color:#111">${escape(phone)}</p>

                      <p style="margin:0;font-size:13px;color:#6b6763">Country</p>
                      <p style="margin:6px 0 12px;font-size:15px;color:#111">${escape(country)}</p>

                      <p style="margin:0;font-size:13px;color:#6b6763">Reason</p>
                      <p style="margin:6px 0 12px;font-size:15px;color:#111">${escape(reason)}</p>
                    </td>

                    <td style="vertical-align:top;padding-left:32px;padding-bottom:12px">
                      <p style="margin:0;font-size:13px;color:#6b6763">Submitted</p>
                      <p style="margin:6px 0 12px;font-size:15px;color:#111">${escape(submittedAt)}</p>

                      <p style="margin:0;font-size:13px;color:#6b6763">IP Address</p>
                      <p style="margin:6px 0 12px;font-size:15px;color:#111">${escape(ip ?? "Unavailable")}</p>

                      <p style="margin:0;font-size:13px;color:#6b6763">User Agent</p>
                      <p style="margin:6px 0 12px;word-break:break-word;font-size:13px;color:#111">${escape(userAgent ?? "Unavailable")}</p>
                    </td>
                  </tr>
                </table>

                <hr style="border:none;border-top:1px solid #f0ebea;margin:18px 0" />

                <h2 style="margin:0 0 8px;font-size:14px;color:#0b0b0b">Message</h2>
                <p style="white-space:pre-wrap;margin:0;padding:0 0 6px;color:#222">${escape(message)}</p>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 36px 28px;background:linear-gradient(90deg,#fff 0%, #fbfaf8 100%);font-size:12px;color:#6b6763">
                <p style="margin:0">This enquiry was submitted from the company website.</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}
