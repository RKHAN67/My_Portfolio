import { TextContentSection } from "@/components/TextContentSection";
import { ProductCardImageSection } from "./ProductCardImageSection";
import { ProductCardWarper } from "./ProductCardWarper";
import { ProductCardBrandTitle } from "./ProductCardBrandTitle";
import { ProductCardTitle } from "./ProductCardTitle";
import { ProductCardStarsSection } from "./ProductCardStarsSection";
import { ProductCardPrice } from "./ProductCardPrice";
import { Button } from "@/components/others/Button";

export const ProductCard = ({
  image,
  imageAlt,
  brand,
  title,
  beforePrice,
  afterPrice,
}) => {
  return (
    <ProductCardWarper>
      <ProductCardImageSection>
        <div className="max-w-[100px] min-h-[110px]">
          <img src={image} alt={imageAlt} className="w-full h-full" />
        </div>
      </ProductCardImageSection>
      <TextContentSection className="gap-[8px]">
        <ProductCardBrandTitle>{brand}</ProductCardBrandTitle>
        <ProductCardTitle>{title}</ProductCardTitle>
      </TextContentSection>
      <ProductCardStarsSection />
      <div className="flex justify-between">
        <ProductCardPrice>Price</ProductCardPrice>
        <div className="flex items-end">
          <ProductCardPrice variant="beforePrice">
            {beforePrice}
          </ProductCardPrice>
          <ProductCardPrice variant="afterPrice">{afterPrice}</ProductCardPrice>
        </div>
      </div>
      <div className="flex justify-between">
        <Button variant="blueBtn">
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
    </ProductCardWarper>
  );
};
