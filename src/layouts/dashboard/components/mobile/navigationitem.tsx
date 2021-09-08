import { useRouter } from 'next/router';

interface IProps {
  label: string;
  selected: boolean;
  href: string;
  svg: React.ReactNode;
  callback: Function;
}

const NavigationItem = ({ label, selected, href, svg, callback }: IProps) => {
  const router = useRouter();
  return (
    <button
      type='button'
      onClick={() => {
        callback();
        router.push(href);
      }}
      className={`w-full focus:outline-none ${
        selected ? 'bg-gray-700/30 shadow-lg' : null
      } py-3 px-4  rounded-md cursor-pointer flex items-center space-x-3 group`}
    >
      {svg}
      <h1
        className={`${
          selected ? 'text-gray-100' : 'text-gray-500'
        } text-sm font-medium capitalize tracking-tight group-hover:text-gray-100 whitespace-nowrap`}
      >
        {label}
      </h1>
    </button>
  );
};

export default NavigationItem;
