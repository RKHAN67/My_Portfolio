export const ProductCardBrandTitle = ({children, className=''}) => {
  return (
    <p className={`text-[15px] text-[#0172E6] font-urbanist font-semibold ${className}`}>{children}</p>
  );
};