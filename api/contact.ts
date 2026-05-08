import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, service, message } = req.body as {
    name: string;
    email: string;
    company?: string;
    service: string;
    message: string;
  };

  if (!name || !email || !message || !service) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { error } = await resend.emails.send({
    from: "Kalortech Contact <onboarding@resend.dev>",
    to: process.env.RESEND_TO_EMAIL ?? "",
    replyTo: email,
    subject: `Kalortech contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company ?? "—"}\nService: ${service}\n\nMessage:\n${message}`,
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return res.status(500).json({ error: "Failed to send email", detail: error });
  }

  return res.status(200).json({ success: true });
}
