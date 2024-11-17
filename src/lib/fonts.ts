// src/lib/fonts.ts
import localFont from 'next/font/local';

export const customFont = localFont({
  src: [
    {
      path: '/fonts/ClashDisplay-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '/fonts/ClashDisplay-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/ClashDisplay-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--clashdisplay', // Pour utiliser en tant que variable CSS
  display: 'swap',
});