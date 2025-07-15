export const HighlightedWord = ({ className = "", children}) => {
  return <span className={`text-[#1150D5] ${className}`}>{children}</span>;
};
