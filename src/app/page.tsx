import type { Metadata } from 'next'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Specialties from '../components/Specialties'
import TrustSection from '../components/TrustSection'
import ScheduleSection from '../components/ScheduleSection'

export const metadata: Metadata = {
  title: 'Second Line Psychiatry | Compassionate Mental Health Care in New Orleans',
  description: 'Board-certified psychiatric nurse practitioner offering telehealth services for children, adolescents, and young adults in Louisiana. Specializing in ADHD, anxiety, mood disorders, and trauma-informed care in the Greater New Orleans area.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Second Line Psychiatry | Compassionate Mental Health Care in New Orleans',
    description: 'Board-certified psychiatric nurse practitioner offering telehealth services for children, adolescents, and young adults. ADHD, anxiety, mood disorders, and trauma-informed care.',
    type: 'website',
    url: 'https://secondlinepsychiatry.com',
    siteName: 'Second Line Psychiatry',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Specialties />
      <TrustSection />
      <ScheduleSection />
    </>
  )
}