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
        sizes="(min-width: 1960px) 768px, (min-width: 1540px) calc(13.5vw + 506px), (min-width: 1280px) calc(23.33vw + 285px), (min-width: 1100px) calc(15vw + 494px), (min-width: 960px) calc(4.17vw + 600px), (min-width: 780px) calc(51.88vw + 152px), (min-width: 740px) 640px, calc(94.29vw - 39px)"
        className="Main-content-image w-full md:w-5/6 lg:w-2/3 xl:w-1/2 h-auto"
        priority
      />
      <div className="Main-content-info">
        <ImageFrame src="/myImageSmall.jpg" alt="my image" />
      </div>
    </div>
  );
}
