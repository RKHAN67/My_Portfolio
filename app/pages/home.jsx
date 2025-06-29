import { HomeHeroSection } from "@/components/hero-section/HomeHeroSection";
import { Container } from "@/layouts/Container";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HomeHeroSection />

      <Container></Container>
    </div>
  );
}
