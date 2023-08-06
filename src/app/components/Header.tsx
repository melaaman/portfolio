export const Header = ({ title }: { title: string }) => {
  return (
    <h1 className={`Header flex justify-center mt-8 mb-10`}>
      {title.toLowerCase()}
    </h1>
  );
};
