import { object, string } from "yup";

export const LOGIN_INITIAL_VALUES = {
  email: "",
  password: "",
};

export const LOGIN_SCHEMA = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string().min(6, "Min 6 characters").required("Password is required"),
});
