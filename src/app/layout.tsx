import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; // Global styles
import Header from './components/header'; // Adjust path if necessary
import HeroSection from './components/heroSection'; // Ensure the correct import casing

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Daraz",
  description: "Apnay liye sub k liye!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Daraz</title>
        <meta name="description" content="Apnay liye sub k liye!" />
        {/* Additional SEO tags can be added here */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header /> {/* Header includes NavBar */}
        <HeroSection /> {/* Include the HeroSection for prominent display */}
        <main>{children}</main> {/* Main content */}
      </body>
    </html>
  );
}
