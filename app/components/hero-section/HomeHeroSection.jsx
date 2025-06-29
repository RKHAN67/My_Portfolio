import { useEffect, useState } from "react";
import { Container } from "@/layouts/Container";
import { Heading } from "../others/Heading";
import { Button } from "../others/Button";

import circleWave from "/assets/images/hero-section/circle-wave.png";

import iphoneProMaxImage from "/assets/images/hero-section/iphone-pro-max.png";
import gamingCpuImage from "/assets/images/hero-section/gaming-cpu.png";
import mobileImage from "/assets/images/hero-section/mobile-image.png";
import smartWatchImage from "/assets/images/hero-section/smart-watch.png";
import cpuWithGamingImage from "/assets/images/hero-section/cpu-with-gaming.png";

const heroSectionData = [
  {
    title: "Experience Power",
    highlight: "iPhone Pro Max",
    description1:
      "Enjoy premium design and top performance that handles everything you do — fast, smooth, and efficient.",
    description2:
      "Capture beautiful moments with cinematic clarity and future-ready camera technology built for creators.",
    price: "$359,999",
    image: iphoneProMaxImage,
  },
  {
    title: "Game Beast",
    highlight: "Beast Gaming CPU",
    description1:
      "Built for intense gaming, smooth multitasking, and streaming — fast cooling with customizable RGB case.",
    description2:
      "Get top-tier performance, stunning visuals, and serious speed for professional gaming sessions.",
    price: "$189,999",
    image: gamingCpuImage,
  },
  {
    title: "iPhone Power",
    highlight: "iPhone Pro Max",
    description1:
      "Premium design with fast, smooth performance built for multitasking and everyday high-end use.",
    description2:
      "Capture crisp photos, shoot cinematic videos, and enjoy next-level iPhone innovation daily.",
    price: "$359,999",
    image: mobileImage,
  },
  {
    title: "Live Smart",
    highlight: "Smart Watch Series",
    description1:
      "Track your daily steps, monitor health, and stay connected with alerts — right on your wrist.",
    description2:
      "Waterproof, music control, stylish and perfect for fitness or regular use throughout your day.",
    price: "$12,499",
    image: smartWatchImage,
  },
  {
    title: "Pro Gaming",
    highlight: "RGB CPU",
    description1:
      "All-in-one gaming setup with RGB case, high-speed CPU, monitor, and keyboard combo for gamers.",
    description2:
      "Play and stream at high FPS with bold visuals and responsive multitasking performance inside.",
    price: "$239,999",
    image: cpuWithGamingImage,
  },
];

export const HomeHeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSectionData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, highlight, description1, description2, price, image } =
    heroSectionData[current];

  return (
    <div>
      <div className="bg-[#0236A6] py-[60px] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-[25px]">
              <Heading variant="big" className="max-w-[430px] text-white">
                {title} <span className="text-[#1658E4]">{highlight}</span>
              </Heading>
              <p className="text-[16px] text-white max-w-[432px]">
                - {description1}
              </p>
              <p className="text-[16px] text-white max-w-[432px]">
                - {description2}
              </p>
              <div className="flex flex-col max-w-[240px]">
                <p className="text-[24px] font-semibold text-white">
                  Starting From
                </p>
                <p className="text-[24px] font-semibold text-white italic text-end">
                  just <span className="text-[#FFD600]">{price}</span>
                </p>
              </div>
              <Button>
                Buy Now
                <svg
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[10px]"
                >
                  <use href="/assets/svg/arrow-icon.svg#arrow-icon" />
                </svg>
              </Button>
            </div>

            <div className="relative flex justify-center items-center">
              <img
                src={circleWave}
                alt="circle wave"
                className="max-w-[349px] absolute -top-[14%] -right-10 magic-wave-1"
              />

              <img
                src={circleWave}
                alt="circle wave"
                className="max-w-[349px] absolute top-[50%] right-50 magic-wave-2"
              />

              <div className="w-[320px] h-[360px] z-10">
                <img
                  src={image}
                  alt="hero"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="flex justify-center items-center w-full -translate-y-6">
        <div className="flex justify-between items-center shadow-[5px_5px_6px_0px_#00000040] min-h-[49px] rounded-[30px] px-[28px] pr-[6px] w-[500px] bg-white">
          <input
            type="text"
            className="outline-none text-[16px] text-black placeholder:text-[#C7C7C7C7] w-full"
            placeholder="Search"
          />
          <div className="flex justify-center items-center bg-[#1150D5] rounded-full w-[42px] min-h-[40px] cursor-pointer">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[16px]"
            >
              <use href="/assets/svg/search-icon.svg#search-icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
