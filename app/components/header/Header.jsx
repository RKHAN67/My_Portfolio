import { Container } from "@/layouts/Container";
import { TopBar } from "./TopBar";

import logo from "/assets/images/header-image/bazaryo-logo.png";

const headerRouteData = [
  {
    title: "Home",
  },
  {
    title: "About Us",
  },
  {
    title: "Shop",
  },
  {
    title: "Categories",
  },
  {
    title: "Brands",
  }
];

export const Header = () => {
  return (
    <>
    <TopBar />

    <div className="bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <div className="max-w-[264.6px] min-h-[48px] pb-2 cursor-pointer">
            <img src={logo} alt="image of logo"  className="w-full h-full"/>
          </div>
          <div className="flex gap-[30px]">
            {headerRouteData.map((data, index) => (
              <p key={index} className="text-[14px] font-urbanist font-semibold cursor-pointer">
                {data.title}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-[16px]">
            <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] cursor-pointer">
              <use href="/assets/svg/heart-icon.svg#heart-icon" />
            </svg>
            <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] cursor-pointer">
              <use href="/assets/svg/account-icon.svg#account-icon" />
            </svg>
            <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] cursor-pointer">
              <use href="/assets/svg/cart-icon.svg#cart-icon" />
            </svg>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
};
