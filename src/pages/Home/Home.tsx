import Navbar from '@/src/libs/Navbar/Navbar';
import TitleText from '@/src/libs/TitleText/TitleText';
import Wrapper from '@/src/libs/Wrapper/Wrapper';

export default function Home() {
  return (
    <Wrapper>
      {/* navbar */}
      <Navbar />

      {/* banner */}
      <div className="lg:w-[640px] mx-auto py-40 text-center">
        <TitleText
          value="HELLO!"
          size="xlarge"
          className="text-white/90 font-black block"
        />
        <p className="italic text-white/90">
          I&#39;m Computer Programmer with industry experience in Web
          Application Development.
        </p>
      </div>

      {/* footer */}
      <div className="p-4 border-green-500 border-dashed border-t-[0.5px] opacity-90">
        <p className="w-full text-center">
          &copy; 2023 Copyright. Developed by Kent Louise Tonino
        </p>
      </div>
    </Wrapper>
  );
}
