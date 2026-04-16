import type { Metadata } from "next";
import "./globals.css";
import LSHeader from "@/components/LSHeader";
import LSFooter from "@/components/LSFooter";
import LSScrollAnimations from "@/components/LSScrollAnimations";
import LSIntro from "@/components/LSIntro";

export const metadata: Metadata = {
  title: "Lunch Shack | Hawera's Favourite Lunch Spot",
  description: "Fresh baked goods, great lunches, and proper cabinet food. 79 High Street, Hawera. Mon-Fri 7am-3pm, Sat 8am-2pm.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800;900&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LSIntro />
        <LSScrollAnimations />
        <LSHeader />
        <main>{children}</main>
        <LSFooter />
      </body>
    </html>
  );
}
