import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greenwood Homes | Award-Winning Custom Home Builder",
  description: "Award-winning custom homes in Lake Tahoe, Truckee, Hawaii, Idaho, and Utah, built by Greenwood Homes since 1998.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
