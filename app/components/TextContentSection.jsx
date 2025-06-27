export const TextContentSection = ({ children, className = "gap-[10px]" }) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};
