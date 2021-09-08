import * as React from 'react';
import Link from 'next/link';

interface IProps {
  label: string;
  selected: boolean;
  href: string;
  svg: React.ReactNode;
}

const NavigationItem = ({ label, selected, href, svg }: IProps) => {
  return (
    <Link href={href}>
      <div
        className={`w-full ${
          selected ? 'bg-gray-700/30 shadow-lg' : null
        }  pl-7 py-3 rounded-l-md cursor-pointer flex items-center space-x-5 group`}
      >
        {svg}
        <h1
          className={`${
            selected ? 'text-gray-100' : 'text-gray-500'
          } text-sm font-medium capitalize tracking-tight group-hover:text-gray-100`}
        >
          {label}
        </h1>
      </div>
    </Link>
  );
};

export default NavigationItem;
