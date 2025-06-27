import { Container } from "@/layouts/Container";
import { Heading } from "../others/Heading";
import { TextContentSection } from "../TextContentSection";
import { Button } from "../others/Button";

import circleWave from "/assets/images/hero-section/circle-wave.png";
import mobileImage from "/assets/images/hero-section/mobile-image.png";

export const HomeHeroSection = () => {
  return (
    <div className="bg-[#0236A6] py-[60px] overflow-hidden">
      <Container>
        <div className="flex justify-between">
          <TextContentSection className="gap-[33px]">
            <TextContentSection>
              <Heading variant="big" className="max-w-[430px]">
                Lorem Ipusm <span className="text-[#1658E4]">Lorem Lorem</span>{" "}
                Ipusm
              </Heading>
              <p className="text-[16px] text-white max-w-[432px]">
                - Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <p className="text-[16px] text-white max-w-[432px]">
                - Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>

              <div className="flex flex-col max-w-[240px]">
                <p className="text-[24px] font-semibold text-white ">
                  Starting From
                </p>
                <p className="text-[24px] font-semibold text-white italic text-end">
                  just <span className="text-[#FFD600]">$888</span>
                </p>
              </div>
            </TextContentSection>
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
          </TextContentSection>

          <div className="relative">
            <div className="max-w-[349px] absolute top-[10%] right-0">
              <img
                src={circleWave}
                alt="image of circle wave"
                className="w-full h-full"
              />
            </div>
            <div className="max-w-[349px] absolute top-[10%] right-0">
              <img
                src={circleWave}
                alt="image of circle wave"
                className="w-full h-full"
              />
            </div>
            <div className="max-w-[314px] z-50 ">
            <img src={mobileImage} alt="image of mobile" className="w-full h-full" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
