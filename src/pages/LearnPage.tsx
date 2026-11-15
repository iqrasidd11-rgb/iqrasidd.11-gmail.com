import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import { AlphabetExplorer } from '../components/AlphabetExplorer';
import { PSL_LESSONS, PASTEL_CLASSES } from '../data/pslData';
import { useLearning } from '../context/LearningContext';

export const LearnPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialLetter = searchParams.get('letter') || 'A';
  const { completedSlugs } = useLearning();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
      <div className="max-w-3xl space-y-3">
        <p className="text-sm font-medium text-[#5C5954]">
          Interactive Studio · <span className="font-urdu text-base text-[#202020]" dir="rtl" lang="ur">سیکھنے کا مرکز</span>
        </p>
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#202020] tracking-tight [text-wrap:balance]">
          Learn Pakistan Sign Language Step by Step
        </h1>
        <p className="text-base sm:text-lg text-[#5C5954] leading-relaxed">
          Master the two-handed PSL manual alphabet from A to Z, then continue into essential everyday greetings, family signs, and conversation phrases.
        </p>
      </div>

      {/* Authentic PSL Note */}
      <div className="rounded-3xl bg-[#E6F4FA] border border-[#A9D2E6] p-5 sm:p-6 flex items-start gap-4">
        <Info className="w-5 h-5 text-[#202020] shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1 text-sm text-[#202020]">
          <p className="font-semibold">About Two-Handed PSL & Urdu Huruf-e-Tahajji</p>
          <p className="text-[#202020]/80 leading-relaxed">
            In Pakistan Sign Language, Latin letters (A–Z) are signed using a two-handed manual system where your non-dominant hand serves as the base and your dominant hand forms the pointer or letter shape. Alongside this, PSL includes dedicated handshapes for Urdu letters (حروفِ تہجی) and thousands of standardized vocabulary signs documented by Pakistani Deaf educators.
          </p>
        </div>
      </div>

      {/* Interactive A-Z Explorer */}
      <AlphabetExplorer initialLetter={initialLetter} />

      {/* Core Beginner Vocabulary Path */}
      <section className="space-y-6 pt-6 border-t border-[#202020]/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#202020]">
              Core Beginner Sign Lessons
            </h2>
            <p className="text-sm sm:text-base text-[#5C5954] mt-1">
              Open any lesson below for animated gesture practice, Urdu Nastaliq meaning, and cultural guidance.
            </p>
          </div>
          <Link
            to="/categories"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#202020] hover:underline whitespace-nowrap"
          >
            All 10 categories
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PSL_LESSONS.slice(0, 9).map((lesson) => {
            const theme = PASTEL_CLASSES[lesson.pastel];
            const isDone = completedSlugs.includes(lesson.slug);
            return (
              <Link
                key={lesson.id}
                to={`/lesson/${lesson.slug}`}
                className={`rounded-3xl p-5 border ${theme.softBg} ${theme.border} hover:-translate-y-0.5 transition-transform flex flex-col justify-between gap-4`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#5C5954]">
                    <span>
                      {lesson.categoryName} · {lesson.duration}
                    </span>
                    {isDone && (
                      <span className="inline-flex items-center gap-1 text-[#202020] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                        Done
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display font-bold text-lg text-[#202020]">
                      {lesson.title}
                    </h3>
                    <span className="font-urdu text-base text-[#202020]" dir="rtl" lang="ur">
                      {lesson.urduTitle}
                    </span>
                  </div>
                  <p className="text-sm text-[#5C5954] leading-relaxed">
                    {lesson.shortDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-[#202020] pt-2 border-t border-[#202020]/10">
                  <span>{lesson.difficulty}</span>
                  <span className="inline-flex items-center gap-1">
                    Open Lesson
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};
