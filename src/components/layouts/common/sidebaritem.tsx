import * as React from 'react';

interface IProps {
  children: React.ReactNode;
  label: string;
  callback: () => void;
  selected: boolean;
}
const SideBarItem = ({ children: svg, label, callback, selected }: IProps) => {
  return (
    <button
      type='button'
      onClick={callback}
      className={`w-full flex justify-start items-end space-x-2 py-3 px-5  ${
        selected ? 'bg-gray-200' : null
      }`}
    >
      {svg}
      <h1 className='text-gray-800 text-base font-normal tracking-wide capitalize'>
        {label}
      </h1>
    </button>
  );
};

export default SideBarItem;
