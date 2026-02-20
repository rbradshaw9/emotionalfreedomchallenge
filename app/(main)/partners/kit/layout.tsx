import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner Marketing Kit - The Emotional Freedom Challenge',
  description: 'Access email swipes, social media copy, and tracking tools for promoting The Emotional Freedom Challenge as a partner.',
};

export default function KitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
