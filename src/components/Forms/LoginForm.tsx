
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { CustomInput } from './CustomInput/CustomInput';
import { LoginFormData } from '../../types/user.types';
import { useAppDispatch } from '../../redux/hooks';
import { logIn } from "../../redux/auth/authOperations";
import { yupResolver } from "@hookform/resolvers/yup";
import { getValitadionSchemaLoginForm } from "../../utils/getValitadionSchemaLoginForm";


export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const toogleShowPassword = () =>  setShowPassword((prev) => !prev);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(getValitadionSchemaLoginForm()),
  });

  const onSubmit = (data: LoginFormData) => {
     dispatch(logIn(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput<LoginFormData>
        label="Email"
        register={register}
        name="email"
        type="email"
        error={errors.email}
      />
      <CustomInput<LoginFormData>
        label="Password"
        register={register}
        name="password"
        toogleShowPassword={toogleShowPassword}
        showPassword={showPassword}
        type={showPassword ? "text" : "password"}
        error={errors.password}
      />
      
      <button type="submit">Login</button>
    </form>
  );
};
