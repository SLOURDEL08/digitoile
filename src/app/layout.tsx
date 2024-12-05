import type { Metadata } from "next";
import { Toaster } from "sonner";
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
      </head>
      <body 
        className={`
          font-CD-bold text-secondary font-CD-semibold font-CD-extralight 
          font-cd font-CD-medium font-CD-regular font-CD-light 
          font-light antialiased
          bg-[#151516] text-gray
        `} 
        suppressHydrationWarning
      >
        {children}
        <Toaster
          position="top-right"
          expand={true}
          richColors
          closeButton
          theme="dark"
          toastOptions={{
            style: {
              background: '#151516',
              border: '1px solid rgba(213, 213, 213, 0.1)',
              color: '#D5D5D5',
            },
            classNames: {
              success: "bg-[rgba(206,244,64,0.1)] border-[rgba(206,244,64,0.2)] text-[#CEF440]",
              error: "bg-[rgba(255,86,86,0.1)] border-[rgba(255,86,86,0.2)] text-[#FF5656]"
            }
          }}
        />
      </body>
    </html>
  );
}