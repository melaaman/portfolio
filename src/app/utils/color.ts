export enum Color {
  GREEN = "green",
  LIGHT_GREEN = "lightGreen",
  BLACK = "black",
  WHITE = "white",
}

export const bgColorMap: Record<Color, string> = {
  green: "bg-green",
  lightGreen: "bg-lightGreen",
  black: "bg-black",
  white: "bg-white",
};

export const textColorMap: Record<Color, string> = {
  green: "text-green",
  lightGreen: "text-lightGreen",
  black: "text-black",
  white: "text-white",
};

export const borderColorMap: Record<Color, string> = {
  green: "border-green",
  lightGreen: "border-lightGreen",
  black: "border-black",
  white: "border-white",
};

export const fillColorMap: Record<Color, string> = {
  green: "fill-green",
  lightGreen: "fill-lightGreen",
  black: "fill-black",
  white: "fill-white",
};

export const strokeColorMap: Record<Color, string> = {
  green: "stroke-green",
  lightGreen: "stroke-lightGreen",
  black: "stroke-black",
  white: "stroke-white",
};
