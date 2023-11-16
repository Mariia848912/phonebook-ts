import { FieldValues  } from "react-hook-form";
import { InputType } from "./CustomInput.types";
import { Eye, EyeOff } from "../../../images/icons";

export const CustomInput = <T extends FieldValues>({
  label,
  register,
  name,
  type,
  error,
  toogleShowPassword,
  showPassword,
  ...rest
}: InputType<T>) => {
  return (
    <>
      <label>
        <span>{label}</span>
        <input type={type} {...register(name)} {...rest} />
        {error?.message && <p>{error.message}</p>}
      </label>
      {name === 'password' &&  <button
              type="button"
              onClick={toogleShowPassword}
              className="absolute bottom-[16px] right-[12px]"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>}
            
    </>
  );
};
