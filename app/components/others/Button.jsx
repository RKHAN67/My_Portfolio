import clsx from "clsx";

export const Button = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "blueBtn",
  };

  const button = variants[variant] || variants.default;

  return (
    <div className={clsx(button, className, "button-layout")}>
      {children}
    </div>
  );
};
