import { useForm } from 'react-hook-form';
import { useState } from "react";
import { CustomInput } from './CustomInput/CustomInput';
import { RegistrationFormData } from '../../types/user.types';
import { useAppDispatch } from '../../redux/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { getValitadionSchemaRegisterForm } from '../../utils/getValitadionSchemaRegisterForm';
import { signUp } from '../../redux/auth/authOperations';


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
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(getValitadionSchemaRegisterForm()),
  });

  const onSubmit = (data: RegistrationFormData) => {
    dispatch(signUp(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput<RegistrationFormData>
        label="Name"
        register={register}
        name="name"
        type="text"
        error={errors.name}
      />
      <CustomInput<RegistrationFormData>
        label="Email"
        register={register}
        name="email"
        type="email"
        error={errors.email}
      />
      <CustomInput<RegistrationFormData>
        label="Password"
        register={register}
        name="password"
        type={showPassword ? "text" : "password"}
           toogleShowPassword={toogleShowPassword}
        showPassword={showPassword}
        error={errors.password}
      />
  
      <button type="submit">Register</button>
    </form>
  );
};
