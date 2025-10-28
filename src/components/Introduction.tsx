import Link from 'next/link'

export default function Introduction() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-6">
            At Second Line Psychiatry, we offer support grounded in compassion and cultural awareness. 
            Inspired by New Orleans' second line tradition, a symbol of movement, healing, and resilience, 
            our practice walks with you through both celebration and grief.
          </p>
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-8">
            Whether you're navigating anxiety, depression, trauma, or major life changes, 
            we're here to help you move forward with telehealth services tailored to your needs.
          </p>
          <Link 
            href="/about"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200 group"
          >
            Learn More About Dr. Richard
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}