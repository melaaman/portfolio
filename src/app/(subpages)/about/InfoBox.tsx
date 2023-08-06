/* eslint-disable @next/next/no-img-element */
import { InfoBoxItem } from "./types";

export const InfoBox = ({ item }: { item: InfoBoxItem }) => {
  return (
    <div className="InfoBox flex flex-col md:flex-row gap-5 md:gap-8 items-center">
      <img
        className="InfoBox-image"
        src={item.image.fields?.file?.url}
        alt={`image-${item.order}`}
        width={150}
        height={100}
      />
      <p className="InfoBox-description">{item.description}</p>
    </div>
  );
};
