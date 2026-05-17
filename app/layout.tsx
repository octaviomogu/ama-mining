import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.amamining.com'),

  title: {
    default: 'AMA Mining | Strategic Mining Advisory',
    template: '%s | AMA Mining',
  },

  description:
    'Strategic mining advisory firm specialized in mining concessions, mining intelligence, due diligence and cross-border mining development throughout Chile and Argentina.',

  keywords: [
    'Mining Advisory',
    'Mining Intelligence',
    'Mining Concessions Chile',
    'Mining Concessions Argentina',
    'Copper Chile',
    'Lithium Argentina',
    'Mining Due Diligence',
    'Mining Brokerage',
    'Mining Investments LATAM',
    'Strategic Mining Advisory',
    'Chile Mining',
    'Argentina Mining',
  ],

  authors: [{ name: 'AMA Mining' }],

  creator: 'AMA Mining',

  publisher: 'AMA Mining',

  openGraph: {
    title: 'AMA Mining | Strategic Mining Advisory',
    description:
      'Strategic mining advisory firm focused on mining intelligence, concessions, due diligence and cross-border mining development in Chile and Argentina.',
    url: 'https://www.amamining.com',
    siteName: 'AMA Mining',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/mining-about.png',
        width: 1200,
        height: 630,
        alt: 'AMA Mining',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AMA Mining | Strategic Mining Advisory',
    description:
      'Mining intelligence, concessions, due diligence and strategic mining advisory in Chile & Argentina.',
    images: ['/images/mining-about.png'],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}