import HeroScene from '@/components/3d/HeroScene';
import BrandMarquee from '@/components/sections/BrandMarquee';
import FeaturedCategories from '@/components/sections/FeaturedCategories';
import NewArrivals from '@/components/sections/NewArrivals';
import Lookbook from '@/components/sections/Lookbook';
import BestSellers from '@/components/sections/BestSellers';
import TrustBadges from '@/components/sections/TrustBadges';
import Testimonials from '@/components/sections/Testimonials';
import InstagramFeed from '@/components/sections/InstagramFeed';
import NewsletterCTA from '@/components/sections/NewsletterCTA';

export default function Home() {
  return (
    <>
      <HeroScene />
      <BrandMarquee />
      <FeaturedCategories />
      <NewArrivals />
      <Lookbook />
      <BestSellers />
      <TrustBadges />
      <Testimonials />
      <InstagramFeed />
      <NewsletterCTA />
    </>
  );
}
