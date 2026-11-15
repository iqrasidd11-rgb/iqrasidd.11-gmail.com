import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  HeartHandshake,
  Layers,
  Sparkles,
  Users,
} from 'lucide-react';
import { CATEGORIES, PASTEL_CLASSES, PSL_LESSONS } from '../data/pslData';
import { CategoryIcon, GestureStageVisual } from '../components/HandSignVisual';
import { AlphabetExplorer } from '../components/AlphabetExplorer';
import { QuizEngine } from '../components/QuizEngine';
import { useLearning } from '../context/LearningContext';

export const HomePage: React.FC = () => {
  const { completedSlugs } = useLearning();
  const featuredLessons = PSL_LESSONS.filter((l) => l.featured);
  const demoLessons = PSL_LESSONS.slice(0, 6);
  const [demoIndex, setDemoIndex] = useState(0);
  const activeDemo = demoLessons[demoIndex];

  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium text-[#5C5954]">
                Pakistan Sign Language Learning · <span className="font-urdu text-base text-[#202020]" dir="rtl" lang="ur">پاکستان سائن لینگویج</span>
              </p>
              <h1
                className="font-display font-bold text-[#202020] tracking-tight leading-[1.12] [text-wrap:balance]"
                style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.65rem)' }}
              >
                Learn Pakistan Sign Language, Connect Without Limits.
              </h1>
              <p className="text-base sm:text-lg text-[#5C5954] leading-relaxed max-w-xl">
                Discover the power of communication through Pakistan Sign Language. Learn everyday signs, practice gestures, and build meaningful connections with an accessible and interactive learning experience.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                to="/learn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#202020] text-white text-sm sm:text-base font-medium hover:bg-[#383838] transition-colors whitespace-nowrap"
              >
                Start Learning
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/categories"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#202020]/20 bg-white text-[#202020] text-sm sm:text-base font-medium hover:bg-[#EFE8FA] transition-colors whitespace-nowrap"
              >
                Explore Sign Language
              </Link>
            </div>

            <div className="pt-4 border-t border-[#202020]/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#5C5954]">
              <span>10 Structured Categories</span>
              <span aria-hidden="true">·</span>
              <span>Two-Handed PSL A–Z Guide</span>
              <span aria-hidden="true">·</span>
              <span>Urdu & English Meanings</span>
            </div>
          </div>

          {/* Right Column: Hero Photograph & Overlapping Pastel Cards */}
          <div className="lg:col-span-6 relative flex items-center">
            <div className="relative w-full">
              {/* Main Hero Image */}
              <div className="relative rounded-[2rem] overflow-hidden border border-[#202020]/12 bg-white aspect-[4/3] shadow-sm">
                <img
                  src="/src/assets/images/hero_psl_signer_1794742839409.jpg"
                  alt="Pakistani educator smiling warmly while demonstrating Pakistan Sign Language in a sunlit classroom"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Floating Top-Left Label */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="hidden sm:flex items-center gap-2.5 absolute -top-4 -left-3 bg-[#F4D98B] text-[#202020] px-4 py-2.5 rounded-2xl border border-[#202020]/15 shadow-sm"
              >
                <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold whitespace-nowrap">
                  Your Journey Starts Here
                </span>
              </motion.div>

              {/* Floating Bottom-Left Pastel Sign Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-left-5 bg-[#DCCDF4] rounded-2xl p-4 border border-[#202020]/12 shadow-sm max-w-xs"
              >
                <p className="text-xs font-medium text-[#202020]/75">Featured Greeting</p>
                <div className="flex items-center justify-between gap-4 mt-1">
                  <span className="font-display font-bold text-base text-[#202020]">
                    Assalam-o-Alaikum
                  </span>
                  <span className="font-urdu text-base text-[#202020]" dir="rtl" lang="ur">
                    السلام علیکم
                  </span>
                </div>
              </motion.div>

              {/* Floating Top-Right Hand Illustration Card */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="hidden md:block absolute -bottom-6 right-5 w-36 bg-[#C9E5F3] rounded-2xl p-2.5 border border-[#202020]/12 shadow-sm"
              >
                <img
                  src="/src/assets/images/psl_hands_illustration_1794742840547.jpg"
                  alt="Hand-drawn ink illustration of communicating hands"
                  className="w-full h-24 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <p className="text-[11px] font-medium text-[#202020] mt-1.5 text-center">
                  Two-Handed PSL
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEARNING CATEGORIES SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#202020]/8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#202020] tracking-tight [text-wrap:balance]">
              Explore Sign Language Categories
            </h2>
            <p className="text-base text-[#5C5954]">
              Learn useful signs for everyday communication through simple and organized lessons.
            </p>
          </div>
          <Link
            to="/categories"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#202020] hover:underline whitespace-nowrap shrink-0"
          >
            View all 10 categories
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {CATEGORIES.map((category) => {
            const theme = PASTEL_CLASSES[category.pastel];
            return (
              <Link
                key={category.id}
                to={`/categories/${category.slug}`}
                className={`group rounded-3xl p-5 border ${theme.bg} ${theme.border} hover:-translate-y-1 transition-transform duration-200 flex flex-col justify-between gap-4`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-11 h-11 rounded-2xl bg-white/85 border border-[#202020]/10 flex items-center justify-center">
                      <CategoryIcon iconKey={category.iconKey} className="w-6 h-6" />
                    </div>
                    <span className="font-urdu text-sm text-[#202020]/80" dir="rtl" lang="ur">
                      {category.urduTitle}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-base text-[#202020] leading-snug">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#202020]/75 leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#202020]/10 flex items-center justify-between text-xs font-medium text-[#202020]">
                  <span className="tabular-nums">{category.lessonCount} lessons</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. INTERACTIVE LEARNING SECTION (A–Z) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#202020]/8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#202020] tracking-tight [text-wrap:balance]">
              Start Learning Pakistan Sign Language
            </h2>
            <p className="text-base text-[#5C5954]">
              Explore the two-handed PSL manual alphabet from A to Z with step-by-step hand placement guides and completion tracking.
            </p>
          </div>
          <Link
            to="/learn"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#202020] hover:underline whitespace-nowrap shrink-0"
          >
            Open full learning studio
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <AlphabetExplorer />
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#202020]/8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#202020] tracking-tight [text-wrap:balance]">
            Your Journey to Better Communication
          </h2>
          <p className="text-base text-[#5C5954]">
            Three straightforward steps built for visual clarity and steady progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: 'Step 01',
              title: 'Choose a Category',
              body: 'Explore different Pakistan Sign Language categories and select what you want to learn.',
              bg: 'bg-[#C9E5F3]',
              icon: <Layers className="w-6 h-6 text-[#202020]" aria-hidden="true" />,
            },
            {
              step: 'Step 02',
              title: 'Learn the Signs',
              body: 'Watch demonstrations, understand hand movements, and follow easy explanations.',
              bg: 'bg-[#DCCDF4]',
              icon: <Eye className="w-6 h-6 text-[#202020]" aria-hidden="true" />,
            },
            {
              step: 'Step 03',
              title: 'Practice and Improve',
              body: 'Test your knowledge, complete exercises, and improve your communication skills.',
              bg: 'bg-[#D7E9D5]',
              icon: <CheckCircle2 className="w-6 h-6 text-[#202020]" aria-hidden="true" />,
            },
          ].map((item, idx) => (
            <div
              key={item.step}
              className={`rounded-3xl p-7 border border-[#202020]/10 ${item.bg} flex flex-col justify-between gap-6`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-sm text-[#202020] tabular-nums">
                  {item.step}
                </span>
                <div className="w-11 h-11 rounded-2xl bg-white border border-[#202020]/10 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-[#202020]">{item.title}</h3>
                <p className="text-sm text-[#202020]/80 leading-relaxed">{item.body}</p>
              </div>
              <p className="text-xs font-medium text-[#202020]/70">
                0{idx + 1} · Guided learning path
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED LESSONS SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#202020]/8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#202020] tracking-tight [text-wrap:balance]">
              Popular Lessons to Get You Started
            </h2>
            <p className="text-base text-[#5C5954]">
              Begin with essential everyday greetings and polite expressions used across Pakistan.
            </p>
          </div>
          <Link
            to="/categories/greetings"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#202020] hover:underline whitespace-nowrap shrink-0"
          >
            Browse greetings unit
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredLessons.map((lesson) => {
            const theme = PASTEL_CLASSES[lesson.pastel];
            const done = completedSlugs.includes(lesson.slug);
            return (
              <article
                key={lesson.id}
                className="rounded-3xl bg-white border border-[#202020]/10 overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200"
              >
                <div>
                  <div className={`p-5 ${theme.softBg} border-b border-[#202020]/10`}>
                    <GestureStageVisual lesson={lesson} showControls={false} />
                  </div>
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center justify-between gap-2 text-xs text-[#5C5954]">
                      <span>
                        {lesson.difficulty} · {lesson.duration}
                      </span>
                      {done && (
                        <span className="inline-flex items-center gap-1 font-medium text-[#202020]">
                          <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                          Completed
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display font-bold text-lg text-[#202020]">
                        {lesson.title}
                      </h3>
                      <span className="font-urdu text-base text-[#202020] shrink-0" dir="rtl" lang="ur">
                        {lesson.urduTitle}
                      </span>
                    </div>

                    <p className="text-sm text-[#5C5954] leading-relaxed">
                      {lesson.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    to={`/lesson/${lesson.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#202020] text-white text-sm font-medium hover:bg-[#383838] transition-colors"
                  >
                    Start Lesson
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 6. SIGN LANGUAGE DEMONSTRATION SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#202020]/8">
        <div className="space-y-2 max-w-2xl mb-10">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#202020] tracking-tight [text-wrap:balance]">
            See the Sign. Understand the Meaning.
          </h2>
          <p className="text-base text-[#5C5954]">
            Study hand placement, Urdu and English translations, and replay slow-motion visual cues at your own pace.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white border border-[#202020]/10 p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <GestureStageVisual lesson={activeDemo} showControls />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-medium text-[#5C5954] tabular-nums">
                Demonstration {demoIndex + 1} of {demoLessons.length} · {activeDemo.categoryName}
              </p>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#202020]">
                  {activeDemo.title}
                </h3>
                <p className="text-sm text-[#5C5954]">
                  Transliteration: <span className="font-medium text-[#202020]">{activeDemo.transliteration}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#F8F3E9] p-4">
                  <p className="text-xs text-[#5C5954]">Meaning in English</p>
                  <p className="font-display font-semibold text-base text-[#202020] mt-1">
                    {activeDemo.title}
                  </p>
                </div>
                <div className="rounded-2xl bg-[#EFE8FA] p-4">
                  <p className="text-xs text-[#5C5954]">Meaning in Urdu</p>
                  <p className="font-urdu text-xl text-[#202020] mt-1" dir="rtl" lang="ur">
                    {activeDemo.urduTitle}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#E6F4FA] p-4 space-y-1">
                <p className="text-xs font-semibold text-[#202020]">How to Form This Sign</p>
                <p className="text-sm text-[#202020]/85 leading-relaxed">{activeDemo.handshape}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#202020]/10">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setDemoIndex((prev) => (prev - 1 + demoLessons.length) % demoLessons.length)
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#202020]/20 text-sm font-medium text-[#202020] hover:bg-[#F8F3E9] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setDemoIndex((prev) => (prev + 1) % demoLessons.length)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#202020]/20 text-sm font-medium text-[#202020] hover:bg-[#F8F3E9] transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <Link
                to={`/lesson/${activeDemo.slug}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#202020] text-white text-sm font-medium hover:bg-[#383838] transition-colors"
              >
                Full Lesson
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE PRACTICE & QUIZ SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#202020]/8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#202020] tracking-tight [text-wrap:balance]">
              Practice What You Learn
            </h2>
            <p className="text-base text-[#5C5954]">
              Test your visual recognition of PSL handshapes, everyday vocabulary, and alphabet fingerspelling with instant feedback.
            </p>
          </div>
          <Link
            to="/practice"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#202020] hover:underline whitespace-nowrap shrink-0"
          >
            Open full practice hub
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <QuizEngine compact />
      </section>

      {/* 8. WHY CHOOSE OUR PLATFORM SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#202020]/8">
        <div className="space-y-2 max-w-2xl mb-10">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#202020] tracking-tight [text-wrap:balance]">
            Making Communication Accessible to Everyone
          </h2>
          <p className="text-base text-[#5C5954]">
            Designed carefully for deaf learners, hearing families, teachers, and students across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: 'Beginner-Friendly Learning',
              body: 'Clear step-by-step handshape breakdowns with Urdu Nastaliq and English meanings.',
              bg: 'bg-[#EFE8FA]',
              icon: <BookOpen className="w-5 h-5 text-[#202020]" aria-hidden="true" />,
            },
            {
              title: 'Interactive Practice',
              body: 'Visual matching exercises and instant feedback reinforce memory as you study.',
              bg: 'bg-[#E6F4FA]',
              icon: <Sparkles className="w-5 h-5 text-[#202020]" aria-hidden="true" />,
            },
            {
              title: 'Accessible Education',
              body: 'High-contrast typography, keyboard navigation, and captions built for every user.',
              bg: 'bg-[#ECF5EB]',
              icon: <HeartHandshake className="w-5 h-5 text-[#202020]" aria-hidden="true" />,
            },
            {
              title: 'Learn at Your Own Pace',
              body: 'Slow-motion replay controls and saved progress let you revisit signs anytime.',
              bg: 'bg-[#FBF0CF]',
              icon: <Clock className="w-5 h-5 text-[#202020]" aria-hidden="true" />,
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className={`rounded-3xl p-6 border border-[#202020]/10 ${feature.bg} space-y-4`}
            >
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#202020]/10 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-[#202020]">
                {feature.title}
              </h3>
              <p className="text-sm text-[#202020]/80 leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. ABOUT US SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#202020]/8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-[2rem] overflow-hidden border border-[#202020]/10 bg-white aspect-[4/3]">
              <img
                src="/src/assets/images/about_psl_community_1794742840717.jpg"
                alt="Pakistani deaf and hearing students communicating together in Pakistan Sign Language"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#202020] tracking-tight [text-wrap:balance]">
              Building a World Without Communication Barriers
            </h2>
            <p className="text-base text-[#5C5954] leading-relaxed">
              Over one million deaf citizens live across Pakistan, yet everyday public spaces—schools, hospitals, workplaces, and neighborhood markets—still lack basic sign language fluency. Ishara bridges that gap by making authentic Pakistan Sign Language approachable for everyone.
            </p>
            <p className="text-base text-[#5C5954] leading-relaxed">
              Informed by the two-handed manual alphabet and rich Urdu-English lexicon documented by Deaf Reach and Pakistani Deaf educators, our lessons respect genuine regional signing conventions rather than substituting foreign sign systems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl bg-white p-4 border border-[#202020]/10">
                <div className="flex items-center gap-2 font-display font-semibold text-sm text-[#202020]">
                  <Users className="w-4 h-4" aria-hidden="true" />
                  Inclusive Classrooms
                </div>
                <p className="text-xs text-[#5C5954] mt-1 leading-relaxed">
                  Helping parents, classmates, and teachers communicate warmly with deaf learners.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 border border-[#202020]/10">
                <div className="flex items-center gap-2 font-display font-semibold text-sm text-[#202020]">
                  <BookOpen className="w-4 h-4" aria-hidden="true" />
                  Bilingual Clarity
                </div>
                <p className="text-xs text-[#5C5954] mt-1 leading-relaxed">
                  Every vocabulary entry pairs English meaning with clear Urdu Nastaliq script.
                </p>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#202020]/20 bg-white text-sm font-medium text-[#202020] hover:bg-[#EFE8FA] transition-colors"
              >
                Read Our Mission
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CALL-TO-ACTION SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.25rem] bg-[#DCCDF4] border border-[#202020]/12 px-6 py-14 sm:px-12 sm:py-16 overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-5">
            <p className="font-urdu text-xl text-[#202020]" dir="rtl" lang="ur">
              ہر اشارہ رشتوں کو جوڑتا ہے
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#202020] tracking-tight [text-wrap:balance]">
              Every Sign Is a Step Towards Connection.
            </h2>
            <p className="text-base sm:text-lg text-[#202020]/80 max-w-xl mx-auto">
              Start your Pakistan Sign Language learning journey today and make communication more inclusive.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/learn"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#202020] text-white text-sm sm:text-base font-medium hover:bg-[#383838] transition-colors"
              >
                Start Learning for Free
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white text-[#202020] text-sm sm:text-base font-medium border border-[#202020]/15 hover:bg-[#F8F3E9] transition-colors"
              >
                Create Learner Profile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
