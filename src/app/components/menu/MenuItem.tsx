import Link from "next/link";

export interface MenuItemProps {
  href: string;
  label: string;
  Icon: JSX.Element;
}

export const MenuItem = ({ href, label, Icon }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className="MenuItem flex justify-center items-center p-2 font-semibold gap-6"
    >
      <div className="MenuItem-icon">{Icon}</div>
      <div
        className={`MenuItem-label opacity-100 text-white text-xl md:text-2xl tracking-widest`}
      >
        {label.toUpperCase()}
      </div>
    </Link>
  );
};
