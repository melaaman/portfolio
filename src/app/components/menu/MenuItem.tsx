import Link from "next/link";

export interface MenuItemProps {
  href: string;
  label: string;
  Icon: JSX.Element;
}

export const MenuItem = ({ href, label, Icon }: MenuItemProps) => {
  return (
    <Link href={href} className="MenuItem flex justify-center p-1 md:p-2">
      <div
        className={`MenuItem-label font-appRetro opacity-100 text-white text-xl md:text-2xl tracking-widest`}
      >
        {label.toLowerCase()}
      </div>
    </Link>
  );
};
