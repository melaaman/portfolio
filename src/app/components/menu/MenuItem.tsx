export interface MenuItemProps {
  label: string;
  Icon: JSX.Element;
}

export const MenuItem = ({ label, Icon }: MenuItemProps) => {
  return (
    <div className="MenuItem flex justify-center bg-black p-3 font-semibold gap-6">
      <div className="MenuItem-icon">{Icon}</div>
      <div className="MenuItem-label opacity-100 text-lightGreen text-lg self-center">
        {label}
      </div>
    </div>
  );
};
