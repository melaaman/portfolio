export enum Color {
  GREEN = "green",
  LIGHT_GREEN = "lightGreen",
  BLACK = "black",
}

export const bgColorMap: Record<Color, string> = {
  green: "bg-green",
  lightGreen: "bg-lightGreen",
  black: "bg-black",
};

export const textColorMap: Record<Color, string> = {
  green: "text-green",
  lightGreen: "text-lightGreen",
  black: "text-black",
};

export const borderColorMap: Record<Color, string> = {
  green: "border-green",
  lightGreen: "border-lightGreen",
  black: "border-black",
};

export const fillColorMap: Record<Color, string> = {
  green: "fill-green",
  lightGreen: "fill-lightGreen",
  black: "fill-black",
};

export const strokeColorMap: Record<Color, string> = {
  green: "stroke-green",
  lightGreen: "stroke-lightGreen",
  black: "stroke-black",
};
