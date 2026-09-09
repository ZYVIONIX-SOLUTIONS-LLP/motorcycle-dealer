'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SellBikeForm from '../components/SellBikeForm';
import WhyChooseUs from '../components/WhyChooseUs';
import { Tag } from 'lucide-react';

import PageHero from '../components/PageHero';

export default function SellBikePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <PageHero
        badge="Instant Evaluation & Direct Payout"
        title="Sell Your Bike for"
        highlightTitle="Top Price"
        description="Skip hassle and middleman commissions. Get a transparent digital offer, free doorstep inspection, and instant bank payout in 30 minutes."
        imageSrc="/images/hero_sell_bike.jpg"
        breadcrumbs={[{ name: 'Sell Bike', href: '/sell-bike' }]}
        stats={[
          { label: 'Instant Offer', value: '30 Mins' },
          { label: 'RC Transfer', value: 'Guaranteed' },
          { label: 'Home Inspection', value: 'Free' },
        ]}
      />

      <main className="flex-grow">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <SellBikeForm />
        </div>

        <WhyChooseUs />
      </main>

      <Footer />
    </div>
  );
}
