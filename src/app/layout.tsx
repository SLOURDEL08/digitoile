import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Digitoile",
    template: "%s | Digitoile.fr"
  },
  description: "Faites la différence",
  icons: {
    icon: '/favicon.ico',
  }
};

const fontPreloads = [
  { name: 'Extralight' },
  { name: 'Light' },
  { name: 'Medium' },
  { name: 'Regular' },
  { name: 'Bold' },
  { name: 'Semibold' }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {fontPreloads.map(({ name }) => (
          
          <link
            key={name}
            rel="preload"
            href={`/fonts/ClashDisplay-${name}.otf`}
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          
        ))}
         <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
  <script src="https://assets.calendly.com/assets/external/widget.js" async />
      </head>
      <body 
        className={`
          font-CD-bold text-secondary font-CD-semibold font-CD-extralight 
          font-cd font-CD-medium font-CD-regular font-CD-light 
          font-light antialiased
          bg-[#151516]
        `} 
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}