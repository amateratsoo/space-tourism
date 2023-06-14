import './globals.css'

import { Bellefair, Barlow_Condensed, Barlow } from 'next/font/google';

const bellefair = Bellefair({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bellefair'
});

const barlowCondensed = Barlow_Condensed({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed'
});

const barlow = Barlow({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-barlow'
});

export const metadata = {
  title: 'Space Tourism',
  description: 'Frontend Mentor Space Tourism Challenge',
  author: 'Jossani da Cruz | @amateratsoo',
  icons: {
    icon: '/favicon-32x32.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} font-sans bg-spacey-blue`}>{children}</body>
    </html>
  )
}
