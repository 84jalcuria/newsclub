const DescriptionInput = ({
	error,
	placeholder,
	onChange,
	onBlur,
	name,
	inputRef,
}) => {
	return (
		<div className='relative'>
			<textarea
				//type=''
				placeholder={placeholder}
				name={name}
				ref={inputRef}
				onChange={onChange}
				onBlur={onBlur}
				className={`w-full border-2 h-72 sm:h-56 ${
					error ? "border-red-500" : "order-gray-200"
				} rounded-md py-1  pl-7 pr-2 focus:outline-none ${
					error ? "focus:border-red-500" : "focus:border-gray-800"
				} 
          hover:bg-gray-100 text-gray-700 text-sm font-normal tracking-tight bg-transparent`}
			/>
			<svg
				className='absolute w-4 h-4 top-[9px] left-2 text-gray-400'
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={3}
					d='M5 13l4 4L19 7'
				/>
			</svg>
		</div>
	);
};

export default DescriptionInput;
