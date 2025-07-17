export const PremiumCardImageSection = ({ children, className = "" }) => {
  return (
    <div
      className={`flex justify-center items-center mx-auto shadow-[0px_1px_4px_0px_#00000040] rounded-[10px] min-w-[169px] min-h-[129px] bg-[linear-gradient(117.54deg,_#FFD700_20.63%,_#FFB300_100%)] ${className}`}
    >
      {children}
    </div>
  );
};
