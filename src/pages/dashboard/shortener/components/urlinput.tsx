const UrlInput = ({ error, placeholder, onChange, onBlur, name, inputRef }) => {
  return (
    <div className='relative'>
      <input
        type='text'
        placeholder={placeholder}
        name={name}
        ref={inputRef}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full border-2 ${
          error ? 'border-red-500' : 'order-gray-200'
        } rounded-md py-1  px-7 focus:outline-none ${
          error ? 'focus:border-red-500' : 'focus:border-gray-800'
        } 
        hover:bg-gray-100 text-gray-700 text-sm font-normal tracking-tight bg-transparent`}
      />
      <svg
        className='absolute w-4 h-4 top-[9px] left-2 text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
        />
      </svg>
    </div>
  );
};

export default UrlInput;
