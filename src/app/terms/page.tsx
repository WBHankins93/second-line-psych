export const metadata = {
    title: 'Terms of Service | Second Line Psychiatry',
    description: 'Terms and conditions for using Second Line Psychiatry services.',
  }
  
  export default function TermsPage() {
    return (
      <div className="min-h-screen py-16 bg-stone-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12">
            <h1 className="text-4xl font-serif font-bold text-stone-800 mb-6">
              Terms of Service
            </h1>
            <p className="text-sm text-stone-600 mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
  
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700">
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Agreement to Terms
                </h2>
                <p>
                  By accessing and using the services of Second Line Psychiatry, you agree to be bound by these 
                  Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Services Provided
                </h2>
                <p>
                  Second Line Psychiatry provides psychiatric evaluation, medication management, and supportive 
                  therapy services via telehealth for children, adolescents, and young adults. All services are 
                  provided by Dr. Lauryn Richard, DNP, APRN, PMHNP-BC, a board-certified psychiatric mental health 
                  nurse practitioner.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Telehealth Services
                </h2>
                <p className="mb-2">
                  All appointments are conducted via secure telehealth video sessions. By using our telehealth services, you acknowledge:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>You have access to the necessary technology (computer/tablet/phone, internet connection, camera, microphone)</li>
                  <li>You will participate from a private, confidential location</li>
                  <li>You are physically located in Louisiana during the session</li>
                  <li>Technical issues may occasionally occur</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Appointments and Cancellations
                </h2>
                <p>
                  We require 24 hours notice for appointment cancellations. Late cancellations or missed appointments 
                  may be subject to a fee. Please contact us as soon as possible if you need to reschedule.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Payment and Billing
                </h2>
                <p>
                  Payment is due at the time of service. We accept various forms of payment and will provide you 
                  with a superbill for insurance reimbursement if applicable. You are responsible for understanding 
                  your insurance coverage and any out-of-pocket costs.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Medical Disclaimer
                </h2>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="font-semibold text-red-800 mb-2">Emergency Situations</p>
                  <p>
                    This website and telehealth services are not for emergency situations. If you are experiencing 
                    a mental health emergency, please call 988 (Suicide and Crisis Lifeline), call 911, or go to 
                    your nearest emergency room immediately.
                  </p>
                </div>
                <p className="mt-4">
                  Our services do not replace emergency care or crisis intervention services. We are not available 
                  for immediate crisis support outside of scheduled appointments.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Scope of Practice
                </h2>
                <p>
                  Services are provided within the scope of practice for psychiatric mental health nurse practitioners 
                  in Louisiana. We specialize in working with children, adolescents, and young adults. We may refer 
                  you to other providers if your needs are outside our scope of practice.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Confidentiality
                </h2>
                <p>
                  We maintain strict confidentiality in accordance with HIPAA regulations and professional ethical 
                  standards. Information may be disclosed only with your written consent, or as required by law 
                  (such as in cases of imminent danger to self or others, child abuse, or court order).
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Website Use
                </h2>
                <p className="mb-2">When using our website, you agree to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide accurate information</li>
                  <li>Not share protected health information through unsecured website forms</li>
                  <li>Not attempt to gain unauthorized access to any part of the website</li>
                  <li>Not use the website for any unlawful purpose</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Limitation of Liability
                </h2>
                <p>
                  While we strive to provide the highest quality care, psychiatric treatment outcomes cannot be 
                  guaranteed. We are not liable for any indirect, incidental, or consequential damages arising 
                  from the use of our services, except as required by law.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will be posted on 
                  this page with an updated effective date. Your continued use of our services constitutes 
                  acceptance of any changes.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Contact Information
                </h2>
                <p>If you have questions about these Terms of Service, please contact us:</p>
                <div className="mt-3 ml-4">
                  <p>Second Line Psychiatry</p>
                  <p>1512 Cleary Avenue</p>
                  <p>Metairie, LA 70001</p>
                  <p>Phone: <a href="tel:5047825172" className="text-teal-600 hover:underline">(504) 782-5172</a></p>
                  <p>Email: <a href="mailto:larpsychiatry@gmail.com" className="text-teal-600 hover:underline">larpsychiatry@gmail.com</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }