import {
  Color,
  bgColorMap,
  borderColorMap,
  textColorMap,
} from "../utils/color";

export type Size = "small" | "medium" | "large";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  outlined?: boolean;
  /**
   * What color to use
   */
  color?: Color;
  /**
   * How large should the button be?
   */
  size?: Size;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  outlined = false,
  size = "medium",
  color = Color.BLUE,
  label,
  ...props
}: ButtonProps) => {
  const backgroundColor = bgColorMap[color];
  const textColor = textColorMap[color];
  const borderColor = borderColorMap[color];

  const mode = outlined
    ? `bg-white ${textColor} border ${borderColor}`
    : `${backgroundColor} text-white`;

  const variant =
    size === "small"
      ? "py-2 px-3 text-sm"
      : size === "medium"
      ? "py-3 px-4 text-base"
      : "py-4 px-5 text-xl";

  return (
    <button
      type="button"
      className={`tracking-wider font-medium min-w-6 rounded ${mode} ${variant}`}
      {...props}
    >
      {label.toUpperCase()}
    </button>
  );
};
