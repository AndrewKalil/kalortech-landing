import type { ContactPayload } from "./contact.types";

export const sendContactMessage = async (payload: ContactPayload): Promise<void> => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = (await response.json()) as { error?: string };
    throw new Error(data.error ?? "Failed to send message");
  }
};
