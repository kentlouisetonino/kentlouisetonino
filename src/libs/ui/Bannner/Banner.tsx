import TitleText from '../TitleText/TitleText';

export default function Banner() {
  return (
    <div
      className="lg:w-[640px] mx-auto text-center"
      style={{ height: 'calc(100vh - 67px - 57px)' }}
    >
      <TitleText
        value="HELLO!"
        size="xlarge"
        className="text-white/90 font-black block"
      />
      <p className="italic text-white/90">
        I&#39;m a Backend Developer with over 2 years of experience in the
        software industry.
      </p>
    </div>
  );
}
