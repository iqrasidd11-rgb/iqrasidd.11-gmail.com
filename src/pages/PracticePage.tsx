import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, ArrowRight } from 'lucide-react';
import { QuizEngine } from '../components/QuizEngine';
import { useLearning } from '../context/LearningContext';

export const PracticePage: React.FC = () => {
  const { quizHistory } = useLearning();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-medium text-[#5C5954]">
            Interactive Exercises · <span className="font-urdu text-base text-[#202020]" dir="rtl" lang="ur">مشق اور امتحان</span>
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#202020] tracking-tight">
            Practice What You Learn
          </h1>
          <p className="text-base sm:text-lg text-[#5C5954]">
            Choose a focused quiz mode below to test alphabet recognition, handshape accuracy, and everyday Urdu-English sign meanings.
          </p>
        </div>

        <Link
          to="/learn"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#202020]/20 bg-white text-sm font-medium text-[#202020] hover:bg-[#EFE8FA] transition-colors whitespace-nowrap shrink-0"
        >
          <BookOpen className="w-4 h-4" aria-hidden="true" />
          Review Lessons
        </Link>
      </div>

      <QuizEngine />

      {/* Recent Quiz History */}
      <section className="rounded-3xl bg-white border border-[#202020]/10 p-6 sm:p-8 space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-[#202020]" aria-hidden="true" />
            <h2 className="font-display font-bold text-xl text-[#202020]">
              Recent Practice Scores
            </h2>
          </div>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#202020] hover:underline"
          >
            View Learner Dashboard
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quizHistory.map((item) => {
            const pct = Math.round((item.score / item.total) * 100);
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#F8F3E9] p-4 border border-[#202020]/10 flex items-center justify-between gap-3"
              >
                <div>
                  <p className="font-semibold text-sm text-[#202020]">{item.modeLabel}</p>
                  <p className="text-xs text-[#5C5954] mt-0.5">{item.date}</p>
                </div>
                <div className="text-right tabular-nums">
                  <p className="font-display font-bold text-lg text-[#202020]">
                    {item.score}/{item.total}
                  </p>
                  <p className="text-xs text-[#5C5954]">{pct}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
