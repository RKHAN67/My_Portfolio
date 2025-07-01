import { ProductCardBrandTitle } from "@/components/cards/product-card/ProductCardBrandTitle";
import { ProductCardImageSection } from "@/components/cards/product-card/ProductCardImageSection";
import { ProductCardStarsSection } from "@/components/cards/product-card/ProductCardStarsSection";
import { ProductCardTitle } from "@/components/cards/product-card/ProductCardTitle";
import { ProductCardWarper } from "@/components/cards/product-card/ProductCardWarper";
import { HomeHeroSection } from "@/components/hero-section/HomeHeroSection";
import { TextContentSection } from "@/components/TextContentSection";
import { Container } from "@/layouts/Container";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HomeHeroSection />

      <Container>
        <ProductCardWarper>
          <ProductCardImageSection></ProductCardImageSection>
          <TextContentSection>
            <ProductCardBrandTitle>Apple</ProductCardBrandTitle>
            <ProductCardTitle>
              Lorem Ipsum is simply dummy text of the printing
            </ProductCardTitle>
          </TextContentSection>
          <ProductCardStarsSection />
        </ProductCardWarper>
      </Container>
    </div>
  );
}
