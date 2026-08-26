import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "./client-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dream More | Ethiopia's Premier Marketplace",
  description: "Ethiopia's premier marketplace for high-value properties and vehicles.",
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
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
