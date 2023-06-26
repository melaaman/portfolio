import { FaGithub, FaLinkedin } from "react-icons/fa";

const ICON_SIZE = 28;

export const Footer = () => {
  return (
    <div className="fixed bottom-6 w-full flex justify-center gap-4">
      <a href="https://github.com/melaaman" target="_blank">
        <FaGithub size={ICON_SIZE} />
      </a>
      <a href="https://www.linkedin.com/in/erika-laamanen" target="_blank">
        <FaLinkedin size={ICON_SIZE} color="#0077B5" />
      </a>
    </div>
  );
};
