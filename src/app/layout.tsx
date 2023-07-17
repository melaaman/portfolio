import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="Main flex min-h-screen m-2 md:m-4 p-10 pt-20 bg-lightGray">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
