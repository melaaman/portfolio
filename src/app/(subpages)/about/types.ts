export type InfoBoxItem = {
  order: number;
  description: string;
  image: {
    fields?: {
      file?: {
        url?: string;
      };
    };
  };
};
