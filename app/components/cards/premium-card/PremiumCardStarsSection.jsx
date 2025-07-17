export const PremiumCardStarsSection = ({ rating = 5 }) => {
  return (
    <div className="flex justify-center items-center gap-[4px]">
      {Array.from({ length: rating }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px]"
        >
          <use href="/assets/svg/star-icon.svg#star-icon" />
        </svg>
      ))}
    </div>
  );
};
