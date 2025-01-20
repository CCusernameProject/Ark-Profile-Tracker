import type { Metadata } from "next";
import { REM } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header";

const Rem = REM({
  variable: "--font-REM",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lost in ark",
  description: "Lost in ark est un serveur de jeu ark survival ascended.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${Rem.variable} font-[family-name:var(--font-REM)] bg-[#181818] text-white antialiased flex flex-col items-center`}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
