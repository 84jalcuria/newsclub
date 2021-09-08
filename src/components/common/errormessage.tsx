interface IProps {
  message: string;
  size?: string;
}

const ErrorMessage = ({ message, size = 'sm' }: IProps) => {
  return (
    <h1
      className='p-1 text-red-500 text-xs sm:text-sm capitalize'
      style={size === 'lg' ? { fontSize: 16 } : { fontSize: 12 }}
    >
      *{message}
    </h1>
  );
};

export default ErrorMessage;
