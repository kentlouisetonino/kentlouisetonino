import Navbar from '@/src/libs/Navbar/Navbar';
import TitleText from '@/src/libs/TitleText/TitleText';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <div className="lg:w-[640px] mx-auto py-40 text-center">
        <TitleText
          value="HELLO!"
          size="xlarge"
          className="text-white/90 font-black block"
        />
        <p className="italic text-white/90">
          I am Computer Programmer with industry experience in Web Application
          Development.
        </p>
      </div>
    </Fragment>
  );
}
