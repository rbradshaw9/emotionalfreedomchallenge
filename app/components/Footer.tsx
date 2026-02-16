import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <p className={styles.brandText}>The Emotional Freedom Challenge</p>
            <p className={styles.tagline}>with Dr. Paul Jenkins</p>
          </div>
          
          <nav className={styles.nav} aria-label="Footer navigation">
            <Link href="/privacy" className={styles.link}>
              Privacy Policy
            </Link>
            <span className={styles.separator}>·</span>
            <Link href="/terms" className={styles.link}>
              Terms of Use
            </Link>
          </nav>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Dr. Paul Jenkins. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
