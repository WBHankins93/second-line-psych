import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
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
  keywords: 'psychiatrist Metairie LA, telehealth psychiatry New Orleans, PMHNP Louisiana, child psychiatrist New Orleans, adolescent mental health Louisiana, ADHD treatment New Orleans, anxiety therapist Metairie, mood disorder treatment Louisiana, trauma-informed care telehealth, psychiatric nurse practitioner New Orleans',
  authors: [{ name: 'Lauryn Richard, DNP, APRN, PMHNP-BC' }],
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
              '@graph': [
                {
                  '@type': 'MedicalBusiness',
                  '@id': 'https://secondlinepsychiatry.com/#practice',
                  name: 'Second Line Psychiatry',
                  description: 'Board-certified psychiatric nurse practitioner offering telehealth services for children, adolescents, and young adults in Louisiana. Specializing in ADHD, anxiety, mood disorders, and trauma-informed care.',
                  url: 'https://secondlinepsychiatry.com',
                  telephone: '+1-504-782-5172',
                  email: 'larichar22@gmail.com',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Metairie',
                    addressRegion: 'LA',
                    postalCode: '70001',
                    addressCountry: 'US',
                  },
                  areaServed: [
                    { '@type': 'State', name: 'Louisiana' },
                    { '@type': 'City', name: 'New Orleans' },
                    { '@type': 'City', name: 'Metairie' },
                  ],
                  medicalSpecialty: 'Psychiatric',
                  openingHours: 'By appointment',
                  priceRange: '$$',
                  isAcceptingNewPatients: true,
                  availableService: [
                    { '@type': 'MedicalTherapy', name: 'Psychiatric Evaluation', serviceType: 'Telehealth' },
                    { '@type': 'MedicalTherapy', name: 'Medication Management', serviceType: 'Telehealth' },
                    { '@type': 'MedicalTherapy', name: 'Cognitive Behavioral Therapy', serviceType: 'Telehealth' },
                    { '@type': 'MedicalTherapy', name: 'Trauma-Focused Care', serviceType: 'Telehealth' },
                  ],
                },
                {
                  '@type': 'Person',
                  '@id': 'https://secondlinepsychiatry.com/#provider',
                  name: 'Lauryn Richard',
                  honorificPrefix: 'Dr.',
                  honorificSuffix: 'DNP, APRN, PMHNP-BC',
                  jobTitle: 'Psychiatric Mental Health Nurse Practitioner',
                  worksFor: { '@id': 'https://secondlinepsychiatry.com/#practice' },
                  alumniOf: [
                    { '@type': 'CollegeOrUniversity', name: 'LSU Health New Orleans' },
                    { '@type': 'CollegeOrUniversity', name: 'Louisiana State University' },
                  ],
                  knowsAbout: ['ADHD', 'Anxiety Disorders', 'Mood Disorders', 'Personality Disorders', 'Trauma-Informed Care'],
                  medicalSpecialty: 'Psychiatric',
                },
              ],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
