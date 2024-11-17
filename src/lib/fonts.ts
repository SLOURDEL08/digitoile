import localFont from 'next/font/local';

export const customFont = localFont({
  src: [
    {
      path: '../assets/fonts/ClashDisplay-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ClashDisplay-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ClashDisplay-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--clashdisplay',
  display: 'swap',
});