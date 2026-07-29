import { z } from "zod"

/**
 * Zod schema for the contact / enquiry form.
 * Reused on both client (React Hook Form) and server (API route).
 */

const NAME_MIN = 2
const NAME_MAX = 120
const EMAIL_MAX = 200
const PHONE_MAX = 30
const COUNTRY_MAX = 80
const REASON_MAX = 120
const MESSAGE_MIN = 10
const MESSAGE_MAX = 4000

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(NAME_MIN, `Full name must be at least ${NAME_MIN} characters.`)
    .max(NAME_MAX, `Full name must be no more than ${NAME_MAX} characters.`),

  email: z
    .string()
    .trim()
    .min(1, "Email address is required.")
    .email("Please enter a valid email address.")
    .max(EMAIL_MAX, `Email must be no more than ${EMAIL_MAX} characters.`),

  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required.")
    .regex(
      /^[\d\s()+\-]{6,}$/,
      "Please enter a valid international phone number."
    )
    .max(PHONE_MAX, `Phone number is too long.`),

  country: z
    .string()
    .trim()
    .min(1, "Please select a country.")
    .max(COUNTRY_MAX, `Country name is too long.`),

  reason: z
    .string()
    .trim()
    .min(1, "Please select a reason for your enquiry.")
    .max(REASON_MAX, `Reason is too long.`),

  message: z
    .string()
    .trim()
    .min(MESSAGE_MIN, `Message must be at least ${MESSAGE_MIN} characters.`)
    .max(MESSAGE_MAX, `Message must be no more than ${MESSAGE_MAX} characters.`),
})

export type ContactSchema = z.infer<typeof contactSchema>
