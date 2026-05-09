import { useCallback, useState } from "react";
import { useFormik } from "@kalortech/shared-logic";

import { supabase } from "~integrations/supabase";

import { LOGIN_INITIAL_VALUES, LOGIN_SCHEMA } from "./AdminLogin.constants";

export const useAdminLogin = () => {
  const [authError, setAuthError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = useCallback(async (formValues: typeof LOGIN_INITIAL_VALUES) => {
    setAuthError(null);
    setIsSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: formValues.email,
      password: formValues.password,
    });
    setIsSubmitting(false);
    if (error) setAuthError(error.message);
  }, []);

  const { values, errors, onChange, handleSubmit } = useFormik({
    initialValues: LOGIN_INITIAL_VALUES,
    validationSchema: LOGIN_SCHEMA,
    onSubmit: onSubmitHandler,
  });

  return { values, errors, onChange, handleSubmit, authError, isSubmitting };
};
