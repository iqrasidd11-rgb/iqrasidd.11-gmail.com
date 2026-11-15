import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, X } from 'lucide-react';
import { CATEGORIES } from '../data/pslData';
import { BrandHandEmblem } from './HandSignVisual';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#202020] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 font-display font-bold text-xl">
              <BrandHandEmblem className="w-8 h-8" />
              <span>Ishara</span>
            </Link>
            <p className="text-sm text-white/75 leading-relaxed max-w-xs">
              An accessible educational platform helping deaf and hearing communities across Pakistan learn authentic Pakistan Sign Language together.
            </p>
            <p className="font-urdu text-base text-[#F4D98B]" dir="rtl" lang="ur">
              ہم سب مل کر سیکھیں گے
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-sm text-[#DCCDF4] mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/learn" className="hover:text-white transition-colors">
                  Learn PSL (A–Z)
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-white transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link to="/practice" className="hover:text-white transition-colors">
                  Interactive Practice
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition-colors">
                  Learner Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning Categories */}
          <div>
            <h3 className="font-display font-semibold text-sm text-[#C9E5F3] mb-4">
              Learning Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/categories/${cat.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-display font-semibold text-sm text-[#D7E9D5] mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#DCCDF4] mt-0.5 shrink-0" aria-hidden="true" />
                <a href="mailto:hello@isharapsl.org" className="hover:text-white transition-colors">
                  hello@isharapsl.org
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C9E5F3] mt-0.5 shrink-0" aria-hidden="true" />
                <span>+92 (42) 3578-4410</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4D98B] mt-0.5 shrink-0" aria-hidden="true" />
                <span>Gulberg III, Lahore & Clifton Block 4, Karachi, Pakistan</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-2.5">
              {[
                { label: 'Instagram', short: 'IG' },
                { label: 'YouTube', short: 'YT' },
                { label: 'LinkedIn', short: 'IN' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={`#${social.label.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setLegalModal('privacy');
                  }}
                  aria-label={`Ishara on ${social.label}`}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#DCCDF4] hover:text-[#202020] text-xs font-semibold inline-flex items-center justify-center transition-colors"
                >
                  {social.short}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/65">
          <p>© {new Date().getFullYear()} Ishara Pakistan Sign Language Initiative. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms and Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Policy Modal */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white text-[#202020] max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-display font-bold text-xl">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'}
              </h4>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-[#F8F3E9] inline-flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-[#5C5954] leading-relaxed">
              {legalModal === 'privacy'
                ? 'Ishara stores your lesson progress, quiz scores, and learner profile locally in your browser so your study progress remains private on your device. No personal sign-in data is sold or shared with third parties.'
                : 'Ishara educational lessons are provided to support accessible Pakistan Sign Language learning for students, families, and educators. Handshape references follow standard two-handed PSL fingerspelling and community-verified everyday signs.'}
            </p>
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className="px-5 py-2.5 rounded-full bg-[#202020] text-white text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
