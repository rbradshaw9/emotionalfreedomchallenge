import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logo}>
            <Image
              src="/logo/emotional-freedom-challenge-logo.png"
              alt="The Emotional Freedom Challenge"
              width={280}
              height={60}
              priority
              className={styles.logoImage}
            />
          </div>
        </Link>
        
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/replay" className={styles.navLink}>
            Replays
          </Link>
        </nav>
      </div>
    </header>
  );
}
