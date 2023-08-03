import Link from "next/link";

export interface MenuItemProps {
  href: string;
  label: string;
}

export const MenuItem = ({ href, label }: MenuItemProps) => {
  return (
    <Link href={href} className="MenuItem flex justify-center p-1 md:p-2">
      <div
        className={`MenuItem-label opacity-100 text-white text-xl md:text-2xl tracking-widest retro-font`}
      >
        {label.toLowerCase()}
      </div>
    </Link>
  );
};
