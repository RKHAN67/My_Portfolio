export const HeroSectionDescription = ({ children, className = "" }) => {
  return (
    <p className={`text-[16px] font-medium text-white text-center ${className}`}>
      {children}
    </p>
  );
};
