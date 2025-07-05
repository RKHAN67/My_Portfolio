import { ProductCardBrandTitle } from "@/components/cards/product-card/ProductCardBrandTitle";
import { ProductCardImageSection } from "@/components/cards/product-card/ProductCardImageSection";
import { ProductCardPrice } from "@/components/cards/product-card/ProductCardPrice";
import { ProductCardStarsSection } from "@/components/cards/product-card/ProductCardStarsSection";
import { ProductCardTitle } from "@/components/cards/product-card/ProductCardTitle";
import { ProductCardWarper } from "@/components/cards/product-card/ProductCardWarper";
import { HomeHeroSection } from "@/components/hero-section/HomeHeroSection";
import { Button } from "@/components/others/Button";
import { TextContentSection } from "@/components/TextContentSection";
import { Container } from "@/layouts/Container";
import iphoneImage from "/assets/images/product-images/iphone.png";
import { ProductCard } from "@/components/cards/product-card/ProductCard";
import { BannerWrapper } from "@/components/banner/BannerWrapper";

export const productCardData = [
  {
    image: iphoneImage,
    imageAlt: "Product 1 Image",
    brand: "Apple",
    title: "Elegance Meets Power iPhone Pro Max",
    beforePrice: "$39.99",
    afterPrice: "$999",
  },
  {
    image: iphoneImage,
    imageAlt: "Product 1 Image",
    brand: "Apple",
    title: "Elegance Meets Power iPhone Pro Max",
    beforePrice: "$39.99",
    afterPrice: "$999",
  },
  {
    image: iphoneImage,
    imageAlt: "Product 1 Image",
    brand: "Apple",
    title: "Elegance Meets Power iPhone Pro Max",
    beforePrice: "$39.99",
    afterPrice: "$999",
  },
  {
    image: iphoneImage,
    imageAlt: "Product 1 Image",
    brand: "Apple",
    title: "Elegance Meets Power iPhone Pro Max",
    beforePrice: "$39.99",
    afterPrice: "$999",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HomeHeroSection />

      <Container>
        <div className="flex justify-between gap-[20px]">
          {productCardData.map((data, index) => (
            <ProductCard
              key={index}
              image={data.image}
              imageAlt={data.imageAlt}
              brand={data.brand}
              title={data.title}
              beforePrice={data.beforePrice}
              afterPrice={data.afterPrice}
            />
          ))}
        </div>

        <BannerWrapper />
      </Container>
    </div>
  );
}
