export const Header = ({ title }: { title: string }) => {
  return (
    <h1 className={`Header flex justify-center mt-6 mb-8`}>
      {title.toLowerCase()}
    </h1>
  );
};
