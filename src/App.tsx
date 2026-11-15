/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { LearningProvider } from './context/LearningContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { LearnPage } from './pages/LearnPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { LessonDetailPage } from './pages/LessonDetailPage';
import { PracticePage } from './pages/PracticePage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage, SignUpPage } from './pages/AuthPages';
import { DashboardPage } from './pages/DashboardPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LearningProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[#F8F3E9] text-[#202020]">
            <Header />
            <SearchModal />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/learn" element={<LearnPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/categories/:slug" element={<CategoriesPage />} />
                <Route path="/lesson/:slug" element={<LessonDetailPage />} />
                <Route path="/practice" element={<PracticePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LearningProvider>
    </MotionConfig>
  );
}
