import localFont from 'next/font/local';

export const customFont = localFont({
  src: [
    {
      path: '/fonts/ClashDisplay-ExtraLight.otf',  // Correction ici
      weight: '200',
      style: 'normal',
    },
    {
      path: '/fonts/ClashDisplay-Light.otf',  // Correction ici
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/ClashDisplay-Regular.otf',  // Correction ici
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/ClashDisplay-Medium.otf',  // Correction ici
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/ClashDisplay-SemiBold.otf',  // Correction ici
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/ClashDisplay-Bold.otf',  // Correction ici
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--clashdisplay', // Pour utiliser en tant que variable CSS
  display: 'swap',
});
