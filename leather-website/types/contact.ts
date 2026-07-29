/**
 * Contact / Enquiry form types.
 * Shared between client and server for strong contract guarantees.
 */

export type ContactFormData = {
  name: string
  email: string
  phone: string
  country: string
  reason: string
  message: string
}

export type ContactField = keyof ContactFormData

export type ContactApiResponse =
  | { success: true; message: string }
  | { success: false; message: string; errors?: Record<string, string> }
