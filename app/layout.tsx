import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vercel Repos Dashboard",
  description: "Interactive dashboard displaying all your Vercel repositories with filtering, search, and detailed project information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
