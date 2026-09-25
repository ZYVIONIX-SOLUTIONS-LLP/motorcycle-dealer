import { mockBikes } from '@/data/bikes';
import { ReactNode } from 'react';

export function generateStaticParams() {
  return mockBikes.map((bike) => ({
    id: bike.id,
  }));
}

export default function UsedBikeLayout({ children }: { children: ReactNode }) {
  return children;
}
