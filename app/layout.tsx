import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-providor";
import { Jersey_10, VT323, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Atiksh Khirbat",
  description:
    "Explore Atiksh Khirbat's Portfolio, showcasing projects and his expertise in full-stack development in working with frameworks like React, Next.js, Node.js, tailwind CSS and more. Tune in to see a new insight into design and its implementation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jersey10.variable} ${vtFont.variable} ${Spacegrotesk} antialiased`}
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
