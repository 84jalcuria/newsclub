import Link from 'next/link';
import RouteMark from '@/components/layouts/default/routemark';

interface IProps {
  label: string;
  href: string;
  selected: boolean;
}

const NavItem = ({ label, href, selected }: IProps) => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <Link href={href}>
        <a
          href='#'
          className='text-gray-800 sm:text-sm md:text-base font-semibold tracking-wider capitalize'
        >
          {label}
        </a>
      </Link>
      {selected && <RouteMark />}
    </div>
  );
};

export default NavItem;
