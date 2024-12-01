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
    <html  lang="fr" suppressHydrationWarning>
      <head>
         <link
    rel="preload"
    href="/fonts/ClashDisplay-Extralight.otf"
    as="font"
    type="font/otf"
    crossOrigin="anonymous"
        />
         <link
    rel="preload"
    href="/fonts/ClashDisplay-Light.otf"
    as="font"
    type="font/otf"
    crossOrigin="anonymous"
        />
          <link
    rel="preload"
    href="/fonts/ClashDisplay-Medium.otf"
    as="font"
    type="font/otf"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/ClashDisplay-Regular.otf"
    as="font"
    type="font/otf"
    crossOrigin="anonymous"
        />
        <link
    rel="preload"
    href="/fonts/ClashDisplay-Bold.otf"
    as="font"
    type="font/otf"
    crossOrigin="anonymous"
        />
        <link
    rel="preload"
    href="/fonts/ClashDisplay-Semibold.otf"
    as="font"
    type="font/otf"
    crossOrigin="anonymous"
  />
      </head>
      <body className={`font-CD-bold font-CD-semibold font-CD-extralight font-cd font-CD-medium font-CD-regular font-CD-light font-light antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}