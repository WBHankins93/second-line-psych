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
  metadataBase: new URL('https://secondlinepsychiatry.com'),
  title: {
    default: 'Second Line Psychiatry | Compassionate Mental Health Care in New Orleans',
    template: '%s | Second Line Psychiatry',
  },
  description: 'Board-certified psychiatric nurse practitioner offering telehealth services for children, adolescents, and young adults. Specializing in ADHD, anxiety, mood disorders, and trauma-informed care.',
  keywords: 'psychiatry, mental health, telehealth, New Orleans, PMHNP, therapy, ADHD, anxiety, depression',
  authors: [{ name: 'Dr. Lauryn Richard' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Second Line Psychiatry',
    description: 'Compassionate mental health care rooted in resilience and community',
    type: 'website',
    url: 'https://secondlinepsychiatry.com',
    siteName: 'Second Line Psychiatry',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Second Line Psychiatry',
    description: 'Compassionate mental health care rooted in resilience and community',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Second Line Psychiatry',
              areaServed: 'Louisiana',
              medicalSpecialty: 'Psychiatry',
              url: 'https://secondlinepsychiatry.com',
              telephone: '+1-504-782-5172',
              email: 'larpsychiatry@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1512 Cleary Avenue',
                addressLocality: 'Metairie',
                addressRegion: 'LA',
                postalCode: '70001',
                addressCountry: 'US',
              },
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
