import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { retro_font, main_font } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Erika Laamanen",
  description: "Portfolio site for Erika Laamanen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${main_font.variable} ${retro_font.variable}`}>
      <body>
        <NavBar />
        <main className="Main flex justify-center min-h-screen m-2 md:m-4 p-10 pt-20 bg-lightGray">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
