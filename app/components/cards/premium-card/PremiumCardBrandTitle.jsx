export const PremiumCardBrandTitle = ({children, className=''}) => {
  return (
    <p
      className={`text-[15px] text-[#FFBB00] font-urbanist font-semibold ${className}`}
    >
      {children}
    </p>
  );
};
