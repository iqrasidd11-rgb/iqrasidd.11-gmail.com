import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  LogOut,
  Sparkles,
  User,
} from 'lucide-react';
import { PSL_ALPHABET, PSL_LESSONS } from '../data/pslData';
import { useLearning } from '../context/LearningContext';

export const DashboardPage: React.FC = () => {
  const { user, completedSlugs, recentSlugs, quizHistory, loginDemo, logout } = useLearning();
  const navigate = useNavigate();

  const totalLearnable = PSL_ALPHABET.length + PSL_LESSONS.length;
  const completedCount = completedSlugs.length;
  const progressPercentage = Math.min(100, Math.round((completedCount / totalLearnable) * 100));

  const currentLevel = useMemo(() => {
    if (completedCount >= 20) return 'Conversational Explorer';
    if (completedCount >= 10) return 'Confident Beginner';
    return 'Starter Foundation';
  }, [completedCount]);

  const averageQuizPct = useMemo(() => {
    if (quizHistory.length === 0) return 0;
    const sum = quizHistory.reduce((acc, q) => acc + (q.score / q.total) * 100, 0);
    return Math.round(sum / quizHistory.length);
  }, [quizHistory]);

  const nextRecommendedLesson = useMemo(() => {
    return PSL_LESSONS.find((l) => !completedSlugs.includes(l.slug)) || PSL_LESSONS[0];
  }, [completedSlugs]);

  const recentLessonItems = useMemo(() => {
    return recentSlugs
      .map((slug) => PSL_LESSONS.find((l) => l.slug === slug))
      .filter((item): item is NonNullable<typeof item> => Boolean(item));
  }, [recentSlugs]);

  const badges = [
    {
      id: 'first-sign',
      title: 'First Sign Learned',
      requirement: 'Complete at least 1 lesson',
      earned: completedCount >= 1,
      bg: 'bg-[#EFE8FA]',
    },
    {
      id: 'vowel-master',
      title: 'PSL Vowel Starter',
      requirement: 'Learn 2 or more alphabet letters',
      earned: PSL_ALPHABET.filter((a) => completedSlugs.includes(a.slug)).length >= 2,
      bg: 'bg-[#E6F4FA]',
    },
    {
      id: 'quiz-taker',
      title: 'Active Practicer',
      requirement: 'Complete a practice quiz',
      earned: quizHistory.length >= 1,
      bg: 'bg-[#ECF5EB]',
    },
    {
      id: 'greeting-pro',
      title: 'Warm Communicator',
      requirement: 'Complete 5 total signs',
      earned: completedCount >= 5,
      bg: 'bg-[#FBF0CF]',
    },
  ];

  if (!user) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="bg-white rounded-[2rem] border border-[#202020]/10 p-8 sm:p-10 space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-[#DCCDF4] border border-[#202020]/10 mx-auto flex items-center justify-center">
            <User className="w-7 h-7 text-[#202020]" aria-hidden="true" />
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#202020]">
            Sign in to View Your Progress Dashboard
          </h1>
          <p className="text-sm sm:text-base text-[#5C5954] leading-relaxed">
            Log in or start with our demo learner profile to see completed signs, quiz scores, and achievement badges.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/login"
              className="px-6 py-3 rounded-full bg-[#202020] text-white text-sm font-medium hover:bg-[#383838] transition-colors"
            >
              Go to Login
            </Link>
            <button
              type="button"
              onClick={loginDemo}
              className="px-6 py-3 rounded-full bg-[#DCCDF4] text-[#202020] text-sm font-semibold border border-[#202020]/15 hover:bg-[#cfbcea] transition-colors"
            >
              Try Demo Profile
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      {/* Welcome Header & Profile Card */}
      <div className="rounded-[2rem] bg-white border border-[#202020]/10 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#DCCDF4] border border-[#202020]/15 flex items-center justify-center font-display font-bold text-2xl text-[#202020] shrink-0">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="space-y-1">
            <p className="text-xs font-medium text-[#5C5954]">
              Khush Aamdeed · <span className="font-urdu text-sm text-[#202020]" dir="rtl" lang="ur">خوش آمدید</span>
            </p>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#202020]">
              Welcome back, {user.name}
            </h1>
            <p className="text-sm text-[#5C5954]">
              {user.email} · {user.city} · Level: <strong className="text-[#202020]">{currentLevel}</strong>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to={`/lesson/${nextRecommendedLesson.slug}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#202020] text-white text-sm font-medium hover:bg-[#383838] transition-colors whitespace-nowrap"
          >
            Continue Learning
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-[#202020]/20 bg-[#F8F3E9] text-sm font-medium text-[#202020] hover:bg-[#F4D4D8] transition-colors whitespace-nowrap"
          >
            <LogOut className="w-4 h-4" aria-hidden="true" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="rounded-3xl bg-[#EFE8FA] border border-[#C6B2E8] p-6 space-y-2">
          <p className="text-xs font-semibold text-[#202020]/75">Overall Progress</p>
          <p className="font-display font-bold text-3xl text-[#202020] tabular-nums">
            {progressPercentage}%
          </p>
          <div className="h-2 w-full rounded-full bg-white/80 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#202020]"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="rounded-3xl bg-[#E6F4FA] border border-[#A9D2E6] p-6 space-y-2">
          <p className="text-xs font-semibold text-[#202020]/75">Completed Lessons</p>
          <p className="font-display font-bold text-3xl text-[#202020] tabular-nums">
            {completedCount} <span className="text-base font-medium text-[#5C5954]">/ {totalLearnable}</span>
          </p>
          <p className="text-xs text-[#202020]/75">Alphabet letters & core signs</p>
        </div>

        <div className="rounded-3xl bg-[#ECF5EB] border border-[#BBD6B8] p-6 space-y-2">
          <p className="text-xs font-semibold text-[#202020]/75">Average Quiz Score</p>
          <p className="font-display font-bold text-3xl text-[#202020] tabular-nums">
            {averageQuizPct}%
          </p>
          <p className="text-xs text-[#202020]/75 tabular-nums">
            Across {quizHistory.length} practice {quizHistory.length === 1 ? 'session' : 'sessions'}
          </p>
        </div>

        <div className="rounded-3xl bg-[#FBF0CF] border border-[#E5C263] p-6 space-y-2">
          <p className="text-xs font-semibold text-[#202020]/75">Current Learning Level</p>
          <p className="font-display font-bold text-xl text-[#202020] pt-1">{currentLevel}</p>
          <p className="text-xs text-[#202020]/75">Next up: {nextRecommendedLesson.title}</p>
        </div>
      </div>

      {/* Main Grid: Recently Viewed + Quiz Scores & Badges */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recently Viewed & Completed */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl bg-white border border-[#202020]/10 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#202020]" aria-hidden="true" />
                <h2 className="font-display font-bold text-xl text-[#202020]">
                  Recently Viewed Lessons
                </h2>
              </div>
              <Link to="/categories" className="text-xs font-semibold text-[#202020] hover:underline">
                Browse all
              </Link>
            </div>

            {recentLessonItems.length > 0 ? (
              <div className="space-y-3">
                {recentLessonItems.map((lesson) => {
                  const done = completedSlugs.includes(lesson.slug);
                  return (
                    <Link
                      key={lesson.id}
                      to={`/lesson/${lesson.slug}`}
                      className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-[#F8F3E9] hover:bg-[#EFE8FA]/70 transition-colors"
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-sm sm:text-base text-[#202020] truncate">
                          {lesson.title}
                        </p>
                        <p className="text-xs text-[#5C5954]">
                          {lesson.categoryName} · {lesson.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="font-urdu text-base text-[#202020]" dir="rtl" lang="ur">
                          {lesson.urduTitle}
                        </span>
                        {done && (
                          <CheckCircle2 className="w-4 h-4 text-[#202020]" aria-label="Completed" />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-[#5C5954]">
                Open any lesson from the curriculum to track your recent studies here.
              </p>
            )}
          </div>

          {/* Quiz History */}
          <div className="rounded-3xl bg-white border border-[#202020]/10 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#202020]" aria-hidden="true" />
                <h2 className="font-display font-bold text-xl text-[#202020]">Quiz Scores</h2>
              </div>
              <Link to="/practice" className="text-xs font-semibold text-[#202020] hover:underline">
                Take a quiz →
              </Link>
            </div>
            <div className="space-y-2.5">
              {quizHistory.map((q) => (
                <div
                  key={q.id}
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-[#202020]/10 bg-[#F8F3E9]/50"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#202020]">{q.modeLabel}</p>
                    <p className="text-xs text-[#5C5954]">{q.date}</p>
                  </div>
                  <span className="font-display font-bold text-base text-[#202020] tabular-nums">
                    {q.score} / {q.total}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-white border border-[#202020]/10 p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#202020]" aria-hidden="true" />
              <h2 className="font-display font-bold text-xl text-[#202020]">Achievement Badges</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`rounded-2xl p-4 border transition-opacity ${
                    badge.earned
                      ? `${badge.bg} border-[#202020]/15`
                      : 'bg-[#F8F3E9]/60 border-[#202020]/10 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display font-semibold text-sm text-[#202020]">
                      {badge.title}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#202020]">
                      {badge.earned ? (
                        <>
                          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                          Earned
                        </>
                      ) : (
                        'Locked'
                      )}
                    </span>
                  </div>
                  <p className="text-xs text-[#5C5954] mt-1">{badge.requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
