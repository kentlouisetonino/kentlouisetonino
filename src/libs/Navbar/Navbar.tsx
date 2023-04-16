import Link from 'next/link';
import TitleText from '../TitleText/TitleText';

export default function Navbar() {
  return (
    <div className="p-4 flex justify-between border-green-500 border-dashed border-b-[0.5px] opacity-90">
      <div className="motion-safe:animate-pulse">
        <Link href="/">
          <TitleText
            value="@kentlouisetonino"
            className="font-black hover:text-green-500"
          />
        </Link>
      </div>
      <div className="flex gap-x-4">
        <Link href="#">
          <ul className="leading-[30px] p-[2px] text-white/80 hover:underline hover:text-white underline-offset-8 hover:decoration-green-500">
            Resume
          </ul>
        </Link>
        <Link href="#">
          <ul className="leading-[30px] p-[2px] text-white/80 hover:underline hover:text-white underline-offset-8 hover:decoration-green-500">
            Project
          </ul>
        </Link>
        <Link href="#">
          <ul className="leading-[30px] p-[2px] text-white/80 hover:underline hover:text-white underline-offset-8 hover:decoration-green-500">
            Blog
          </ul>
        </Link>
        <Link href="#">
          <ul className="leading-[30px] p-[2px] text-white/80 hover:underline hover:text-white underline-offset-8 hover:decoration-green-500">
            Contact
          </ul>
        </Link>
      </div>
    </div>
  );
}
