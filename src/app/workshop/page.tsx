'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkshopServices from '../components/WorkshopServices';
import InspectionSection from '../components/InspectionSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import { Wrench, Shield, Cpu, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

import PageHero from '../components/PageHero';

export default function WorkshopPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <PageHero
        badge="State-of-the-Art Service Center"
        title="Precision Superbike"
        highlightTitle="Workshop"
        description="Certified master technicians, dealer-grade OBD ECU scanners, synthetic lubricants, and ceramic detailing under one roof."
        imageSrc="/images/hero_workshop.jpg"
        breadcrumbs={[{ name: 'Workshop', href: '/workshop' }]}
        stats={[
          { label: 'Diagnostic Tools', value: 'Dealer-Grade' },
          { label: 'Master Mechanics', value: 'OEM Certified' },
          { label: 'Turnaround Time', value: 'Same-Day' },
        ]}
      />

      <main className="flex-grow">
        <WorkshopServices />
        <InspectionSection />
        <WhyChooseUs />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
