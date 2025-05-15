// pages/index.js
import VantaWaves from "./components/Canvas";
import TestimonialSection from "./components/Testimonial";
import Footer from "./components/footer";
import Platforms from "./components/platform";

export default function Home() {
  return (
    <div>
      <VantaWaves />
      <Platforms />
      <TestimonialSection />
      <Footer />
      
    </div>
  );
}
