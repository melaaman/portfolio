import {
  Color,
  bgColorMap,
  borderColorMap,
  textColorMap,
} from "../utils/color";

export type Size = "small" | "medium" | "large";

type Variant = "outlined" | "filled" | "text";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: Variant;
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
  variant = "filled",
  size = "medium",
  color = Color.GREEN,
  label,
  ...props
}: ButtonProps) => {
  const backgroundColor = bgColorMap[color];
  const textColor = textColorMap[color];
  const borderColor = borderColorMap[color];

  const variantSettings =
    variant === "outlined"
      ? `bg-white ${textColor} border-1 ${borderColor}`
      : variant === "filled"
      ? `${backgroundColor} ${
          color === Color.GREEN || color === Color.BLACK
            ? "text-white"
            : "text-black"
        }`
      : `bg-white ${textColor}`;

  const sizeSettings =
    size === "small"
      ? "py-2 px-3 text-sm"
      : size === "medium"
      ? "py-2.5 px-3.5 text-base"
      : "py-3.5 px-4 text-xl";

  return (
    <button
      type="button"
      className={`tracking-wider font-semibold min-w-6 ${variantSettings} ${sizeSettings}`}
      {...props}
    >
      {label.toUpperCase()}
    </button>
  );
};
