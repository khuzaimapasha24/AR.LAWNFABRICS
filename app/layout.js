import './globals.css';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';
import BackToTop from '@/components/layout/BackToTop';
import LoadingScreen from '@/components/ui/LoadingScreen';
import CursorFollower from '@/components/ui/CursorFollower';

export const metadata = {
  title: 'AR.LAWN — Luxury Fabrics & Premium Brands',
  description: 'Pakistan\'s most advanced multi-brand women\'s clothing platform. Discover premium lawn, chiffon, bridal wear & pret from top fashion houses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LoadingScreen />
        <CursorFollower />
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <BackToTop />
      </body>
    </html>
  );
}
