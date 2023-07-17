import Image from "next/image";
import { ImageFrame } from "./components/ImageFrame";

const infoText =
  "Olen frontendiin erikoistunut ohjelmistokehittäjä pääkaupunkiseudulta. Suosikkiteknologioitani ovat React, TypeScript ja ylipäänsä JavaScript-pohjaiset webbityökalut. Fullstack-kehittäjänä backend-puolikaan ei ole minulle vieras. Kokemuksestani lisätietoa täältä. Olen entiseltä ammatiltani kirjallisuudentutkija, mistä on säilynyt mieltymys kirjoittamiseen. Toivonkin, että voisin tulevaisuudessa yhdistää nämä kaksi taitoa, ohjelmoinnin ja kirjoittamisen. Ohjelmointiin liittyviä tekstejä voi lukea täältä.";

export default function Home() {
  return (
    <main className="Main flex min-h-screen m-2 md:m-4 p-10 pt-20 bg-lightGray">
      <div className="Main-content container flex flex-col items-center gap-10 md:gap-4">
        <Image
          src="/assets/logo_tekstilla.png"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
          className="Main-content-image w-full md:w-5/6 lg:w-2/3 xl:w-1/2"
          priority
        />
        <div className="Main-content-info">
          <ImageFrame file="myImage.jpg" alt="my image" />
        </div>
      </div>
    </main>
  );
}
