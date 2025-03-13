// import { CountdownTimer } from "@/components/countdown-timer";
import BackToTop from "@/components/back-to-top";
import HeroDetails from "@/components/hero-details";
import Hero from "@/components/hero-first";
import HeroProducts from "@/components/hero-products";
// import HeroServices from "@/components/hero-services";
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
      <BackToTop />
    </section>
  );
};

export default HomePage;
