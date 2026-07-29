import { escape } from "./utils"

export function customerSubject(companyName = "New Elite Exports") {
  return `Thank you for contacting ${companyName}`
}

export function customerHtml(opts: { name: string; reason: string }) {
  const { name, reason } = opts
  const escName = escape(name || "Customer")
  const escReason = escape(reason || "your enquiry")

  return {
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank you</title>
  </head>
  <body style="margin:0;padding:0;background:#f6f5f3;font-family:Georgia, 'Times New Roman', serif;color:#222">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px">
      <tr>
        <td align="center">
          <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 14px 40px rgba(0,0,0,0.06)">
            <tr>
              <td style="padding:28px 36px;border-bottom:1px solid #f0eae6;text-align:center">
                <h1 style="margin:0;font-size:22px;color:#111;font-weight:700">Thank you for contacting New Elite Exports</h1>
                <p style="margin:8px 0 0;color:#6b6763;font-size:14px">We have received your enquiry regarding <strong>${escReason}</strong>.</p>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 36px">
                <p style="margin:0 0 12px;font-size:16px;color:#222">Dear ${escName},</p>

                <p style="margin:0 0 12px;color:#444;line-height:1.5">Thank you for contacting us. We appreciate your interest in our handcrafted leather products. Our team has successfully received your enquiry and our specialists will carefully review your request and will get back to you within the next 2 business days.</p>

                <p style="margin:0 0 12px;color:#444;line-height:1.5">If your enquiry is urgent, please feel free to reply to this email or contact us directly.</p>

                <p style="margin:22px 0 0;color:#222;font-weight:600">Kind Regards,<br/>New Elite Exports</p>

                <div style="margin-top:18px;font-size:13px;color:#6b6763;line-height:1.4">
                  <p style="margin:0">Premium Leather Saddles</p>
                  <p style="margin:2px 0 0">Handcrafted Leather Bags</p>
                  <p style="margin:2px 0 0">Leather Accessories</p>
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 36px;background:#faf8f6;font-size:12px;color:#7a736f">
                <p style="margin:0">This is an automated acknowledgement. For faster service, include an order number or reference in your reply.</p>
                <p style="margin:8px 0 0">New Elite Exports • Premium Leather Saddles • handcrafted@example.com</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
    text: `Dear ${escName},\n\nThank you for contacting us. We appreciate your interest in our handcrafted leather products. Our team has successfully received your enquiry regarding ${escReason}. Our specialists will carefully review your request and will get back to you within the next 2 business days.\n\nIf your enquiry is urgent, please feel free to reply to this email or contact us directly.\n\nKind Regards,\nNew Elite Exports\nPremium Leather Saddles\nHandcrafted Leather Bags\nLeather Accessories`,
  }
}
