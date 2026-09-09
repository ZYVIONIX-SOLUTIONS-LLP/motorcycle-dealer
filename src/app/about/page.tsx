'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import { ShieldCheck, Award, Wrench, Users, CheckCircle2, Heart, Bike } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Vikram Nair',
    role: 'Founder & Chief Mechanical Engineer',
    experience: '15+ Years Superbike Tuning',
    bio: 'Ex-OEM race team mechanic with a passion for precision engineering and setting gold standards in motorcycle sales.',
    avatar: '/images/indian_rider_1.jpg',
  },
  {
    name: 'Arjun Menon',
    role: 'Head of Diagnostics & ECU Remapping',
    experience: '12+ Years Automotive Electronics',
    bio: 'Specialist in electronic fault isolation, ECU remapping, and high-end superbike diagnostic scans.',
    avatar: '/images/indian_rider_2.jpg',
  },
  {
    name: 'Siddharth Rao',
    role: 'Master Quality & Inspection Lead',
    experience: '10+ Years Quality Audit',
    bio: 'Leads our 150-point physical and legal inspection process ensuring zero compromise on road safety.',
    avatar: '/images/indian_rider_3.jpg',
  },
];

const pillars = [
  {
    title: '150-Point Quality Promise',
    desc: 'Every motorcycle undergoes a multi-stage physical, electrical, diagnostic, and legal paper audit before listing.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparent Pricing',
    desc: 'Zero hidden dealer fees or inflated margins. Instant online valuations and fair market pricing guaranteed.',
    icon: Award,
  },
  {
    title: 'Master Engineering',
    desc: 'Equipped with dealer-grade OBD diagnostic tools, synthetic lubes, and certified master technicians.',
    icon: Wrench,
  },
  {
    title: 'End-to-End Hassle-Free',
    desc: 'From instant RC transfer to doorstep delivery and post-purchase warranty support, we handle everything.',
    icon: CheckCircle2,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <PageHero
        badge="Our Story & Philosophy"
        title="Redefining Pre-Owned"
        highlightTitle="Motorcycles"
        description="South India's premier certified motorcycle dealership and multi-brand workshop. Driven by engineering precision, complete paper transparency, and rider passion."
        imageSrc="/images/hero_about.jpg"
        breadcrumbs={[{ name: 'About Us', href: '/about' }]}
        stats={[
          { label: 'Happy Riders', value: '15,000+' },
          { label: 'Inspection Checklist', value: '150 Points' },
          { label: 'Satisfaction Rating', value: '4.9 / 5' },
        ]}
      />

      <main className="flex-grow">
        {/* Dealership Story Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider">
                <Bike className="w-4 h-4" /> Built For Riders By Riders
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 tracking-tight leading-tight">
                Revolutionizing the <span className="text-red-600">Pre-Owned Experience</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Founded in Kochi, Kerala, <strong>RideHub</strong> was born out of a simple realization: buying a pre-owned motorcycle or getting reliable workshop service shouldn't involve guesswork, hidden defects, or sketchy paperwork.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We built a modern automotive ecosystem combining <strong>150-point diagnostic inspections</strong>, certified master mechanics, dealer-grade ECU scanners, and guaranteed legal paper transfers — delivering peace of mind with every key handed over.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase">100% Verified</h4>
                    <span className="text-[11px] text-gray-500">Legal Document Guarantee</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase">6-Month Warranty</h4>
                    <span className="text-[11px] text-gray-500">Engine & Gearbox Covered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid Showcase */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="/images/hero_used_bikes.jpg"
                    alt="RideHub Showroom"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-red-600 text-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-heading font-black text-2xl mb-1">15,000+</h4>
                  <p className="text-xs text-red-100 font-medium">Bikes Delivered Across South India</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-heading font-black text-2xl text-red-500 mb-1">150+</h4>
                  <p className="text-xs text-gray-400 font-medium">Strict Quality Diagnostic Parameters</p>
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src="/images/hero_workshop.jpg"
                    alt="RideHub Workshop"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars Section */}
        <section className="py-16 bg-white border-y border-gray-200">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
                Our Four Pillars
              </span>
              <h2 className="text-3xl font-heading font-black text-gray-900 tracking-tight">
                Why Riders Trust <span className="text-red-600">RideHub</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all duration-300 space-y-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/20">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-gray-900 text-lg">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Master Technicians Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
              Master Technicians
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 tracking-tight">
              Meet The Experts Behind <span className="text-red-600">The Wrench</span>
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              OEM-certified mechanics and diagnostic specialists dedicated to keeping your machine in peak health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 text-center space-y-4 group"
              >
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-red-50 group-hover:border-red-600 transition-colors duration-300 shadow-md">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-gray-900 text-lg">{member.name}</h3>
                  <p className="text-xs font-bold text-red-600">{member.role}</p>
                  <span className="inline-block mt-1 px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-full text-[10px] font-semibold">
                    {member.experience}
                  </span>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed italic">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <WhyChooseUs />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
