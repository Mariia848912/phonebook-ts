import { FieldValues } from "react-hook-form";
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
      <label className="relative">
        <span className="text-textSecondary text-[14px] font-400 leading-[1.4]">
          {label}
        </span>
        <input
          type={type}
          {...register(name)}
          {...rest}
          className={`block p-xs pr-m3 mb-xs3 w-full border-[1px] border-solid rounded-minimal bg-bgWhite outline-0 text-[16px] text-textInputActive font-400 leading-[1.5]
        hover:bg-bgHoverGrey  ${
          error?.message ? "border-borderError" : "focus:border-borderActive"
        }
        `}
        />

        {name === "password" && (
          <button
            type="button"
            onClick={toogleShowPassword}
            className="absolute top-[41px] right-[12px]"
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        )}
        {error?.message && (
          <p className="mt-xs3 text-[14px] font-400 leading-[1.4] text-textError">
            {error.message}
          </p>
        )}
      </label>
    </>
  );
};
