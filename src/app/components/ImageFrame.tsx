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
          height={height ?? 200}
          width={width ?? 200}
          sizes="198px"
          className="border-1 border-gold rounded-1/2 m-2 p-3 w-full h-auto"
          priority
        />
      </div>
    </div>
  );
};
