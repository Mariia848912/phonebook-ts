type Props = {
  type?: "button" | "submit";
  text?: string;
  className?: string;
};

export const Button = ({ type = "submit", text, className }: Props) => {
  return (
    <button
      type={type}
className={`w-full outline-0 py-xs px-m rounded-medium bg-bgDefaultBlue text-textContrast font-500 tracking-[-0.24px] leading-[1.4]
hover:bg-bgHoverBlue active:bg-bgPressedBlue focus:shadow-btFocus ${
        className ? className : ""
      }`}
    >
      {text}
    </button>
  );
};
