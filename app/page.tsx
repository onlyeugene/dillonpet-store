// import { CountdownTimer } from "@/components/countdown-timer";
import HeroDetails from "@/components/hero-details";
import Hero from "@/components/hero-first";
import HeroProducts from "@/components/hero-products";
import Services from "@/components/services";
import SpecialOffers from "@/components/special-offers";
import TestimonialCarousel from "@/components/testimonials";

const HomePage = () => {
  return (
    <section>
      <div className="relative border-b md:pb-0 pb-[15rem]">
        <Hero />
        <div className="absolute bottom-20 w-full">
          <HeroDetails />
        </div>
      </div>
      <HeroProducts />
      <Services />
      <TestimonialCarousel />
      {/* <CountdownTimer endDate='' /> */}
      <SpecialOffers />
    </section>
  );
};

export default HomePage;
