type Props = {
    children: React.ReactNode;
    containerStyle?: string;
}

export const Container = ({ children, containerStyle }:Props) => {
  return (
    <div
      className={`ml-auto mr-auto pr-[16px] pl-[16px] mobile480:pr-[24px] mobile480:pl-[24px] ${containerStyle}`}
    >
      {children}
    </div>
  );
};
