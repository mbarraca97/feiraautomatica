import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import ProofSection from '../components/sections/ProofSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import AwardStrip from '../components/sections/AwardStrip';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import QuoteBannerSection from '../components/sections/QuoteBannerSection';
import BlogPreviewSection from '../components/sections/BlogPreviewSection';
import FAQSection from '../components/sections/FAQSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProofSection />
        <BenefitsSection />
        <AwardStrip />
        <TestimonialsSection />
        <QuoteBannerSection />
        <BlogPreviewSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
