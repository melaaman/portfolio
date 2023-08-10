export const Header = ({ title }: { title: string }) => {
  return (
    <h1 className={`Header flex justify-center  mb-10`}>
      {title.toLowerCase()}
    </h1>
  );
};
