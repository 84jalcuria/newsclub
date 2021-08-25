interface IProps {
  label: string;
  color: string;
  textsize: string;
}

const Title = ({ label, color, textsize }: IProps) => {
  return (
    <h1 className={`${color} ${textsize} font-normal tracking-widest`}>
      {label}
    </h1>
  );
};

export default Title;
