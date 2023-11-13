import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { UserLogIn } from "../../types/user.types";
import { useAppDispatch } from "../../redux/hooks";
import { logIn } from "../../redux/auth/authOperations";
import { Eye, EyeOff } from "../../images/icons";
import { getValitadionSchemaLoginForm } from "../../utils/getValitadionSchemaLoginForm";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const toogleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogIn>({
    resolver: yupResolver(getValitadionSchemaLoginForm()),
  });

  const onSubmit: SubmitHandler<UserLogIn> = (data) => {
    dispatch(logIn(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" {...register("email")} />
      {errors?.email?.message && <p>{errors.email?.message}</p>}

      <label htmlFor="password">Password</label>
      <input id="password" type="password" {...register("password")} />
      {errors?.email?.message && <p>{errors.email?.message}</p>}

      <button type="button" onClick={toogleShowPassword}>
        {showPassword ? <Eye /> : <EyeOff />}
      </button>

      <input type="submit" />
    </form>
  );
};
