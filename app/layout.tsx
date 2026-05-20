import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.amamining.com'),
  title: 'AMA Mining | Strategic Mining Advisory',
  description:
    'Strategic mining advisory firm specialized in mining concessions, mining intelligence, due diligence and cross-border mining development throughout Chile and Argentina.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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