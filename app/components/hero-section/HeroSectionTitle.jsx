export const HeroSectionTitle = ({ children, className = "" }) => {
  return (
    <p className={`font-young-serif text-[26px] text-white ${className}`}>
      {children}
    </p>
  );
};
