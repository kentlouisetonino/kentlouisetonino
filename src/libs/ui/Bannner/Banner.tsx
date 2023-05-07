import TitleText from '../TitleText/TitleText';

export default function Banner() {
  return (
    <div className="lg:w-[640px] mx-auto my-60 align-middle text-center">
      <TitleText
        value="HELLO!"
        size="xlarge"
        className="text-white/90 font-black block"
      />
      <p className="italic text-white/90">
        I&#39;m Computer Programmer with industry experience in Web Application
        Development.
      </p>
    </div>
  );
}
