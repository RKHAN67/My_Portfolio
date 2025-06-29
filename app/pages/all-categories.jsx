import { Breadcrumb } from "@/components/hero-section/Breadcrumb";
import { HeroSection } from "@/components/hero-section/HeroSection";
import { HeroSectionDescription } from "@/components/hero-section/HeroSectionDescription";
import { HeroSectionTitle } from "@/components/hero-section/HeroSectionTitle";

export default function AllCategories() {
  return (
    <>
      <HeroSection>
        <HeroSectionTitle>All Categories</HeroSectionTitle>
        <HeroSectionDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </HeroSectionDescription>
        <Breadcrumb />
      </HeroSection>
    </>
  );
}
