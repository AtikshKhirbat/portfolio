import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-providor";
import {
  Geist,
  Geist_Mono,
  Jersey_10,
  VT323,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

const jersey10 = Jersey_10({
  variable: "--font-jersey10",
  subsets: ["latin"],
  weight: ["400"],
});
const Spacegrotesk = Space_Grotesk({
  variable: "--font-spacegrot",
  subsets: ["latin"],
  weight: ["400"],
});
const vtFont = VT323({
  variable: "--font-vt-font",
  subsets: ["latin"],
  weight: ["400"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atiksh Khirbat Portfolio",
  description: "My Personal Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jersey10.variable} ${vtFont.variable} ${Spacegrotesk} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
