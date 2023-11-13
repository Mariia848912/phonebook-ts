import { InputHTMLAttributes } from "react";
import {  UseFormRegister} from "react-hook-form";
import { UserRegister } from "../../../types/user.types";



export type InputProps = {
    label: string;
  register: UseFormRegister<UserRegister>;
    name: keyof UserRegister;
    type: "text" | "email" | "password";
    error?: { message?: string };
}  & InputHTMLAttributes<HTMLInputElement>;