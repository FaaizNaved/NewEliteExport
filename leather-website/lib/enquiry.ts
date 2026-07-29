/** Shared shape for the enquiry form. Kept out of the `"use server"` module,
 *  which may only export async functions. */
export type EnquiryField = "name" | "email" | "phone" | "country" | "message"

export type EnquiryState = {
  status: "idle" | "success" | "error"
  message: string
  fieldErrors: Partial<Record<EnquiryField, string>>
}

export const initialEnquiryState: EnquiryState = {
  status: "idle",
  message: "",
  fieldErrors: {},
}
