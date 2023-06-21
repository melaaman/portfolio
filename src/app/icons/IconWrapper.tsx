import { ReactElement } from "react";
import { Color, fillColorMap, strokeColorMap } from "../utils/color";
import { IconProps } from "./types";

interface IconWrapperProps extends IconProps {
  path: ReactElement<SVGPathElement | SVGGElement>;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  path,
  fill,
  stroke,
  size = "small",
  viewBox = "0 0 24 24",
}) => {
  const iconSize =
    size === "small" ? "w-6 h-6" : size === "medium" ? "w-8 h-8" : "w-10 h-10";
  const fillClass = fill ? fillColorMap[fill] : "fill-none";
  const strokeClass = stroke ? strokeColorMap[stroke] : Color.BLACK;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      strokeWidth={1.5}
      stroke={stroke}
      className={`w-${iconSize} h-${iconSize} ${fillClass} ${strokeClass}`}
    >
      {path}
    </svg>
  );
};
