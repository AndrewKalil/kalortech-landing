export interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export type SubmitStatus = "idle" | "loading" | "success" | "error";
