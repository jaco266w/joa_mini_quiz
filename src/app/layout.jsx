import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matas.dk",
  description: "Matas.dk",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="matas" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
