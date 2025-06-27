import clsx from "clsx";

export const Heading = ({
  ElemType = "p",
  children,
  variant = "default",
  className = "",   
}) => {

  const variants = {
    big: "text-[40px] text-white font-young-serif leading-[50px]",
    default: "text-[26px] text-[#000000] font-urbanist",
  };

  const heading = variants[variant] || variants.default;
  
  return (
    <ElemType className={clsx(heading, className)}>
      {children}
    </ElemType>
  );
};
