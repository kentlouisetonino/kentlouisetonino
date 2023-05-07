import { Footer, HomeContent, Navbar } from '@/libs/ui';

export default function HomePage() {
  return (
    <div className="lg:w-[1000px] mx-auto">
      <Navbar />
      <HomeContent />
      <Footer />
    </div>
  );
}
