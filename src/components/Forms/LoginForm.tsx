import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomInput } from "./CustomInput/CustomInput";
import { LoginFormData } from "../../types/user.types";
import { useAppDispatch } from "../../redux/hooks";
import { logIn } from "../../redux/auth/authOperations";
import { getValitadionSchemaLoginForm } from "../../utils/getValitadionSchemaLoginForm";
import { Button } from "../Common/Button";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const toogleShowPassword = () => setShowPassword((prev) => !prev);

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
    <div
      className="mobile375:pt-[56px] 
  mobile480:w-[423px] mobile480:mr-auto mobile480:ml-auto  mobile480:p-[40px] mobile480:absolute  mobile480:top-[50%] mobile480:left-[50%] mobile480:translate-x-[-50%]  
  mobile480:translate-y-[-50%] mobile480:border-[1px] mobile480:border-borderDefault mobile480:rounded-large"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-[12px] mb-m2">
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
        </div>
        <Button text="Log in" />
      </form>
    </div>
  );
};
