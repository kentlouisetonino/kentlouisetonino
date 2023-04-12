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
          I&#39;m Computer Programmer with industry experience in Web
          Application Development.
        </p>
      </div>
      <div className="fixed inset-x-0 bottom-0 lg:w-[1008px] p-4 mx-auto flex justify-between border-green-500 border-dashed border-t-[0.5px] opacity-90">
        {/* address */}
        <div>
          <p>Address: Cebu, Central Visayas, Philippines 6014</p>
          <p>Email: tonino.kentlouise@gmail.com</p>
          <p>Contact: +63-975-902-4002</p>
        </div>
        {/* icons */}
        <div></div>
      </div>
    </Fragment>
  );
}
