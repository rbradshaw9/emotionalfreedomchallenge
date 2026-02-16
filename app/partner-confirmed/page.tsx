import styles from './page.module.css';

export default function PartnerConfirmedPage() {
  return (
    <div className={styles.page}>
      <section className={styles.confirmationSection}>
        <div className="container container-sm">
          <div className={styles.confirmationCard}>
            <div className={styles.iconWrapper}>
              <div className={styles.successIcon}>✓</div>
            </div>
            
            <h1 className="text-center">Thank You for Your Interest</h1>
            
            <p className={styles.confirmationText}>
              We've received your partner application and truly appreciate you taking 
              the time to share about yourself and your interest in spreading this work.
            </p>

            <div className={styles.nextStepsCard}>
              <h2>What Happens Next</h2>
              
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3>We Review Your Application</h3>
                  <p>
                    Our team will carefully review your information to ensure we're a good 
                    mutual fit and that we can support you effectively as a partner.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3>You'll Hear From Us Soon</h3>
                  <p>
                    Expect a personal response within 1–2 business days. We'll either 
                    approve your partnership and provide next steps, or we'll reach out 
                    if we need any additional information.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3>Partnership Details Shared</h3>
                  <p>
                    Once approved, you'll receive your unique partner link, compensation 
                    details, and any resources you need to share The Emotional Freedom 
                    Challenge with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.reassuranceBox}>
              <p>
                <strong>Please check your email</strong> (including spam/promotions folders) 
                over the next couple of days. We'll be in touch soon.
              </p>
            </div>

            <p className={styles.closingText}>
              We're grateful you want to help us bring emotional freedom to more people. 
              This work is about genuine transformation, and we're honored to potentially 
              partner with someone who shares that vision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
