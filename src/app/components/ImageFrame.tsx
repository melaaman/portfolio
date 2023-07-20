import Image from "next/image";

interface ImageFrameProps {
  file: string;
  alt: string;
  width?: number;
  height?: number;
}

export const ImageFrame = ({ file, alt, width, height }: ImageFrameProps) => {
  return (
    <div className="ImageFrame flex items-center">
      <div className="ImageFrame-image p-1">
        <Image
          src={`/assets/${file}`}
          alt={alt}
          width={width || 200}
          height={height || 200}
          className="border-1 border-lightPink m-2 p-3"
          priority
        />
      </div>
    </div>
  );
};
