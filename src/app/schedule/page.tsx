// src/app/schedule/page.tsx
export const metadata = {
  title: 'Schedule Consultation | Second Line Psychiatry',
  description: 'Schedule your initial consultation with Dr. Lauryn Richard. Convenient telehealth appointments available.',
}

export default function SchedulePage() {
  // Replace this URL with your client's actual Google Calendar appointment scheduling URL
  const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID"

  return (
    <div className="min-h-screen bg-stone-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-maroon-700 to-maroon-900 py-12">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Schedule Your Consultation
              </h1>
              <p className="text-xl text-stone-100">
                Take the first step toward healing. Choose a time that works for you.
              </p>
            </div>
          </div>
        </section>
  
        {/* Privacy Notice */}
        <section className="py-8 bg-amber-50 border-b border-amber-200">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Important Privacy Notice</h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    This is a request to schedule an appointment. Please provide only your name, 
                    contact information, and preferred appointment time. <strong>Do not include any health information, 
                    symptoms, or diagnoses in this booking form.</strong> All clinical information will be collected 
                    securely through our HIPAA-compliant patient portal after your appointment is confirmed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Scheduler Section */}
        <section className="py-12">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-stone-200 text-center">
                  <div className="flex justify-center mb-3">
                    <svg className="w-8 h-8 text-maroon-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">60-Minute Sessions</h3>
                  <p className="text-sm text-stone-600">Comprehensive initial consultation</p>
                </div>
  
                <div className="bg-white p-6 rounded-lg shadow-md border border-stone-200 text-center">
                  <div className="flex justify-center mb-3">
                    <svg className="w-8 h-8 text-maroon-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">Telehealth Only</h3>
                  <p className="text-sm text-stone-600">Convenient video sessions from home</p>
                </div>
  
                <div className="bg-white p-6 rounded-lg shadow-md border border-stone-200 text-center">
                  <div className="flex justify-center mb-3">
                    <svg className="w-8 h-8 text-maroon-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">Easy Scheduling</h3>
                  <p className="text-sm text-stone-600">Pick a time that works for you</p>
                </div>
              </div>
  
              {/* Embedded Google Calendar */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
                <iframe
                  src={GOOGLE_CALENDAR_URL}
                  style={{ border: 0 }}
                  width="100%"
                  height="700"
                  frameBorder="0"
                  scrolling="no"
                  title="Schedule Appointment"
                  className="rounded-lg"
                />
              </div>
  
              {/* Alternative Contact Methods */}
              <div className="mt-8 text-center">
                <p className="text-stone-600 mb-4">
                  Having trouble with the scheduler or prefer to reach out directly?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:5047825172"
                    className="inline-flex items-center justify-center gap-2 text-maroon-700 hover:text-maroon-800 font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (504) 782-5172
                  </a>
                  <a
                    href="mailto:larpsychiatry@gmail.com"
                    className="inline-flex items-center justify-center gap-2 text-maroon-700 hover:text-maroon-800 font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    larpsychiatry@gmail.com
                  </a>
                </div>
              </div>
  
              {/* What to Expect */}
              <div className="mt-12 bg-teal-50 rounded-xl p-8 border border-teal-200">
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-4">
                  What to Expect at Your First Appointment
                </h2>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You'll receive a confirmation email with a secure video link</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Complete intake paperwork through our secure patient portal</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>We'll discuss your concerns, history, and treatment goals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Together, we'll create a personalized treatment plan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}