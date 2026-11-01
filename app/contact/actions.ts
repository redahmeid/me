"use server";

// Sends contact-form messages by email through Resend (https://resend.com).
// Needs these environment variables in Vercel:
//   RESEND_API_KEY      API key from Resend
//   CONTACT_TO_EMAIL    where messages are delivered
//   CONTACT_FROM_EMAIL  optional sender, e.g. "Website <hello@hmeid.com>" once the domain is verified in Resend

import { TOPICS, type ContactState } from "./shared";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    topic: String(formData.get("topic") ?? "General").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  // Honeypot: real people never fill this hidden field.
  if (String(formData.get("website") ?? "").length > 0) {
    return { status: "success" };
  }

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2 || values.name.length > 100) errors.name = "Please tell me your name.";
  if (!EMAIL_RE.test(values.email) || values.email.length > 200) errors.email = "Please enter a valid email address.";
  if (!(TOPICS as readonly string[]).includes(values.topic)) values.topic = "General";
  if (values.message.length < 10) errors.message = "Please write a little more (at least 10 characters).";
  if (values.message.length > 5000) errors.message = "Please keep it under 5,000 characters.";
  if (Object.keys(errors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Website contact form <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Contact form is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL.");
    return {
      status: "error",
      message: "Sorry, the contact form isn't available right now. Please message me on LinkedIn instead.",
      values,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `[Website] ${values.topic}: ${values.name}`,
        text: `From: ${values.name} <${values.email}>\nTopic: ${values.topic}\n\n${values.message}`,
      }),
    });
    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
      throw new Error(`Resend responded ${res.status}`);
    }
  } catch (err) {
    console.error("Contact form send failed", err);
    return {
      status: "error",
      message: "Sorry, something went wrong sending your message. Please try again, or message me on LinkedIn.",
      values,
    };
  }

  return { status: "success" };
}
