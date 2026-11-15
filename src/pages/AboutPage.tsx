import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Eye, HeartHandshake, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Intro Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <p className="text-sm font-medium text-[#5C5954]">
            Our Mission · <span className="font-urdu text-base text-[#202020]" dir="rtl" lang="ur">ہمارا مقصد</span>
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#202020] tracking-tight [text-wrap:balance]">
            Building a World Without Communication Barriers
          </h1>
          <p className="text-base sm:text-lg text-[#5C5954] leading-relaxed">
            Ishara exists to make Pakistan Sign Language (PSL) welcoming, accurate, and easy to learn for families, teachers, students, healthcare workers, and workplaces across Pakistan.
          </p>
          <p className="text-base text-[#5C5954] leading-relaxed">
            Sign language is not a silent translation of spoken Urdu or English—it is a rich visual language with its own grammar, facial expressions, and regional heritage. Every lesson on Ishara honors authentic Pakistani Deaf community usage rather than substituting American or European signs.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#202020] text-white text-sm font-medium hover:bg-[#383838] transition-colors"
            >
              Start Learning PSL
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/practice"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#202020]/20 bg-white text-[#202020] text-sm font-medium hover:bg-[#EFE8FA] transition-colors"
            >
              Try Practice Quizzes
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-[2rem] overflow-hidden border border-[#202020]/10 bg-white aspect-[4/3]">
            <img
              src="/src/assets/images/about_psl_community_1794742840717.jpg"
              alt="Pakistani students and educators communicating together using Pakistan Sign Language"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* 4 Pillars */}
      <section className="space-y-8 pt-8 border-t border-[#202020]/10">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#202020]">
            Educational Objectives & Accessibility Commitments
          </h2>
          <p className="text-base text-[#5C5954]">
            Designed from the ground up with accessibility and cultural authenticity at the core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Authentic Pakistan Sign Language',
              body: 'Teaches the two-handed PSL manual alphabet and culturally rooted Pakistani signs—including Assalam-o-Alaikum, Shukriya, and Urdu Nastaliq meanings—never mislabeling foreign sign languages as PSL.',
              bg: 'bg-[#EFE8FA]',
              icon: <ShieldCheck className="w-5 h-5 text-[#202020]" aria-hidden="true" />,
            },
            {
              title: 'Support for Hearing Families & Teachers',
              body: 'Over 90% of deaf children are born to hearing parents. Structured beginner lessons empower families and educators to build warm everyday communication early.',
              bg: 'bg-[#E6F4FA]',
              icon: <HeartHandshake className="w-5 h-5 text-[#202020]" aria-hidden="true" />,
            },
            {
              title: 'Visual-First Accessible Design',
              body: 'High-contrast charcoal typography, keyboard-navigable controls, slow-motion gesture playback, and descriptive visual captions ensure comfortable learning for all.',
              bg: 'bg-[#ECF5EB]',
              icon: <Eye className="w-5 h-5 text-[#202020]" aria-hidden="true" />,
            },
            {
              title: 'Bilingual Urdu & English Literacy',
              body: 'Every core sign pairs clear English explanations with Urdu Nastaliq script and pronunciation cues so learners across Pakistan feel right at home.',
              bg: 'bg-[#FBF0CF]',
              icon: <BookOpen className="w-5 h-5 text-[#202020]" aria-hidden="true" />,
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className={`rounded-3xl p-6 sm:p-8 border border-[#202020]/10 ${pillar.bg} space-y-3`}
            >
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#202020]/10 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-[#202020]">{pillar.title}</h3>
              <p className="text-sm sm:text-base text-[#202020]/80 leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
