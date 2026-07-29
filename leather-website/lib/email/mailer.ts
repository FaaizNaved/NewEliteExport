import nodemailer from "nodemailer"
import type { Transporter } from "nodemailer"

const REQUIRED = [
  "MAIL_HOST",
  "MAIL_PORT",
  "MAIL_SECURE",
  "MAIL_USER",
  "MAIL_PASS",
  "OWNER_EMAIL",
] as const

function validateEnv() {
  const missing = REQUIRED.filter((key) => !process.env[key])
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    )
  }
}

let transporter: Transporter | null = null

export function getTransporter(): Transporter {
  if (transporter) return transporter

  validateEnv()

  transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT ?? 587),
    secure: process.env.MAIL_SECURE === "true",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    pool: true, // Use pooled connections for production throughput
    maxConnections: 3,
    maxMessages: 100,
    // Graceful timeout handling
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 10_000,
    tls: {
      rejectUnauthorized: true,
    },
  })

  // Verify transporter once on first creation; log but don't throw.
  transporter
    .verify()
    .then(() => console.info("[mailer] SMTP transporter ready."))
    .catch((err) => console.error("[mailer] Transporter verification failed:", err?.message || err))

  return transporter
}

export async function sendMail(options: nodemailer.SendMailOptions): Promise<void> {
  const mailer = getTransporter()
  const info = await mailer.sendMail(options)
  console.info("[mailer] Message sent:", info.messageId)
}
