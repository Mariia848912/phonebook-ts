import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { UserRegister } from "../../types/user.types";
import { getValitadionSchemaRegisterForm } from "../../utils/getValitadionSchemaRegisterForm";
import { useAppDispatch } from "../../redux/hooks";
import { signUp } from "../../redux/auth/authOperations";
import { Eye, EyeOff } from "../../images/icons";
import { CustomInput } from "./CustomInput/CustomInput";

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const toogleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegister>({
    resolver: yupResolver(getValitadionSchemaRegisterForm()),
  });

  const onSubmit: SubmitHandler<UserRegister> = (data) => {
    dispatch(signUp(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        label="Name"
        register={register}
        name="name"
        type="text"
        error={errors.name}
      />
      <CustomInput
        label="Email"
        register={register}
        name="email"
        type="email"
        error={errors.email}
      />

      <CustomInput
        label="Password"
        register={register}
        name="password"
        type={showPassword ? "text" : "password"}
        error={errors.password}
      />

      <button type="button" onClick={toogleShowPassword}>
        {showPassword ? <Eye /> : <EyeOff />}
      </button>

      <input type="submit" />
    </form>
  );
};
