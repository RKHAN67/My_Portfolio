export const BannerWrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`relative px-[85px] py-[24px] pb-[41px] bg-[linear-gradient(90deg,#0236A6_0%,#637AC8_100%)] rounded-[20px] overflow-hidden ${className}`}
    >
      <img src="/assets/images/others/banner-wave.png" alt="image of wave line" className="absolute left-[45%] h-[349px] top-0" />
      {children}
    </div>
  );
};
