export const Header = ({ title }: { title: string }) => {
  return (
    <h1
      className="Header flex justify-center mt-6 mb-8 font-appRetro"
      style={{ fontSize: "xx-large" }}
    >
      {title.toLowerCase()}
    </h1>
  );
};
