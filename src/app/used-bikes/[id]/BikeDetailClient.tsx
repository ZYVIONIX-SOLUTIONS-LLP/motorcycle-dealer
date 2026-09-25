'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TestRideModal from '../../components/TestRideModal';
import { Bike } from '@/data/bikes';
import { useBikeContext } from '@/context/BikeContext';
import {
  ShieldCheck,
  Calendar,
  Gauge,
  Fuel,
  CheckCircle2,
  Heart,
  Scale,
  MessageSquare,
  Phone,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  FileText,
  Award,
} from 'lucide-react';

import PageHero from '@/app/components/PageHero';

export default function BikeDetailClient({ bike }: { bike: Bike }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTestRideOpen, setIsTestRideOpen] = useState(false);

  const { toggleWishlist, isInWishlist, toggleCompare, isInCompare } = useBikeContext();
  const isSaved = isInWishlist(bike.id);
  const isCompared = isInCompare(bike.id);

  // EMI Estimate
  const principal = bike.price * 0.8;
  const emi = Math.round((principal * 0.032).toFixed(0) as any);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <PageHero
        badge={`${bike.brand} ${bike.variant}`}
        title={`${bike.year} ${bike.brand}`}
        highlightTitle={bike.model}
        description={`Certified ${bike.condition} condition pre-owned motorcycle with ${bike.kilometers.toLocaleString('en-IN')} km driven, verified ${bike.ownership} ownership, and legal document assurance.`}
        imageSrc={bike.images[0]}
        breadcrumbs={[
          { name: 'Used Bikes', href: '/used-bikes' },
          { name: `${bike.brand} ${bike.model}`, href: `/used-bikes/${bike.id}` },
        ]}
        stats={[
          { label: 'Inspection Score', value: `${bike.inspectionScore}/100` },
          { label: 'Ownership', value: bike.ownership },
          { label: 'Insurance Validity', value: bike.insurance.split(' ')[0] },
        ]}
      />

      <main className="flex-grow max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Gallery & Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Main Image Gallery */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-gray-100 shadow-sm space-y-4">
              <div className="relative aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden group">
                <img
                  src={bike.images[activeImageIndex]}
                  alt={`${bike.brand} ${bike.model}`}
                  className="w-full h-full object-cover"
                />

                {/* Fullscreen Trigger */}
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-4 right-4 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
                  title="View Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Inspection Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-gray-900 shadow-lg">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>150-Point Inspection Passed</span>
                </div>

                {/* Prev/Next arrows on main view */}
                {bike.images.length > 1 && (
                  <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) => (prev === 0 ? bike.images.length - 1 : prev - 1))
                      }
                      className="pointer-events-auto p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow transition"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) => (prev === bike.images.length - 1 ? 0 : prev + 1))
                      }
                      className="pointer-events-auto p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow transition"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {bike.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {bike.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 sm:w-24 aspect-[4/3] rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-red-600 ring-2 ring-red-600/20 scale-95'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Specifications Matrix */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
              <h2 className="text-xl font-heading font-black text-gray-900 border-b border-gray-100 pb-4">
                Technical Specifications & Inspection Summary
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-gray-400 uppercase tracking-wider font-bold block mb-1">
                    Year of Mfg
                  </span>
                  <span className="font-bold text-gray-900 text-sm">{bike.year}</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-gray-400 uppercase tracking-wider font-bold block mb-1">
                    Kilometers Run
                  </span>
                  <span className="font-bold text-gray-900 text-sm">{bike.kilometers.toLocaleString()} km</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-gray-400 uppercase tracking-wider font-bold block mb-1">
                    Engine Capacity
                  </span>
                  <span className="font-bold text-gray-900 text-sm">{bike.engineCC} cc</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-gray-400 uppercase tracking-wider font-bold block mb-1">
                    Fuel Delivery
                  </span>
                  <span className="font-bold text-gray-900 text-sm">{bike.fuelType}</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-gray-400 uppercase tracking-wider font-bold block mb-1">
                    Ownership
                  </span>
                  <span className="font-bold text-gray-900 text-sm">{bike.ownership}</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-gray-400 uppercase tracking-wider font-bold block mb-1">
                    Condition
                  </span>
                  <span className="font-bold text-gray-900 text-sm">{bike.condition}</span>
                </div>
              </div>
            </div>

            {/* Key Features & Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
              <h2 className="text-xl font-heading font-black text-gray-900 border-b border-gray-100 pb-4">
                Vehicle Highlights & Features
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                This certified {bike.brand} {bike.model} ({bike.variant}) is in pristine {bike.condition.toLowerCase()} condition. Fully serviced and inspected by certified master mechanics, complete with legal documentation, verified RC transfer, and genuine service history.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {bike.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 bg-gray-50 rounded-xl text-xs font-semibold text-gray-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 150-Point Inspection Details */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h2 className="text-xl font-heading font-black text-gray-900">
                  150-Point Quality Inspection
                </h2>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">
                  Score: {bike.inspectionScore}/100
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { area: 'Engine & Transmission', details: 'Zero oil leakage, valve clearance checked, smooth clutch operation', status: 'Passed' },
                  { area: 'Electricals & Battery', details: 'All lights, ECU scan cleared, starter motor test passed', status: 'Passed' },
                  { area: 'Braking & ABS', details: 'Front & rear disc pads inspected, hydraulic pressure verified', status: 'Passed' },
                  { area: 'Chassis & Suspension', details: 'Fork seals intact, swingarm aligned, zero rust degradation', status: 'Passed' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start justify-between gap-4"
                  >
                    <div>
                      <span className="font-bold text-gray-900 text-xs block">{item.area}</span>
                      <span className="text-[11px] text-gray-500">{item.details}</span>
                    </div>
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                        item.status === 'Passed'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Finance & Sticky Buy Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-lg sticky top-28 space-y-6">
              {/* Price & EMI Header */}
              <div className="flex items-baseline justify-between border-b border-gray-100 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">
                    Total Listed Price
                  </span>
                  <span className="text-3xl font-heading font-black text-gray-900">
                    ₹{bike.price.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleCompare(bike.id)}
                    className={`p-2.5 rounded-full border transition ${
                      isCompared ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 text-gray-600 border-gray-200'
                    }`}
                    title="Compare"
                  >
                    <Scale className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => toggleWishlist(bike.id)}
                    className={`p-2.5 rounded-full border transition ${
                      isSaved ? 'bg-red-600 text-white border-red-600' : 'bg-gray-50 text-gray-600 border-gray-200'
                    }`}
                    title="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Quick EMI Box */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-2xl border border-red-100">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-gray-800">Estimated EMI</span>
                  <span className="font-heading font-black text-red-600 text-base">
                    ₹{emi.toLocaleString('en-IN')}/mo
                  </span>
                </div>
                <p className="text-[11px] text-gray-500">
                  Based on 20% down payment (₹{(bike.price * 0.2).toLocaleString('en-IN')}) for 36 months @ 10% p.a.
                </p>
                <Link
                  href="/#financing"
                  className="text-[11px] font-bold text-red-600 hover:underline mt-2 inline-block"
                >
                  Customise EMI Plan →
                </Link>
              </div>

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <Calendar className="w-4 h-4 text-red-600 mx-auto mb-1" />
                  <span className="text-gray-400 block text-[10px]">Year</span>
                  <span className="font-bold text-gray-900">{bike.year}</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <Gauge className="w-4 h-4 text-red-600 mx-auto mb-1" />
                  <span className="text-gray-400 block text-[10px]">Kilometers</span>
                  <span className="font-bold text-gray-900">{bike.kilometers.toLocaleString()} km</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <Fuel className="w-4 h-4 text-red-600 mx-auto mb-1" />
                  <span className="text-gray-400 block text-[10px]">Engine CC</span>
                  <span className="font-bold text-gray-900">{bike.engineCC} cc</span>
                </div>
              </div>

              {/* Document Overview Matrix */}
              <div className="space-y-2 text-xs border-t border-gray-100 pt-4">
                <div className="flex justify-between py-1.5 border-b border-gray-50">
                  <span className="text-gray-500">Ownership</span>
                  <span className="font-bold text-gray-900">{bike.ownership}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-50">
                  <span className="text-gray-500">Registration</span>
                  <span className="font-bold text-gray-900">{bike.registration}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-50">
                  <span className="text-gray-500">Insurance</span>
                  <span className="font-bold text-gray-900">{bike.insurance}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-50">
                  <span className="text-gray-500">Location</span>
                  <span className="font-bold text-gray-900">{bike.location}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setIsTestRideOpen(true)}
                  className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/20 transition"
                >
                  Book Free Test Ride
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/916238392582?text=Hi,%20I%20am%20interested%20in%20buying%20the%20${encodeURIComponent(bike.brand)}%20${encodeURIComponent(bike.model)}%20(₹${bike.price})`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition"
                  >
                    <MessageSquare className="w-4 h-4" /> WhatsApp
                  </a>
                  <a
                    href="tel:+916238392582"
                    className="py-3 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition"
                  >
                    <Phone className="w-4 h-4" /> Call Dealer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flipkart-Style Mobile Sticky Action Bar */}
        <div className="fixed bottom-16 left-0 right-0 z-40 bg-white border-t border-gray-200 p-3 shadow-2xl flex items-center justify-between gap-3 md:hidden">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 font-bold uppercase">Price</span>
            <span className="text-base font-black text-gray-900 leading-tight">₹{bike.price.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex items-center gap-2 flex-1 justify-end">
            <a
              href={`https://wa.me/916238392582?text=Hi,%20I%20am%20interested%20in%20buying%20the%20${encodeURIComponent(bike.brand)}%20${encodeURIComponent(bike.model)}%20(₹${bike.price})`}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-emerald-600 text-white rounded-xl active:scale-95 transition"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsTestRideOpen(true)}
              className="flex-1 py-2.5 px-3 bg-red-600 active:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md text-center"
            >
              Book Test Ride
            </button>
          </div>
        </div>
      </main>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 text-white text-sm font-bold bg-white/10 px-4 py-2 rounded-full"
          >
            Close ✕
          </button>
          <img
            src={bike.images[activeImageIndex]}
            alt="Fullscreen view"
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
          />
        </div>
      )}

      {/* Test Ride Modal */}
      {isTestRideOpen && (
        <TestRideModal bike={bike} onClose={() => setIsTestRideOpen(false)} />
      )}

      <Footer />
    </div>
  );
}
