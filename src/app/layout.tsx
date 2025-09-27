import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hanseokbong = localFont({
  src: "./fonts/GapyeongHanseokbongR.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "운세박사 코딩테스트(김종화)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${hanseokbong.className} antialiased`}>{children}</body>
    </html>
  );
}
