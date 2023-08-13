import Image from "next/image";

interface ImageFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const ImageFrame = ({ src, alt, width, height }: ImageFrameProps) => {
  return (
    <div className="ImageFrame flex items-center">
      <div className="ImageFrame-image p-1">
        <Image
          src={src}
          alt={alt}
          width={width || 200}
          height={height || 200}
          className="border-1 border-gold rounded-1/2 m-2 p-3"
          priority
        />
      </div>
    </div>
  );
};
