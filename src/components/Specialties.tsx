import Link from 'next/link'

const specialties = [
  {
    title: 'ADHD',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: 'Comprehensive assessment and management',
  },
  {
    title: 'Anxiety Disorders',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    description: 'Evidence-based treatment approaches',
  },
  {
    title: 'Mood Disorders',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Compassionate care for depression and more',
  },
  {
    title: 'Personality Disorders',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    description: 'Specialized therapeutic interventions',
  },
]

export default function Specialties() {
  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
            Areas of Specialization
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Providing expert care across a range of mental health conditions
          </p>
        </div>

        {/* Specialty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.title}
              className="specialty-card text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-teal-100 text-teal-600 rounded-full">
                  {specialty.icon}
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-stone-800 mb-2">
                {specialty.title}
              </h3>
              <p className="text-stone-600 text-sm">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA to Services Page */}
        <div className="text-center">
          <Link 
            href="/services"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-lg transition-colors duration-200 group"
          >
            View All Services & Treatment Approaches
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}