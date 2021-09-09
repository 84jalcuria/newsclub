interface IProps {
  footerLabel: string;
}

const Footer = ({ footerLabel }: IProps) => {
  return (
    <footer className='w-full my-3 text-center'>
      <h1 className='text-xs  text-gray-800/60 font-medium tracking-widest capitalize'>
        NewsClub 2021: {footerLabel}
      </h1>
    </footer>
  );
};

export default Footer;
