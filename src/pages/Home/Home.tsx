import Banner from '@/src/libs/Banner/Banner';
import Footer from '@/src/libs/Footer/Footer';
import Navbar from '@/src/libs/Navbar/Navbar';
import Wrapper from '@/src/libs/Wrapper/Wrapper';

export default function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Banner />
      <Footer />
    </Wrapper>
  );
}
