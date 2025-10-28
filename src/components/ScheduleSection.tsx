'use client'

import { useEffect } from 'react'

export default function ScheduleSection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const openCalendly = () => {
    // @ts-ignore - Calendly is loaded via external script
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/your-calendly-url'
      })
    }
  }

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          
          <p className="text-xl text-teal-50 mb-8">
            Take the first step toward healing. Schedule your consultation today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={openCalendly}
              className="bg-white text-teal-600 hover:bg-teal-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schedule Consultation
            </button>
            <a
              href="/about"
              className="bg-teal-800 hover:bg-teal-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Learn More First
            </a>
          </div>

          {/* HIPAA Disclaimer */}
          <div className="mt-8 p-4 bg-teal-800/50 rounded-lg border border-teal-500/30">
            <p className="text-sm text-teal-50 leading-relaxed">
              <strong className="block mb-2">Privacy Notice:</strong>
              This is a request to schedule an appointment. Please provide only your name, 
              contact information, and preferred appointment time. 
              <strong className="block mt-2">
                Do not include any health information, symptoms, or diagnoses in this form.
              </strong>
              All clinical information will be collected securely through our HIPAA-compliant 
              patient portal after your appointment is confirmed.
            </p>
          </div>

          {/* Contact Alternative */}
          <div className="mt-8 text-teal-50">
            <p className="text-sm">
              Prefer to reach out directly?{' '}
              <a href="mailto:larpsychiatry@gmail.com" className="underline hover:text-white transition-colors">
                Email us
              </a>
              {' '}or call{' '}
              <a href="tel:5047825172" className="underline hover:text-white transition-colors">
                (504) 782-5172
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}