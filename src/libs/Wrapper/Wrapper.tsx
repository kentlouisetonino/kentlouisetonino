import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return <div className="lg:w-[1008px] mx-auto">{children}</div>;
}
