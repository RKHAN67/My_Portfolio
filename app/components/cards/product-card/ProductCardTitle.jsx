export const ProductCardTitle = ({ children, className = "" }) => {
  return (
    <p className={`text-[16px] font-semibold text-black ${className}`}>
      {children}
    </p>
  );
};
