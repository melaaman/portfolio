import Image from "next/image";
import { ImageFrame } from "./components/ImageFrame";

export default function Home() {
  return (
    <div className="Main-content container flex flex-col items-center gap-10">
      <Image
        src="/logo_retro.png"
        alt="logo"
        width="0"
        height="0"
        sizes="100vw"
        className="Main-content-image w-full md:w-5/6 lg:w-2/3 xl:w-1/2"
        priority
      />
      <div className="Main-content-info">
        <ImageFrame src="/myImageSmall.jpg" alt="my image" />
      </div>
    </div>
  );
}
