import { TextContentSection } from "@/components/TextContentSection";
import { PremiumCardImageSection } from "./PremiumCardImageSection";
import { PremiumCardBrandTitle } from "./PremiumCardBrandTitle";
import { PremiumCardTitle } from "./PremiumCardTitle";
import { PremiumCardStarsSection } from "./PremiumCardStarsSection";
import { PremiumCardPrice } from "./PremiumCardPrice";
import { Button } from "@/components/others/Button";
import { PremiumCardWrapper } from "./PremiumCardWrapper";

export const PremiumCard = ({
  image,
  imageAlt,
  brand,
  title,
  beforePrice,
  afterPrice,
}) => {
  return (
    <PremiumCardWrapper>
      <PremiumCardImageSection>
        <div className="max-w-[100px] min-h-[110px]">
          <img src={image} alt={imageAlt} className="w-full h-full" />
        </div>
      </PremiumCardImageSection>
      <TextContentSection className="gap-[8px]">
        <PremiumCardBrandTitle>{brand}</PremiumCardBrandTitle>
        <PremiumCardTitle>{title}</PremiumCardTitle>
      </TextContentSection>
      <PremiumCardStarsSection />
      <div className="flex justify-between">
        <PremiumCardPrice>Price</PremiumCardPrice>
        <div className="flex items-end">
          <PremiumCardPrice variant="beforePrice">
            {beforePrice}
          </PremiumCardPrice>
          <PremiumCardPrice variant="afterPrice">{afterPrice}</PremiumCardPrice>
        </div>
      </div>
      <div className="flex justify-between">
        <Button variant="yellowBtn">
          View Now
          <svg
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[10px]"
          >
            <use href="/assets/svg/arrow-icon.svg#arrow-icon" />
          </svg>
        </Button>
        <Button variant="blackBtn">
          <svg
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[13px]"
          >
            <use href="/assets/svg/whatsapp-icon.svg#whatsapp-icon" />
          </svg>
          WhatsApp
        </Button>
      </div>
    </PremiumCardWrapper>
  );
};
