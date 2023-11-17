import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomInput } from "./CustomInput/CustomInput";
import { RegistrationFormData } from "../../types/user.types";
import { useAppDispatch } from "../../redux/hooks";
import { getValitadionSchemaRegisterForm } from "../../utils/getValitadionSchemaRegisterForm";
import { signUp } from "../../redux/auth/authOperations";
import { Button } from "../Common/Button";

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
    <div
      className="mobile375:pt-[56px] 
  mobile480:w-[423px] mobile480:mr-auto mobile480:ml-auto  mobile480:p-[40px] mobile480:absolute  mobile480:top-[50%] mobile480:left-[50%] mobile480:translate-x-[-50%]  
  mobile480:translate-y-[-50%] mobile480:border-[1px] mobile480:border-borderDefault mobile480:rounded-large"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-[12px] mb-m2">
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
        </div>
        <Button text="Register" />
      </form>
    </div>
  );
};
