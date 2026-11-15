import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Hand,
  Smile,
} from 'lucide-react';
import { PSL_LESSONS } from '../data/pslData';
import { GestureStageVisual } from '../components/HandSignVisual';
import { useLearning } from '../context/LearningContext';

export const LessonDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { completedSlugs, toggleComplete, recordView } = useLearning();

  const lessonIndex = PSL_LESSONS.findIndex((l) => l.slug === slug);
  const lesson = lessonIndex >= 0 ? PSL_LESSONS[lessonIndex] : PSL_LESSONS[0];

  useEffect(() => {
    if (lesson) {
      recordView(lesson.slug);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson?.slug]);

  const isCompleted = completedSlugs.includes(lesson.slug);
  const prevLesson = PSL_LESSONS[(lessonIndex - 1 + PSL_LESSONS.length) % PSL_LESSONS.length];
  const nextLesson = PSL_LESSONS[(lessonIndex + 1) % PSL_LESSONS.length];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      {/* Breadcrumb & Progress Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          to={`/categories/${lesson.categorySlug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5C5954] hover:text-[#202020]"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to {lesson.categoryName}
        </Link>

        <span className="text-xs sm:text-sm font-medium text-[#5C5954] tabular-nums">
          Lesson {Math.max(1, lessonIndex + 1)} of {PSL_LESSONS.length} · {lesson.difficulty} · {lesson.duration}
        </span>
      </div>

      {/* Main Lesson Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <GestureStageVisual lesson={lesson} showControls />

          {/* Step-by-step guide */}
          <div className="rounded-3xl bg-white border border-[#202020]/10 p-6 sm:p-7 space-y-4">
            <h2 className="font-display font-bold text-xl text-[#202020]">
              Step-by-Step Formation
            </h2>
            <ol className="space-y-3">
              {lesson.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-[#EFE8FA] border border-[#C6B2E8] text-xs font-bold text-[#202020] flex items-center justify-center shrink-0 tabular-nums">
                    {i + 1}
                  </span>
                  <p className="text-sm sm:text-base text-[#202020]/85 leading-relaxed pt-0.5">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right Details Column */}
        <div className="lg:col-span-5 space-y-5">
          <div className="rounded-3xl bg-white border border-[#202020]/10 p-6 sm:p-7 space-y-5">
            <div className="space-y-2">
              <p className="text-xs font-medium text-[#5C5954]">{lesson.categoryName}</p>
              <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#202020]">
                {lesson.title}
              </h1>
              <div className="flex items-center justify-between gap-3 pt-1">
                <span className="text-sm text-[#5C5954]">
                  Pronunciation: <strong className="text-[#202020]">{lesson.transliteration}</strong>
                </span>
                <span className="font-urdu text-2xl text-[#202020]" dir="rtl" lang="ur">
                  {lesson.urduTitle}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#5C5954] leading-relaxed">
              {lesson.shortDescription}
            </p>

            <button
              type="button"
              onClick={() => toggleComplete(lesson.slug)}
              className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-sm font-semibold border transition-colors ${
                isCompleted
                  ? 'bg-[#D7E9D5] text-[#202020] border-[#202020]/20'
                  : 'bg-[#202020] text-white border-[#202020] hover:bg-[#383838]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              {isCompleted ? 'Completed — Click to Undo' : 'Mark as Completed'}
            </button>
          </div>

          <div className="rounded-3xl bg-[#E6F4FA] border border-[#A9D2E6] p-5 space-y-2">
            <div className="flex items-center gap-2 font-display font-semibold text-sm text-[#202020]">
              <Hand className="w-4 h-4" aria-hidden="true" />
              Handshape & Position
            </div>
            <p className="text-sm text-[#202020]/85 leading-relaxed">{lesson.handshape}</p>
          </div>

          <div className="rounded-3xl bg-[#FBF0CF] border border-[#E5C263] p-5 space-y-2">
            <div className="flex items-center gap-2 font-display font-semibold text-sm text-[#202020]">
              <Smile className="w-4 h-4" aria-hidden="true" />
              Facial Expression (Grammar)
            </div>
            <p className="text-sm text-[#202020]/85 leading-relaxed">{lesson.facialExpression}</p>
          </div>

          <div className="rounded-3xl bg-[#EFE8FA] border border-[#C6B2E8] p-5 space-y-2">
            <div className="flex items-center gap-2 font-display font-semibold text-sm text-[#202020]">
              <Compass className="w-4 h-4" aria-hidden="true" />
              Cultural Context in Pakistan
            </div>
            <p className="text-sm text-[#202020]/85 leading-relaxed">{lesson.culturalNote}</p>
          </div>
        </div>
      </div>

      {/* Previous & Next Lesson Controls */}
      <div className="pt-6 border-t border-[#202020]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => navigate(`/lesson/${prevLesson.slug}`)}
          className="inline-flex items-center justify-between sm:justify-start gap-3 px-5 py-3.5 rounded-2xl bg-white border border-[#202020]/15 hover:bg-[#F8F3E9] transition-colors text-left"
        >
          <ChevronLeft className="w-4 h-4 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-[11px] text-[#5C5954]">Previous Lesson</p>
            <p className="text-sm font-semibold text-[#202020]">{prevLesson.title}</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => navigate(`/lesson/${nextLesson.slug}`)}
          className="inline-flex items-center justify-between sm:justify-end gap-3 px-5 py-3.5 rounded-2xl bg-[#202020] text-white hover:bg-[#383838] transition-colors text-right"
        >
          <div>
            <p className="text-[11px] text-white/75">Next Lesson</p>
            <p className="text-sm font-semibold">{nextLesson.title}</p>
          </div>
          <ChevronRight className="w-4 h-4 shrink-0" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
