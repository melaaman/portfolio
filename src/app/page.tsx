import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 pt-20 md:p-24">
      <div className="container flex justify-center">
        <Image
          src="/assets/logo_tekstilla.png"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full md:w-5/6 lg:w-2/3 xl:w-1/2 h-auto"
        />
      </div>
    </main>
  );
}
