import clsx from "clsx";

export const HeadingContentSection = ({children, className=''}) => {
  return (
    <div className={clsx('flex flex-col gap-[10px] mx-auto text-center',className)}>{children}</div>
  );
};