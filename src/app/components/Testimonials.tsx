'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Arun Kumar',
    bike: 'Royal Enfield Classic 350',
    rating: 5,
    comment: 'Bought my pre-owned Classic 350 from RideHub. The bike was in pristine 96/100 condition with full service history and instant RC transfer. The team made the buying process smooth and transparent.',
    avatar: '/images/indian_rider_1.jpg',
  },
  {
    name: 'Vishnu Prasad',
    bike: 'Yamaha R15 V4',
    rating: 5,
    comment: 'Very transparent and trustworthy dealership. Got my R15 at the best market price with zero hidden charges. Their 150-point inspection gave me complete peace of mind!',
    avatar: '/images/indian_rider_2.jpg',
  },
  {
    name: 'Nikhil S.',
    bike: 'KTM Duke 250',
    rating: 5,
    comment: 'The workshop service center here is top-notch. They serviced my Duke 250 like their own bike. OBD scan reports and chain servicing were done flawlessly.',
    avatar: '/images/indian_rider_3.jpg',
  },
  {
    name: 'Akshay Babu',
    bike: 'Bajaj Dominar 400',
    rating: 5,
    comment: 'Best place to buy used bikes in town. Professional team, fast financing approval, and great post-purchase warranty support.',
    avatar: '/images/indian_rider_4.jpg',
  },
];

// Duplicate reviews to create a seamless infinite loop
const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-16 sm:py-20 border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mb-10 text-center">
        <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
          Rider Experiences
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 tracking-tight">
          What Our <span className="text-red-600">Riders Say</span>
        </h2>
        <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
          Real stories from happy buyers and workshop clients across South India.
        </p>
      </div>

      {/* Infinite Flowing Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 group">
        {/* Left & Right Gradient Blur Overlays for Smooth Water-like Flow Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />

        {/* Custom CSS Keyframes for smooth continuous water flow + pause on hover */}
        <style jsx>{`
          @keyframes marqueeLeftToRight {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          .animate-marquee-flow {
            animation: marqueeLeftToRight 35s linear infinite;
          }
          .group:hover .animate-marquee-flow {
            animation-play-state: paused;
          }
        `}</style>

        {/* Moving Track: Animated Left to Right */}
        <div className="flex gap-6 w-max animate-marquee-flow">
          {duplicatedReviews.map((rev, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] shrink-0 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gray-200" />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="font-heading font-bold text-gray-900 text-sm">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] font-semibold text-red-600">
                    {rev.bike}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

