// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Agence Digitale",
    template: "%s | Agence Digitale"
  },
  description: "Votre agence digitale de confiance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={` font-CD-light font-light font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}