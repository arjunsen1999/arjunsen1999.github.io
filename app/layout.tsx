import type { Metadata } from "next";
import { Inter, Roboto, Dancing_Script } from "next/font/google";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });
const roboto_init: any = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "100", // only for initial page load
});
const Dancing_Script_init: any = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-Dancing-Script",
  weight: "400", // only for initial page load
});

export const metadata: Metadata = {
  title: "Arjun Sen | Portfolio",
  description: "web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable} ${Dancing_Script_init.variable}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
