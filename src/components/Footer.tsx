import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-800 text-stone-300">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">
              Second Line Psychiatry
            </h3>
            <p className="text-sm mb-4">
              Compassionate mental health care rooted in resilience and community
            </p>
            <div className="space-y-2 text-sm">
              <p>1512 Cleary Avenue</p>
              <p>Metairie, LA 70001</p>
              <p>
                <a href="tel:5047825172" className="hover:text-gold-400 transition-colors">
                  (504) 782-5172
                </a>
              </p>
              <p>
                <a href="mailto:larpsychiatry@gmail.com" className="hover:text-gold-400 transition-colors">
                  larpsychiatry@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  About Dr. Richard
                </Link>
              </li>
              <li>
                <a href="#schedule" className="hover:text-gold-400 transition-colors">
                  Schedule Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Credentials & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Credentials</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>DNP, APRN, PMHNP-BC</li>
              <li>Board Certified by ANCC</li>
              <li>Louisiana State Board of Nursing</li>
              <li>DEA Registered</li>
            </ul>
            <div className="space-y-2 text-sm">
              <Link href="/privacy-policy" className="block hover:text-gold-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-gold-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-700 text-center text-sm">
          <p>
            &copy; {currentYear} Second Line Psychiatry. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-stone-400">
            Telehealth services provided. Please note that this website does not provide medical advice. 
            If you are experiencing a mental health emergency, please call 988 or go to your nearest emergency room.
          </p>
        </div>
      </div>
    </footer>
  )
}