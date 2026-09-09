'use client';

import React, { useState } from 'react';
import { Tag, CheckCircle2, ArrowRight, Upload, X, Bike, Camera, Gauge, FileText, Check } from 'lucide-react';

export default function SellBikeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brand: 'Royal Enfield',
    model: '',
    year: '2022',
    kilometers: '',
    registration: '',
    ownership: '1st Owner',
    expectedPrice: '',
    name: '',
    phone: '',
  });

  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages((prev) => [...prev, ...filesArray]);
      const newPreviews = filesArray.map((file) => URL.createObjectURL(file));
      setImagePreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div className="bg-red-50/60 rounded-3xl p-6 sm:p-10 border border-red-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" /> Instant Bike Selling
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 tracking-tight leading-tight">
              Want to <span className="text-red-600">Sell Your Bike?</span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Get a fair market valuation for your motorcycle without the hassle of middleman calls or haggling. Immediate bank transfer upon inspection.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs font-bold text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Instant Online Valuation in 60 Seconds</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Free Doorstep Inspection at Your Convenience</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Hassle-Free RC Transfer Responsibility</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Brand *
                    </label>
                    <select
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="Royal Enfield">Royal Enfield</option>
                      <option value="Yamaha">Yamaha</option>
                      <option value="Honda">Honda</option>
                      <option value="KTM">KTM</option>
                      <option value="TVS">TVS</option>
                      <option value="Bajaj">Bajaj</option>
                      <option value="Hero">Hero</option>
                      <option value="Suzuki">Suzuki</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Model & Variant *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Classic 350 Stealth Black"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Year *
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="2022"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Kilometers *
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="12000"
                      value={formData.kilometers}
                      onChange={(e) => setFormData({ ...formData, kilometers: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Expected Price (₹)
                    </label>
                    <input
                      type="number"
                      placeholder="150000"
                      value={formData.expectedPrice}
                      onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Anand Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Automotive Photo Studio Upload UI */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold uppercase text-gray-700">
                      Upload Bike Photos <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">
                      {images.length > 0 ? `${images.length} Photo(s) Attached` : 'Studio Upload Ready'}
                    </span>
                  </div>

                  {/* 4 Dedicated Photo Slots */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { label: 'Front View', icon: Bike, desc: 'Headlight & Tire' },
                      { label: 'Side Profile', icon: Camera, desc: 'Body & Exhaust' },
                      { label: 'Odometer', icon: Gauge, desc: 'Speedo KM' },
                      { label: 'RC Document', icon: FileText, desc: 'RC Book/Card' },
                    ].map((slot, slotIdx) => {
                      const hasImage = imagePreviews[slotIdx];
                      const IconComponent = slot.icon;

                      return (
                        <div
                          key={slotIdx}
                          className="relative aspect-square rounded-2xl border-2 border-gray-100 bg-gray-50 hover:bg-gray-100/80 hover:border-red-500/50 transition-all duration-300 overflow-hidden group flex flex-col items-center justify-center text-center p-3 cursor-pointer shadow-sm"
                        >
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                const file = e.target.files[0];
                                const preview = URL.createObjectURL(file);
                                const newImages = [...images];
                                const newPreviews = [...imagePreviews];
                                newImages[slotIdx] = file;
                                newPreviews[slotIdx] = preview;
                                setImages(newImages);
                                setImagePreviews(newPreviews);
                              }
                            }}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                          />

                          {hasImage ? (
                            <>
                              <img
                                src={hasImage}
                                alt={slot.label}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                              <div className="absolute bottom-2 left-2 right-2 text-left z-10">
                                <span className="text-[10px] font-bold text-white block leading-tight flex items-center gap-1">
                                  <Check className="w-3 h-3 text-emerald-400" /> {slot.label}
                                </span>
                                <span className="text-[8px] text-gray-300 block">Uploaded</span>
                              </div>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeImage(slotIdx);
                                }}
                                className="absolute top-2 right-2 z-30 p-1 bg-black/60 hover:bg-red-600 text-white rounded-full backdrop-blur-md transition-colors"
                                title="Delete Photo"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </>
                          ) : (
                            <div className="flex flex-col items-center justify-center space-y-1">
                              <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 text-gray-700 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300 shadow-sm">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <span className="text-[11px] font-bold text-gray-800 leading-tight">
                                {slot.label}
                              </span>
                              <span className="text-[9px] text-gray-400 font-medium hidden sm:block">
                                {slot.desc}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* General Bulk Upload Trigger */}
                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-gray-500 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100">
                    <span className="flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-red-600" />
                      Add extra angles or documents anytime
                    </span>
                    <label className="text-red-600 font-bold hover:underline cursor-pointer">
                      + Add Bulk Photos
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 mt-2"
                >
                  Get Free Valuation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading font-black text-gray-900 mb-1">
                  Valuation Request Received!
                </h3>
                <p className="text-xs text-gray-600 mb-4">
                  Our evaluation team will review your bike details and call you back within 30 minutes with an offer.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-gray-900 text-white text-xs font-bold rounded-xl"
                >
                  Submit Another Bike
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
