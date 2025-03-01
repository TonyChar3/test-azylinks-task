import type { Metadata } from "next";
import "./globals.css";
import { lufga } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "AzyLinks Test",
  description: "Test replica of a concept",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lufga.variable}`}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
