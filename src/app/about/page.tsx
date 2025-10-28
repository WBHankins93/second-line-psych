import Image from 'next/image'

export const metadata = {
  title: 'About Dr. Lauryn Richard | Second Line Psychiatry',
  description: 'Learn about Dr. Lauryn Richard, DNP, APRN, PMHNP-BC - Board-certified psychiatric nurse practitioner with 7 years of experience in mental health care.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gold-50 to-white py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
              About Dr. Lauryn Richard
            </h1>
            <p className="text-xl text-stone-600">
              DNP, APRN, PMHNP-BC
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            {/* Photo and Quick Info */}
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div className="md:col-span-1">
                {/* Placeholder for photo */}
                <div className="bg-stone-200 rounded-lg aspect-square flex items-center justify-center mb-6">
                  <svg className="w-32 h-32 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Quick Facts */}
                <div className="bg-gold-50 p-6 rounded-lg border border-gold-200">
                  <h3 className="font-semibold text-stone-800 mb-3">Credentials</h3>
                  <ul className="space-y-2 text-sm text-stone-700">
                    <li>• Board-Certified PMHNP</li>
                    <li>• Doctor of Nursing Practice</li>
                    <li>• 7+ Years Experience</li>
                    <li>• ANCC Certified</li>
                    <li>• DEA Registered</li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6 text-stone-700 leading-relaxed">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">
                    My Approach to Care
                  </h2>
                  <p>
                    Are you looking for a provider who truly understands the highs, lows, and in-betweens 
                    of life? At Second Line <span className="font-serif italic">Psychiatry</span>, we offer support grounded in compassion and cultural 
                    awareness. Inspired by New Orleans' second line tradition (a symbol of movement, healing, 
                    and resilience), our practice walks with you through both celebration and grief.
                  </p>
                </div>

                <div>
                  <p>
                    As a psychiatric nurse practitioner, I bring both clinical expertise and a deep personal 
                    commitment to care shaped by my experience growing up in New Orleans. Having witnessed 
                    the lasting impact of Hurricane Katrina, I believe in showing up, especially when things 
                    are hard.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">
                    Clinical Expertise
                  </h2>
                  <p>
                    I specialize in working with school-age children, adolescents, and young adults, offering 
                    telehealth-only care. My background includes six years as a psychiatric RN on a pediatric 
                    inpatient unit and the past year as a psychiatric consultant in a pediatric emergency department.
                  </p>
                </div>

                <div>
                  <p>
                    My clinical focus includes ADHD, anxiety, mood disorders, and personality disorders. I offer 
                    medication management along with supportive therapy tailored to each client's needs. I currently 
                    use CBT (Cognitive Behavioral Therapy) and am continuing training in trauma-focused approaches 
                    and DBT to better serve clients with complex emotional needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Background */}
            <div className="border-t border-stone-200 pt-12 space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">
                  Professional Experience
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-maroon-700 pl-6">
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">
                      Emergency Dept. Psychiatric Consultant
                    </h3>
                    <p className="text-stone-600 mb-2">
                      Manning Family Children's Hospital | Feb 2024 - Mar 2025
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-stone-700">
                      <li>Performed comprehensive psychiatric evaluations for pediatric and adult ED patients</li>
                      <li>Initiated psychiatric medication regimens and handled crisis interventions autonomously</li>
                      <li>Developed and led restraint training workshops for hospital security staff</li>
                      <li>Contributed to inpatient unit improvement projects and policy development</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-maroon-700 pl-6">
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">
                      Inpatient Psychiatric RN
                    </h3>
                    <p className="text-stone-600 mb-2">
                      Manning Family Children's Hospital | Jun 2018 - Feb 2024
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-stone-700">
                      <li>Acted as charge nurse for 53-bed unit</li>
                      <li>Collaborated with multidisciplinary team regarding patient care management</li>
                      <li>Precepted and educated new RN hires</li>
                      <li>Developed educational material for unit</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">
                  Education & Training
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800">
                      Doctor of Nursing Practice, Psychiatric Mental Health
                    </h3>
                    <p className="text-stone-600">
                      Louisiana State University Health New Orleans | Aug 2019 - May 2023
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800">
                      Bachelor of Science, Nursing
                    </h3>
                    <p className="text-stone-600">
                      Louisiana State University Health New Orleans, CARE Nursing Program | Aug 2016 - May 2018
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800">
                      Bachelor of Science, Kinesiology
                    </h3>
                    <p className="text-stone-600">
                      Louisiana State University | May 2012 - Dec 2014
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">
                  Licensure & Certifications
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-stone-800">ANCC Psychiatric Mental Health Nurse Practitioner</h3>
                    <p className="text-sm text-stone-600">Aug 2023 - Aug 2028</p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-stone-800">Louisiana State Board of Nursing - RN & APRN</h3>
                    <p className="text-sm text-stone-600">Jan 2025 - Jan 2027</p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-stone-800">DEA Controlled Substance Registration</h3>
                    <p className="text-sm text-stone-600">Schedules 2N, 3, 3N, 4, 5</p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-stone-800">Louisiana Board of Pharmacy CDS</h3>
                    <p className="text-sm text-stone-600">Feb 2025 - Feb 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-maroon-700 to-maroon-900 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Ready to Begin Your Healing Journey?
              </h2>
              <p className="text-stone-100 text-lg mb-6">
                Let's walk through this together.
              </p>
              <a href="/#schedule" className="btn-primary bg-white text-maroon-700 hover:bg-stone-100">
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}