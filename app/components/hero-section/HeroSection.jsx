import circleWave from "/assets/images/hero-section/circle-wave.png";

export const HeroSection = ({ children, className = "" }) => {
  return (
    <div
      className={`relative flex flex-col gap-[16px] justify-center items-center overflow-hidden bg-[#0236A6] min-h-[305px] ${className}`}
    >
      <img
        src={circleWave}
        alt="circle wave"
        className="max-w-[349px] absolute -top-[30%] -right-10 magic-wave-1"
      />

      <img
        src={circleWave}
        alt="circle wave"
        className="max-w-[349px] absolute top-[50%] -left-10 magic-wave-2"
      />

      {children}
    </div>
  );
};
