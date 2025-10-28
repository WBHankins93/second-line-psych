import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Second Line Psychiatry | Compassionate Mental Health Care in New Orleans',
  description: 'Board-certified psychiatric nurse practitioner offering telehealth services for children, adolescents, and young adults. Specializing in ADHD, anxiety, mood disorders, and trauma-informed care.',
  keywords: 'psychiatry, mental health, telehealth, New Orleans, PMHNP, therapy, ADHD, anxiety, depression',
  authors: [{ name: 'Dr. Lauryn Richard' }],
  openGraph: {
    title: 'Second Line Psychiatry',
    description: 'Compassionate mental health care rooted in resilience and community',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}