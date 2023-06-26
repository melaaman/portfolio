interface HamburgerMenuProps {
  onClick: () => void;
  isOpen: boolean;
}

export const HamburgerMenu = ({
  onClick,
  isOpen,
}: HamburgerMenuProps): JSX.Element => {
  const genericHamburgerLine = `h-0.5 w-8 my-1 bg-${
    isOpen ? "white" : "green"
  } rounded-full transition ease transform duration-500`;

  return (
    <button className="Hamburger h-12 w-12" onClick={onClick}>
      <div className="flex flex-col justify-center items-center group">
        <div
          className={`Hamburger-menuButton-1 ${genericHamburgerLine} ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`Hamburger-menuButton-2 ${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`Hamburger-menuButton-3 ${genericHamburgerLine} ${
            isOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        />
      </div>
    </button>
  );
};
