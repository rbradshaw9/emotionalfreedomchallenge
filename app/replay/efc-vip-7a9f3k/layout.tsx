import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Challenge Replays | The Emotional Freedom Challenge',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ReplayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
