export enum Color {
  LEMON = "lemon",
  GRAPE = "grape",
  FUSCHIA = "fuschia",
  BLUE = "blue",
  LIGHT_GRAY = "lightGray",
}

export const bgColorMap: Record<Color, string> = {
  lemon: "bg-lemon",
  grape: "bg-grape",
  fuschia: "bg-fuschia",
  blue: "bg-blue",
  lightGray: "bg-light-gray",
};

export const textColorMap: Record<Color, string> = {
  lemon: "text-lemon",
  grape: "text-grape",
  fuschia: "text-fuschia",
  blue: "text-blue",
  lightGray: "text-light-gray",
};

export const borderColorMap: Record<Color, string> = {
  lemon: "border-lemon",
  grape: "border-grape",
  fuschia: "border-fuschia",
  blue: "border-blue",
  lightGray: "border-light-gray",
};
