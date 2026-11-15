import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, Search, X, User } from 'lucide-react';
import { BrandHandEmblem } from './HandSignVisual';
import { useLearning } from '../context/LearningContext';

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, setSearchOpen } = useLearning();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Learn PSL', to: '/learn' },
    { label: 'Categories', to: '/categories' },
    { label: 'Practice', to: '/practice' },
    { label: 'About Us', to: '/about' },
  ];

  const handleNavClick = (to: string) => {
    setMobileOpen(false);
    navigate(to);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F3E9]/95 backdrop-blur-md border-b border-[#202020]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark + small hand-sign icon */}
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 text-[#202020] font-display font-bold text-xl tracking-tight whitespace-nowrap shrink-0"
        >
          <BrandHandEmblem className="w-8 h-8 shrink-0" />
          <span>Ishara</span>
        </Link>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5C5954]"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative py-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#202020] ${
                  isActive
                    ? 'text-[#202020] font-semibold after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-[#202020] after:rounded-full'
                    : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Right actions (Search + Login / Sign Up or Dashboard) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search PSL signs and categories"
            className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-[#202020]/15 bg-white text-[#202020] hover:bg-[#DCCDF4] transition-colors shrink-0"
          >
            <Search className="w-4 h-4" aria-hidden="true" />
          </button>

          {user ? (
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#202020] text-white text-sm font-medium hover:bg-[#383838] transition-colors whitespace-nowrap shrink-0"
            >
              <User className="w-4 h-4" aria-hidden="true" />
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-full border border-[#202020]/20 bg-white text-[#202020] text-sm font-medium hover:bg-[#EFE8FA] transition-colors whitespace-nowrap shrink-0"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-full bg-[#202020] text-white text-sm font-medium hover:bg-[#383838] transition-colors whitespace-nowrap shrink-0"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search PSL signs"
            className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-[#202020]/15 bg-white text-[#202020]"
          >
            <Search className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-[#202020]/15 bg-white text-[#202020]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-t border-[#202020]/10 px-4 py-5 space-y-2 shadow-lg">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.to}
                type="button"
                onClick={() => handleNavClick(item.to)}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-[#202020] hover:bg-[#F8F3E9] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#202020]/10 flex flex-col sm:flex-row gap-2.5">
            {user ? (
              <button
                type="button"
                onClick={() => handleNavClick('/dashboard')}
                className="w-full py-3 px-4 rounded-full bg-[#202020] text-white text-sm font-medium text-center"
              >
                Open Learner Dashboard
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => handleNavClick('/login')}
                  className="w-full py-3 px-4 rounded-full border border-[#202020]/20 bg-[#F8F3E9] text-[#202020] text-sm font-medium text-center"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('/signup')}
                  className="w-full py-3 px-4 rounded-full bg-[#202020] text-white text-sm font-medium text-center"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
