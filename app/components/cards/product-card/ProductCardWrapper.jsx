export const ProductCardWrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col justify-between gap-[16px]  rounded-[10px] shadow-[1px_2px_4px_0px_#00000040] bg-white max-w-[288px] min-h-[350px] py-[16px] px-[15px] ${className}`}
    >
      {children}
    </div>
  );
};
