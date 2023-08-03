/* eslint-disable @next/next/no-img-element */
import { InfoBoxItem } from "./types";

export const InfoBox = ({ item }: { item: InfoBoxItem }) => {
  return (
    <div className="InfoBox flex gap-5 mb-5 mx-10">
      <img
        className="InfoBox-image"
        src={item.image.fields.file.url}
        alt={"something"}
        width={150}
        height={150}
      />
      <p className="InfoBox-description">{item.description}</p>
    </div>
  );
};
