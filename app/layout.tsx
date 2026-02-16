import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'The Emotional Freedom Challenge | Dr. Paul Jenkins',
  description: 'Join Dr. Paul Jenkins for a transformative 5-day journey toward emotional freedom and personal growth.',
  keywords: 'emotional freedom, personal development, Dr. Paul Jenkins, emotional wellness',
  authors: [{ name: 'Dr. Paul Jenkins' }],
  openGraph: {
    title: 'The Emotional Freedom Challenge',
    description: 'A transformative 5-day journey toward emotional freedom',
    siteName: 'The Emotional Freedom Challenge',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
