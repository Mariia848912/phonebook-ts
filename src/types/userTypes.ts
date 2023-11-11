export interface UserLogIn {
  password: string;
  email: string;
}
export interface UserRegister extends UserLogIn {
  name: string;
}
