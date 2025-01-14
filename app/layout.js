import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
// import Footer from "./components/Footer";
// import { Notable } from 'next/font/google'

// const geistNotable = localFont({
//   src: "./fonts/notable.woff",
//   variable: "--font-geist-notable",
//   weight: "100 900",
// });
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "IIMW",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Bowlby+One&family=Modak&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Notable&family=Nova+Script&family=Seymour+One&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="fixed z-10 top-0 left-0 lg:w-full sm:w-[100%] h-full overflow-hidden"
          style={{ backgroundColor: "#5A3EE5" }}
        >
          <Image
            src="/leftbackground.svg"
            alt=""
            width={198}
            height={300}
            className="hidden lg:block"
          />
        </div>

        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
