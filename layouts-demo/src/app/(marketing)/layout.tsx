import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <header className="w-full bg-black border-b border-neutral-800 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-semibold">Marketing</h1>
            <nav className="space-x-4">
              <Link href="/" className="text-sm hover:underline text-white">
                Home
              </Link>
              <a href="/about" className="text-sm hover:underline text-white">
                About
              </a>
            </nav>
          </div>
        </header>

        <main className="min-h-screen px-6 py-8">{children}</main>

        <footer className="w-full bg-black border-t border-neutral-800 px-6 py-4 mt-12 text-center text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
