import localFont from 'next/font/local'

export const clashDisplay = localFont({
  src: [
    {
      path: '../fonts/ClashDisplay-ExtraLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay-Regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay-Medium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay-SemiBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/ClashDisplay-Bold.otf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-clash-display',
  display: 'swap',
  preload: true
})