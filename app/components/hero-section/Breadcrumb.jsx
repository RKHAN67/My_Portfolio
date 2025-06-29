export const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[16px]"
      >
        <use href="/assets/svg/home-icon.svg#home-icon" />
      </svg>

      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px]">
        <use href="/assets/svg/breadcrumb-arrow-icon.svg#breadcrumb-arrow-icon" />
      </svg>

      <p className="text-white text-[16px] font-semibold">About Us</p>
    </div>
  );
};
