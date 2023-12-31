import Image from "next/image";
import { InfoBoxItem } from "./types";

export const InfoBox = ({ item }: { item: InfoBoxItem }) => {
  return (
    <div className="InfoBox flex flex-col md:flex-row gap-5 md:gap-8 items-center">
      <Image
        className="InfoBox-image"
        src={item.image.fields?.file?.url ?? ""}
        alt={`image-${item.order}`}
        width={150}
        height={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="eager"
      />
      <p className="InfoBox-description">{item.description}</p>
    </div>
  );
};
