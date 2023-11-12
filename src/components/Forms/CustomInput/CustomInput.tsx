import { InputProps } from "./CustomInput.types";

export const CustomInput = ({
  label,
  register,
  name,
  type,
  error,
  ...rest
}: InputProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register(name)} {...rest} />

      {error?.message && <p>{error.message}</p>}
    </>
  );
};
