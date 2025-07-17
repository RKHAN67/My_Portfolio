import crownImage from "/assets/images/others/crown-image.png";

export const PremiumCardWrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`relative flex flex-col justify-between shadow-[1px_2px_4px_0px_#00000040] bg-white rounded-[10px] max-w-[281px] min-h-[350px] py-[16px] px-[14px] ${className}`}
    >
      {children}

      <img
        src={crownImage}
        alt="image of crown"
        className="absolute -top-5 -right-4 max-w-[39px]"
      />
      <svg
        className="absolute top-[68%] right-5 w-[19px]"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use href="/assets/svg/coins-icon.svg#coins-icon" />
      </svg>
    </div>
  );
};
