export const metadata = {
  title: 'Services | Second Line Psychiatry',
  description: 'Comprehensive mental health services including medication management, therapy, and specialized treatment for ADHD, anxiety, mood disorders, and more.',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Medication Management',
      description: 'Expert psychiatric medication evaluation and ongoing management tailored to your unique needs. I work collaboratively with you to find the right medications at the right doses, monitoring effectiveness and adjusting as needed.',
      details: [
        'Comprehensive medication evaluation',
        'Careful monitoring and adjustment',
        'Education about medications and side effects',
        'Coordination with other healthcare providers',
      ],
    },
    {
      title: 'Supportive Therapy',
      description: 'Individual therapy sessions that provide a safe, non-judgmental space to explore your thoughts, feelings, and experiences. My approach is warm, collaborative, and focused on your goals.',
      details: [
        'Individualized treatment plans',
        'Trauma-informed approach',
        'Focus on building resilience',
        'Culturally sensitive care',
      ],
    },
    {
      title: 'Cognitive Behavioral Therapy (CBT)',
      description: 'Evidence-based therapy that helps you identify and change unhelpful thought patterns and behaviors. CBT is effective for anxiety, depression, and many other conditions.',
      details: [
        'Practical skills and strategies',
        'Homework and practice between sessions',
        'Focus on present-day challenges',
        'Goal-oriented approach',
      ],
    },
    {
      title: 'Trauma-Focused Care',
      description: 'Specialized approaches for individuals who have experienced trauma. I am currently in training for trauma-focused therapies to better support clients with PTSD and complex trauma.',
      details: [
        'Safe, paced approach to trauma processing',
        'Building coping skills first',
        'Trauma-informed throughout all care',
        'Ongoing specialized training',
      ],
    },
  ]

  const specialties = [
    {
      title: 'ADHD',
      description: 'Comprehensive assessment and treatment for Attention-Deficit/Hyperactivity Disorder in children, adolescents, and young adults. Including medication management, behavioral strategies, and accommodations planning.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Anxiety Disorders',
      description: 'Treatment for generalized anxiety, social anxiety, panic disorder, and specific phobias using evidence-based approaches including medication and CBT.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Mood Disorders',
      description: 'Compassionate care for depression, bipolar disorder, and other mood conditions. Combining medication management with supportive therapy.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Personality Disorders',
      description: 'Specialized therapeutic interventions for personality disorders. I am pursuing additional training in DBT (Dialectical Behavior Therapy) to enhance treatment options.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-stone-600">
              Comprehensive, compassionate mental health care tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-8 text-center">
              Treatment Approaches
            </h2>
            
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-stone-50 rounded-xl p-8 border border-stone-200"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-stone-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start">
                        <svg className="w-5 h-5 text-maroon-700 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-stone-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-gradient-to-b from-stone-50 to-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4 text-center">
              Areas of Specialization
            </h2>
            <p className="text-lg text-stone-600 text-center mb-12 max-w-3xl mx-auto">
              I provide specialized care for the following conditions in children, adolescents, and young adults
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {specialties.map((specialty, index) => (
                <div
                  key={specialty.title}
                  className="bg-white p-6 rounded-xl shadow-md border border-stone-100"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-gold-100 text-maroon-700 rounded-full">
                      {specialty.icon}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-stone-800">
                      {specialty.title}
                    </h3>
                  </div>
                  <p className="text-stone-700 leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gold-50 rounded-xl p-8 border border-gold-200">
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-maroon-700 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-stone-800 mb-2">
                    Telehealth Services
                  </h3>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    All appointments are currently conducted via secure telehealth video sessions. This allows for 
                    convenient, confidential care from the comfort of your own home.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-stone-700">Secure, HIPAA-compliant video platform</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-stone-700">Flexible scheduling to fit your life</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-stone-700">No need to travel or take time off work/school</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-maroon-700 to-maroon-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-stone-100 mb-8">
              Schedule your consultation today and take the first step toward healing.
            </p>
            <a href="/#schedule" className="btn-primary bg-white text-maroon-700 hover:bg-stone-100">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}