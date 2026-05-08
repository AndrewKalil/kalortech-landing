import path from "path";
import type { IncomingMessage, ServerResponse } from "http";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

function contactDevPlugin(env: Record<string, string>) {
  return {
    name: "contact-api",
    configureServer(server: {
      middlewares: { use: (fn: (req: IncomingMessage, res: ServerResponse, next: () => void) => void) => void };
    }) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== "/api/contact" || req.method !== "POST") return next();

        const chunks: Buffer[] = [];
        req.on("data", (chunk: Buffer) => chunks.push(chunk));
        await new Promise<void>((resolve) => req.on("end", resolve));

        let body: { name?: string; email?: string; company?: string; service?: string; message?: string };
        try {
          body = JSON.parse(Buffer.concat(chunks).toString("utf-8")) as typeof body;
        } catch {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Invalid JSON" }));
          return;
        }

        const { name, email, company, service, message } = body;
        if (!name || !email || !message || !service) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Missing required fields" }));
          return;
        }

        const { Resend } = await import("resend");
        const resend = new Resend(env.RESEND_API_KEY);
        const { error } = await resend.emails.send({
          from: "Kalortech Contact <onboarding@resend.dev>",
          to: env.RESEND_TO_EMAIL ?? "",
          replyTo: email,
          subject: `Kalortech contact from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nCompany: ${company ?? "—"}\nService: ${service}\n\nMessage:\n${message}`,
        });

        res.setHeader("Content-Type", "application/json");
        if (error) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: "Failed to send email" }));
        } else {
          res.statusCode = 200;
          res.end(JSON.stringify({ success: true }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), contactDevPlugin(env)],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        "~components": path.resolve(__dirname, "src/components"),
        "~hooks": path.resolve(__dirname, "src/hooks"),
        "~constants": path.resolve(__dirname, "src/constants"),
        "~pages": path.resolve(__dirname, "src/pages"),
        "~services": path.resolve(__dirname, "src/services"),
      },
    },
  };
});
