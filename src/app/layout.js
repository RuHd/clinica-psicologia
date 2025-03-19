import { Roboto, Alegreya, Open_Sans  } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"]
})

export const metadata = {
  title: "Clinica Psico",
  description: "Desenvolvido por Ruan Mesquita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${alegreya.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
