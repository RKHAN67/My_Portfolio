import { HomeHeroSection } from "@/components/hero-section/HomeHeroSection";
import { ProductCard } from "@/components/cards/product-card/ProductCard";
import { Container } from "@/layouts/Container";
import { BannerWrapper } from "@/components/banner/BannerWrapper";
import iphone2Image from "/assets/images/product-images/iphone-2.png";
import iphoneImage from "/assets/images/product-images/iphone.png";
import { TextContentSection } from "@/components/TextContentSection";
import { Heading } from "@/components/typography/Heading";
import { HighlightedWord } from "@/components/typography/HighlightedWord";
import { SubHeading } from "@/components/typography/SubHeading";
import { HeadingContentSection } from "@/components/HeadingContentSection";

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
        <BannerWrapper>
          <div className="flex justify-between">
            <div className="flex flex-col gap-[30px]">
              <button
                className="bg-white rounded-[16px] max-w-[150px] px-[16px] py-[8px]
            font-urbanist text-[16px] font-bold"
              >
                <span className="text-[#0172E6]">HOT</span> Offer
              </button>

              <p className="text-[40px] font-urbanist font-bold text-white">
                Apple Phone <br />{" "}
                <span className="text-[#FFE76B]">IPhone 16 Pro Max</span>
              </p>
              <TextContentSection>
                <p className="text-[35px] font-urbanist font-bold text-white">
                  Descuento:
                </p>
                <p className="text-[35px] font-urbanist font-bold text-white ml-[80px]">
                  <span
                    className="
              text-[#FFE76B]"
                  >
                    50%
                  </span>{" "}
                  OFF
                </p>
              </TextContentSection>
            </div>
            <div className="-rotate-[7.77deg] max-w-[235px] min-h-[300px]">
              <img
                src={iphone2Image}
                alt="image of iphone"
                className="w-full h-full"
              />
            </div>
          </div>
        </BannerWrapper>
        <HeadingContentSection>
          <Heading>
            Lorem Lorem <HighlightedWord>Ipum</HighlightedWord>
          </Heading>
          <SubHeading>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </SubHeading>
        </HeadingContentSection>
      </Container>
    </div>
  );
}
