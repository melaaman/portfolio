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
      className="MenuItem flex justify-between items-center p-1 md:p-2 font-semibold gap-4 md:gap-24"
    >
      <div className="MenuItem-icon">{Icon}</div>
      <div
        className={`MenuItem-label opacity-100 text-white text-xl md:text-2xl tracking-widest`}
      >
        {`_${label.toLowerCase()}_`}
      </div>
    </Link>
  );
};
