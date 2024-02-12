import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tally Light Pro",
  description: "Monitor your camera's tally data from any mobile device."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<link rel="icon" href="https://fav.farm/📷" />
			<body className={inter.className}>{children}</body>
		</html>
  );
}
