import { useCallback, useState } from "react";
import { useFormik } from "@kalortech/shared-logic";

import { sendContactMessage } from "~services";

import { CONTACT_INITIAL_VALUES, CONTACT_SCHEMA } from "./ContactForm.constants";
import type { ContactFormValues, SubmitStatus } from "./ContactForm.types";

export const useContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const onSubmitHandler = useCallback(async (values: ContactFormValues) => {
    setSubmitStatus("loading");
    try {
      await sendContactMessage({
        name: values.name,
        email: values.email,
        company: values.company || undefined,
        service: values.service,
        message: values.message,
      });
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  }, []);

  const formik = useFormik<ContactFormValues>({
    initialValues: CONTACT_INITIAL_VALUES,
    validationSchema: CONTACT_SCHEMA,
    onSubmit: onSubmitHandler,
  });

  return { formik, submitStatus };
};
