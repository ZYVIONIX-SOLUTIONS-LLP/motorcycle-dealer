'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  badge: string;
  title: string;
  highlightTitle?: string;
  description: string;
  imageSrc: string;
  breadcrumbs: { name: string; href: string }[];
  stats?: { label: string; value: string }[];
}

export default function PageHero({
  badge,
  title,
  highlightTitle,
  description,
  imageSrc,
  breadcrumbs,
  stats,
}: PageHeroProps) {
  return (
    <div className="relative bg-gray-950 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-gray-800">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-center opacity-40 scale-105 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              <Link
                href={crumb.href}
                className={
                  idx === breadcrumbs.length - 1
                    ? 'text-red-500 font-bold pointer-events-none'
                    : 'hover:text-white transition-colors'
                }
              >
                {crumb.name}
              </Link>
            </React.Fragment>
          ))}
        </nav>

        {/* Content Box */}
        <div className="max-w-2xl space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md"
          >
            {badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight"
          >
            {title} {highlightTitle && <span className="text-red-600">{highlightTitle}</span>}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-300 leading-relaxed"
          >
            {description}
          </motion.p>

          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-800/80"
            >
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-xl sm:text-2xl font-heading font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
