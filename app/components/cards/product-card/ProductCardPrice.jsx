export const ProductCardPrice = ({
  children,
  variant = "default",
  className = "",
}) => {
  const variants = {
    default: "text-black",
    beforePrice: "text-black line-through !text-[10px]",
    afterPrice: "text-[#0172E6]",
  };

  return (
    <p
      className={`text-[14px] font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </p>
  );
};
