import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Libreriamo i Garages',
  description: 'Libreriamo i Garages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
