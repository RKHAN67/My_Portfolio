import clsx from "clsx";

export const SubHeading = ({ ElemType = "p", children, className = "" }) => {
  return (
    <ElemType
      className={clsx(`text-[14px] text-[#444444] font-semibold`, className)}
    >
      {children}
    </ElemType>
  );
};
