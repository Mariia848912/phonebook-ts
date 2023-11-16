export interface LoginFormData {
  password: string;
  email: string;
}
export interface RegistrationFormData extends LoginFormData {
  name: string;
}
