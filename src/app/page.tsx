import { Banner, Footer, Navbar } from '@/libs/ui';

export default function HomePage() {
  return (
    <div className="lg:w-[1000px] mx-auto">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}
