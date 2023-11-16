import { InputHTMLAttributes } from "react";

import { UseFormRegister, FieldValues, FieldPath } from "react-hook-form";

export type InputType<T extends FieldValues> = {
  label: string;
  name: FieldPath<T>;
  type: "text" | "email" | "password";
  error?: { message?: string };
  toogleShowPassword?: () => void;
  showPassword?: boolean;
  register: UseFormRegister<T>;
} & InputHTMLAttributes<HTMLInputElement>;