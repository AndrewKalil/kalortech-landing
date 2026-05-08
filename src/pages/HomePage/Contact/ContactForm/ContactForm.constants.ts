import { object, string } from "yup";

import type { ContactFormValues } from "./ContactForm.types";

export const CONTACT_INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

export const CONTACT_SCHEMA = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  company: string(),
  service: string().required("Please select a service"),
  message: string().required("Message is required"),
});

export const SERVICE_OPTIONS = [
  "Web Development",
  "Workflow Automation",
  "Integrations & APIs",
  "Workspace Setup",
  "Cloud & Hosting",
  "Consulting & Technical Support",
  "Not sure yet",
] as const;
