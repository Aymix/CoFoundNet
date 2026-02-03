import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "TunisLink - The Future of Tunisian B2B Project Sharing",
  description: "Connecting local visionaries. Join the exclusive waitlist for early access to the premier platform for Tunisian company owners.",
  icons: {
    icon: "/TLink-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${plusJakarta.variable} bg-white dark:bg-background-dark text-[#111418] dark:text-white font-display antialiased`}>
        {children}
      </body>
    </html>
  );
}
