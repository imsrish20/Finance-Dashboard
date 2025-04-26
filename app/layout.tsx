import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // Ensure your global styles (and progressbar css) are imported

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Franchise Dashboard',
  description: 'Manage your franchise operations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main-bg`}>
        {children}
      </body>
    </html>
  )
}