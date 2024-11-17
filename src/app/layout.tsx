// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Digitoile",
    template: "%s | Digitoile.fr"
  },
  description: "Faites la différences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`font-CD-bold font-CD-semibold font-CD-extralight font-cd font-CD-medium font-CD-regular font-CD-light font-light font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}