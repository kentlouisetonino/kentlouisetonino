import TitleText from '../../TitleText/TitleText';

const navbarHeight = '67px';
const footerHeight = '57px';

export default function HomeContent() {
  return (
    <div
      className="lg:w-[640px] mx-auto flex align-middle items-center"
      style={{ height: `calc(100vh - ${navbarHeight} - ${footerHeight})` }}
    >
      <div className="text-center w-full space-y-2">
        <TitleText
          value="HELLO!"
          size="xlarge"
          className="text-white/90 font-black"
        />
        <p className="italic text-white/90">
          I&#39;m a Backend Developer with over 2 years of experience in the
          software industry.
        </p>
      </div>
    </div>
  );
}
