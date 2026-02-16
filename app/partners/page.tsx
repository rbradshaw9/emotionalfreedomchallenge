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
            <h2>Why We Need This Information</h2>
            <p>
              To properly set up your partner account, we collect contact details, payment information, 
              and referral tracking preferences. This ensures accurate commission payments and compliance 
              with financial regulations.
            </p>
            <p>
              All information is securely stored and used solely for partner program administration.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container container-sm">
          <div className={styles.formWrapper}>

            {/* 
              KEAP REFERRAL PARTNER FORM INTEGRATION POINT
              
              Paste the full Keap form HTML here.
              Do NOT modify form action, field names, IDs, or scripts.
              The surrounding styles will handle layout and visual polish.
            */}
            
            <div className={styles.formPlaceholder}>
              <p className={styles.placeholderText}>
                [Keap Referral Partner Form Will Be Embedded Here]
              </p>
              <p className={styles.placeholderNote}>
                Form includes: Contact Information, Commission Payment Details, Account Setup
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.privacySection}>
        <div className="container container-sm">
          <div className={styles.privacyNote}>
            <p>
              <strong>Your privacy matters.</strong> We protect your personal and financial information 
              with industry-standard security. Your data is never shared with third parties and is used 
              exclusively for partner program administration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
