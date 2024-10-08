import { Outfit } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./Provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Omega App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
