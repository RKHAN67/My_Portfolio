export const ProductCardImageSection = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center mx-auto shadow-[0px_1px_4px_0px_#00000040] bg-white w-[173px] rounded-[10px] h-[129px] ${className}`}
    >
      {children}
    </div>
  );
};
