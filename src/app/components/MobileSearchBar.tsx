'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, SlidersHorizontal, Flame, Sparkles, ShieldCheck, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const quickPills = [
  { label: 'All Bikes', href: '/used-bikes', icon: '🏍️' },
  { label: 'Royal Enfield', href: '/used-bikes?brand=Royal+Enfield', icon: '👑' },
  { label: 'Yamaha & KTM', href: '/used-bikes?brand=Yamaha', icon: '⚡' },
  { label: 'Under ₹1 Lakh', href: '/used-bikes?budget=Under+1+Lakh', icon: '💰' },
  { label: 'Superbikes', href: '/used-bikes?type=Sport', icon: '🏁' },
  { label: 'Book Service', href: '/book-service', icon: '🔧' },
  { label: 'Sell Bike', href: '/sell-bike', icon: '🏷️' },
];

export default function MobileSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/used-bikes?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/used-bikes');
    }
  };

  return (
    <div className="w-full bg-white border-b border-gray-100 px-4 pt-2 pb-3 md:hidden shadow-xs">
      {/* Flipkart-like Search Box */}
      <form onSubmit={handleSearch} className="relative flex items-center">
        <div className="absolute left-3 text-gray-400 pointer-events-none">
          <Search className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search used bikes, brands (e.g. Hunter 350, Duke, R15)..."
          className="w-full bg-gray-100 hover:bg-gray-100/80 focus:bg-white text-xs text-gray-800 placeholder-gray-400 pl-9 pr-20 py-2.5 rounded-xl border border-transparent focus:border-red-500 transition-all font-medium"
        />
        <button
          type="submit"
          className="absolute right-1.5 px-3 py-1 bg-red-600 active:bg-red-700 text-white text-[11px] font-bold rounded-lg uppercase tracking-wider"
        >
          Search
        </button>
      </form>

      {/* Horizontal Category Pill Carousel */}
      <div className="flex items-center gap-2 mt-2.5 overflow-x-auto no-scrollbar scroll-smooth pb-0.5">
        {quickPills.map((pill) => (
          <Link
            key={pill.label}
            href={pill.href}
            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 active:bg-red-50 border border-gray-200/60 rounded-full text-[11px] font-semibold text-gray-700 active:text-red-600 active:border-red-200 transition-all"
          >
            <span>{pill.icon}</span>
            <span>{pill.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
