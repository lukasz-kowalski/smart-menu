interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
  return <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>;
};

export default PageTitle;
