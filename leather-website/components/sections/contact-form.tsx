"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Check, Loader2 } from "lucide-react"
import { useId, useState } from "react"

import { Magnetic } from "@/components/motion/magnetic"
import { LUXE_EASE } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { contact, countries } from "@/lib/content"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "@/lib/validators/contact"
import type { ContactSchema } from "@/lib/validators/contact"

const LABEL_CLASS = "text-[0.625rem] tracking-[0.28em] text-cream/65 uppercase"
const ERROR_CLASS = "text-[#e09a83]"

export function ContactForm() {
  const uid = useId()
  const field = (name: string) => `${uid}-${name}`

  const [status, setStatus] = useState<{ state: "idle" | "success" | "error"; message: string }>(
    { state: "idle", message: "" }
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({ resolver: zodResolver(contactSchema) })

  async function onSubmit(values: ContactSchema) {
    setStatus({ state: "idle", message: "" })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      const json = await res.json()

      if (res.ok && json?.success) {
        setStatus({ state: "success", message: json.message || "Thank you — your enquiry has been submitted." })
        reset()
      } else if (res.status === 400 && json?.errors) {
        // Map server field errors to UI by showing first message
        setStatus({ state: "error", message: json.message || "Please review the form fields." })
      } else {
        setStatus({ state: "error", message: json?.message || "An error occurred while sending your enquiry." })
      }
    } catch (err) {
      console.error("[contact-form] unexpected error", err)
      setStatus({ state: "error", message: "Unable to send your enquiry right now. Please try again later." })
    }
  }

  const formId = field("contact-form")

  return (
    <form
      id={formId}
      action="/api/contact"
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative space-y-10"
    >
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        <Field
          id={field("name")}
          label="Full name"
          required
          error={errors.name?.message}
          inputProps={{ ...register("name"), id: field("name"), autoComplete: "name" }}
        />

        <Field
          id={field("email")}
          label="Email"
          required
          error={errors.email?.message}
          inputProps={{ ...register("email"), id: field("email"), type: "email", autoComplete: "email" }}
        />

        <Field
          id={field("phone")}
          label="Phone"
          error={errors.phone?.message}
          inputProps={{ ...register("phone"), id: field("phone"), type: "tel", autoComplete: "tel" }}
        />

        <Field
          id={field("reason")}
          label="Subject / reason"
          required
          error={errors.reason?.message}
          inputProps={{
            ...register("reason"),
            id: field("reason"),
            autoComplete: "off",
            placeholder: "Product enquiry, custom order request, timeline question...",
          }}
        />

        <div>
          <Label htmlFor={field("country")} className={LABEL_CLASS}>
            Country
          </Label>
          <select
            {...register("country")}
            id={field("country")}
            defaultValue=""
            autoComplete="country-name"
            aria-invalid={Boolean(errors.country)}
            aria-describedby={errors.country ? `${field("country")}-error` : undefined}
            className="field mt-3"
          >
            <option value="" className="bg-bark">
              Select a country
            </option>
            {countries.map((country) => (
              <option key={country} value={country} className="bg-bark">
                {country}
              </option>
            ))}
          </select>
          <FieldError id={`${field("country")}-error`} message={errors.country?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor={field("message")} className={LABEL_CLASS}>
          Message
          <span className="ml-1 text-brass">*</span>
        </Label>
        <textarea
          {...register("message")}
          id={field("message")}
          rows={4}
          required
          placeholder="Describe your enquiry in detail, including product preferences, quantities, deadlines, or questions."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${field("message")}-error` : undefined}
          className="field mt-3 resize-none"
        />
        <FieldError id={`${field("message")}-error`} message={errors.message?.message} />
      </div>

      {/* Honeypot */}
      <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor={field("company")}>Company</label>
        <input {...register("company" as any)} id={field("company")} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-6 pt-2">
        <Magnetic strength={0.22}>
          <Button
            type="submit"
            form={formId}
            variant="atelier"
            size="xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="size-4 animate-spin" strokeWidth={1.5} />
            ) : (
              <ArrowRight className="size-4" strokeWidth={1.25} />
            )}
            {contact.submitLabel}
          </Button>
        </Magnetic>

        <AnimatePresence mode="wait">
          {status.state !== "idle" ? (
            <motion.p
              key={status.message}
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: LUXE_EASE }}
              className={
                status.state === "success"
                  ? "flex max-w-sm items-start gap-2.5 text-sm text-brass"
                  : `flex max-w-sm items-start gap-2.5 text-sm ${ERROR_CLASS}`
              }
            >
              {status.state === "success" ? (
                <Check className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} />
              ) : null}
              {status.message}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </form>
  )
}

type FieldProps = {
  id: string
  label: string
  type?: string
  autoComplete?: string
  required?: boolean
  error?: string | undefined
  inputProps?: React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
}

function Field({ id, label, type = "text", required, error, inputProps }: FieldProps) {
  return (
    <div>
      <Label htmlFor={id} className={LABEL_CLASS}>
        {label}
        {required ? <span className="ml-1 text-brass">*</span> : null}
      </Label>
      <input
        {...(inputProps as any)}
        id={id}
        type={type}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="field mt-3"
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className={`mt-2 text-xs ${ERROR_CLASS}`}>
      {message}
    </p>
  )
}
