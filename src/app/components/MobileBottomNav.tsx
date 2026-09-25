'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Bike, PlusCircle, Wrench, Heart } from 'lucide-react';
import { useBikeContext } from '@/context/BikeContext';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { wishlist } = useBikeContext();

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home,
      isActive: pathname === '/',
    },
    {
      label: 'Bikes',
      href: '/used-bikes',
      icon: Bike,
      isActive: pathname.startsWith('/used-bikes'),
    },
    {
      label: 'Sell',
      href: '/sell-bike',
      icon: PlusCircle,
      isActive: pathname === '/sell-bike',
      highlight: true,
    },
    {
      label: 'Workshop',
      href: '/workshop',
      icon: Wrench,
      isActive: pathname === '/workshop' || pathname === '/book-service',
    },
    {
      label: 'Wishlist',
      href: '/wishlist',
      icon: Heart,
      isActive: pathname === '/wishlist',
      badge: wishlist.length > 0 ? wishlist.length : null,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] md:hidden">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2 pb-safe">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`relative flex flex-col items-center justify-center flex-1 h-full py-1 transition-colors ${
                item.isActive ? 'text-red-600' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {item.highlight ? (
                <div className="-mt-5 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 text-white flex items-center justify-center shadow-lg shadow-red-600/30 active:scale-95 transition-transform border-2 border-white">
                    <Icon className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <span className="text-[10px] font-bold mt-1 tracking-tight text-red-600">
                    {item.label}
                  </span>
                </div>
              ) : (
                <>
                  <div className="relative">
                    <Icon className={`w-5 h-5 transition-transform ${item.isActive ? 'scale-110' : ''}`} />
                    {item.badge !== null && item.badge !== undefined && item.badge > 0 && (
                      <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-medium tracking-tight mt-1 ${
                      item.isActive ? 'font-bold text-red-600' : 'text-gray-500'
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.isActive && (
                    <span className="absolute bottom-1 w-1 h-1 bg-red-600 rounded-full" />
                  )}
                </>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
