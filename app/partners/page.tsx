import styles from './page.module.css';

export default function PartnersPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container container-sm">
          <h1 className="text-center text-balance">
            Partner Registration
          </h1>
          <p className={styles.subtitle}>
            Complete your partner details to receive your unique referral link and commission tracking.
          </p>
        </div>
      </section>

      <section className={styles.framingSection}>
        <div className="container container-sm">
          <div className={styles.framingCard}>
            <h2>Partner Registration Details</h2>
            <p>
              Please complete the form below to set up your referral partner account. 
              We collect contact details, payment information, and account preferences to ensure 
              accurate commission tracking and compliance.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container container-sm">
          <div className={styles.formWrapper}>
            {/* 
              KEAP REFERRAL PARTNER FORM EMBED POINT
              
              Paste the complete Keap form HTML below this comment.
              Do NOT modify: form action, field names, IDs, hidden inputs, or scripts.
              The CSS will automatically style the form elements.
            */}
            
            {/* Form embed goes here */}
            
          </div>
        </div>
      </section>

      <section className={styles.privacySection}>
        <div className="container container-sm">
          <div className={styles.privacyNote}>
            <p>
              <strong>Your information is secure.</strong> All personal and payment details are 
              protected and used solely for partner program administration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
