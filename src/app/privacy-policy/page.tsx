export const metadata = {
    title: 'Privacy Policy | Second Line Psychiatry',
    description: 'Our commitment to protecting your privacy and health information in compliance with HIPAA regulations.',
  }
  
  export default function PrivacyPolicyPage() {
    return (
      <div className="min-h-screen py-16 bg-stone-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12">
            <h1 className="text-4xl font-serif font-bold text-stone-800 mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm text-stone-600 mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
  
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700">
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Our Commitment to Your Privacy
                </h2>
                <p>
                  At Second Line Psychiatry, we are committed to protecting your privacy and maintaining the 
                  confidentiality of your personal health information. This Privacy Policy explains how we collect, 
                  use, and safeguard your information in compliance with the Health Insurance Portability and 
                  Accountability Act (HIPAA) and other applicable laws.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Information We Collect
                </h2>
                <p className="mb-2">We collect information necessary to provide you with quality mental health care:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Contact information (name, email, phone number, address)</li>
                  <li>Insurance information</li>
                  <li>Medical and psychiatric history</li>
                  <li>Treatment information and progress notes</li>
                  <li>Billing and payment information</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  How We Use Your Information
                </h2>
                <p className="mb-2">We use your information for:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Providing treatment and care coordination</li>
                  <li>Billing and payment processing</li>
                  <li>Scheduling appointments</li>
                  <li>Communicating about your care</li>
                  <li>Complying with legal and regulatory requirements</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  HIPAA Compliance
                </h2>
                <p>
                  As a healthcare provider, we comply with all HIPAA regulations regarding the privacy and security 
                  of your protected health information (PHI). You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Access your medical records</li>
                  <li>Request corrections to your records</li>
                  <li>Request restrictions on disclosure of your information</li>
                  <li>Receive a copy of this Privacy Policy</li>
                  <li>File a complaint if you believe your privacy rights have been violated</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Information Security
                </h2>
                <p>
                  We implement appropriate technical, administrative, and physical safeguards to protect your 
                  information from unauthorized access, use, or disclosure. This includes:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Secure, encrypted telehealth platform</li>
                  <li>Password-protected electronic health records</li>
                  <li>Limited access to information on a need-to-know basis</li>
                  <li>Regular security assessments and updates</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Website and Scheduling
                </h2>
                <p>
                  Our website appointment scheduling system collects only basic contact information. 
                  <strong className="text-stone-800"> We do not collect health information through our website scheduling forms.</strong> 
                  All clinical information is collected through our secure, HIPAA-compliant patient portal after 
                  your appointment is scheduled.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Third-Party Services
                </h2>
                <p>
                  We may use third-party services (such as telehealth platforms and electronic health record systems) 
                  that are HIPAA-compliant and have signed Business Associate Agreements as required by law.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with 
                  an updated effective date.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-3">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights, 
                  please contact us:
                </p>
                <div className="mt-3 ml-4">
                  <p>Second Line Psychiatry</p>
                  <p>1512 Cleary Avenue</p>
                  <p>Metairie, LA 70001</p>
                  <p>Phone: <a href="tel:5047825172" className="text-teal-600 hover:underline">(504) 782-5172</a></p>
                  <p>Email: <a href="mailto:larpsychiatry@gmail.com" className="text-teal-600 hover:underline">larpsychiatry@gmail.com</a></p>
                </div>
              </section>
  
              <section className="bg-amber-50 p-6 rounded-lg border border-amber-200 mt-8">
                <h2 className="text-xl font-semibold text-stone-800 mb-2">
                  Notice of Privacy Practices
                </h2>
                <p className="text-sm">
                  A complete Notice of Privacy Practices (NPP) as required by HIPAA will be provided to you 
                  at your first appointment and is available upon request.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }