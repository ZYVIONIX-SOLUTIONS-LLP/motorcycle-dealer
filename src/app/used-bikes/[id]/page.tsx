import React from 'react';
import { mockBikes } from '@/data/bikes';
import BikeDetailClient from './BikeDetailClient';

export function generateStaticParams() {
  return mockBikes.map((bike) => ({
    id: bike.id,
  }));
}

export default async function BikeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const bike = mockBikes.find((b) => b.id === resolvedParams.id) || mockBikes[0];

  return <BikeDetailClient bike={bike} />;
}
