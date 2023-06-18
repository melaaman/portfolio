export enum Color {
  LIGHT_GRAY = "lightGray",
  GREEN = "green",
  LIGHT_GREEN = "lightGreen",
  BLACK = "black",
}

export const bgColorMap: Record<Color, string> = {
  lightGray: "bg-lightGray",
  green: "bg-green",
  lightGreen: "bg-lightGreen",
  black: "bg-black",
};

export const textColorMap: Record<Color, string> = {
  lightGray: "text-lightGray",
  green: "text-green",
  lightGreen: "text-lightGreen",
  black: "text-black",
};

export const borderColorMap: Record<Color, string> = {
  lightGray: "border-lightGray",
  green: "border-green",
  lightGreen: "border-lightGreen",
  black: "border-black",
};
