import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Partner Registration - The Emotional Freedom Challenge',
  description: 'Complete your partner registration and start sharing transformation.',
}

export default function PartnerRegister() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <h1>Partner Registration</h1>
          <p className={styles.subtitle}>
            Complete the form below to finalize your partner account. We'll review your submission and reach out within 1-2 business days.
          </p>
        </div>

        <section className={styles.formSection}>
          <div className={styles.formWrapper}>
            {/* 
              KEAP FORM EMBED POINT:
              Paste the complete Keap form HTML here.
              Preserve all attributes: action, method, IDs, names, data-* attributes, hidden fields, and scripts.
              The CSS below is pre-configured to style .infusion-field elements with floating labels.
            */}
            
            <p style={{ textAlign: 'center', padding: '40px 20px', color: '#6b7280', fontSize: '15px' }}>
              Form will be embedded here
            </p>
          </div>

          <div className={styles.privacy}>
            <p>
              Your information is secure and will only be used to evaluate and manage your partner account. We respect your privacy and never share your details with third parties.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
