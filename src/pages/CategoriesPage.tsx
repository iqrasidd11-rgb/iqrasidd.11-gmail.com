import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CATEGORIES, PASTEL_CLASSES, PSL_ALPHABET, PSL_LESSONS } from '../data/pslData';
import { CategoryIcon } from '../components/HandSignVisual';
import { useLearning } from '../context/LearningContext';

export const CategoriesPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const { completedSlugs } = useLearning();

  const selectedCategory = slug ? CATEGORIES.find((c) => c.slug === slug) : undefined;

  if (selectedCategory) {
    const theme = PASTEL_CLASSES[selectedCategory.pastel];
    const isAlphabet = selectedCategory.slug === 'alphabets';
    const matchingLessons = PSL_LESSONS.filter((l) => l.categorySlug === selectedCategory.slug);

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        <div>
          <Link
            to="/categories"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5C5954] hover:text-[#202020] mb-6"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All Categories
          </Link>

          <div className={`rounded-[2rem] p-6 sm:p-10 border ${theme.bg} ${theme.border} flex flex-col md:flex-row md:items-center justify-between gap-6`}>
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#202020]/10 flex items-center justify-center">
                  <CategoryIcon iconKey={selectedCategory.iconKey} className="w-6 h-6" />
                </div>
                <span className="font-urdu text-xl text-[#202020]" dir="rtl" lang="ur">
                  {selectedCategory.urduTitle}
                </span>
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#202020]">
                {selectedCategory.title}
              </h1>
              <p className="text-base text-[#202020]/80 leading-relaxed">
                {selectedCategory.description}
              </p>
            </div>
            <div className="text-sm font-semibold text-[#202020] tabular-nums shrink-0">
              {selectedCategory.lessonCount} organized lessons
            </div>
          </div>
        </div>

        {/* Category Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/categories/${cat.slug}`}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium border whitespace-nowrap shrink-0 transition-colors ${
                cat.slug === selectedCategory.slug
                  ? 'bg-[#202020] text-white border-[#202020]'
                  : 'bg-white text-[#5C5954] border-[#202020]/15 hover:text-[#202020]'
              }`}
            >
              {cat.title}
            </Link>
          ))}
        </div>

        {isAlphabet ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold text-xl text-[#202020]">
                Two-Handed PSL Manual Alphabet (A–Z)
              </h2>
              <Link
                to="/learn"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#202020] hover:underline"
              >
                Interactive Diagram Studio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {PSL_ALPHABET.map((item) => {
                const done = completedSlugs.includes(item.slug);
                return (
                  <Link
                    key={item.slug}
                    to={`/learn?letter=${item.letter}`}
                    className="rounded-2xl bg-white p-5 border border-[#202020]/10 hover:border-[#202020]/30 transition-colors flex flex-col justify-between gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-2xl text-[#202020]">
                        {item.letter}
                      </span>
                      <span className="font-urdu text-sm text-[#5C5954]" dir="rtl" lang="ur">
                        {item.urduPhonetic}
                      </span>
                    </div>
                    <p className="text-xs text-[#5C5954] leading-relaxed">
                      {item.handshapeSummary}
                    </p>
                    <div className="flex items-center justify-between text-xs font-medium text-[#202020] pt-2 border-t border-[#202020]/10">
                      <span>{item.category}</span>
                      {done ? (
                        <span className="inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                          Done
                        </span>
                      ) : (
                        <span>Practice →</span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="font-display font-bold text-xl text-[#202020]">
              Lessons in {selectedCategory.title}
            </h2>
            {matchingLessons.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {matchingLessons.map((lesson) => {
                  const done = completedSlugs.includes(lesson.slug);
                  return (
                    <Link
                      key={lesson.id}
                      to={`/lesson/${lesson.slug}`}
                      className="rounded-3xl bg-white p-6 border border-[#202020]/10 hover:-translate-y-0.5 transition-transform flex flex-col justify-between gap-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-[#5C5954]">
                          <span>
                            {lesson.difficulty} · {lesson.duration}
                          </span>
                          {done && (
                            <span className="inline-flex items-center gap-1 text-[#202020] font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                              Completed
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
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#202020]">
                        Start Lesson
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-3xl bg-white p-8 border border-[#202020]/10 text-center space-y-3">
                <p className="font-display font-semibold text-lg text-[#202020]">
                  Explore Starter Lessons Across Categories
                </p>
                <p className="text-sm text-[#5C5954]">
                  Jump into our Greetings or A–Z Alphabet lessons while practicing core PSL handshapes.
                </p>
                <Link
                  to="/learn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#202020] text-white text-sm font-medium"
                >
                  Open Learning Studio
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      <div className="max-w-2xl space-y-3">
        <p className="text-sm font-medium text-[#5C5954]">
          Structured Curriculum · <span className="font-urdu text-base text-[#202020]" dir="rtl" lang="ur">موضوعات</span>
        </p>
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#202020] tracking-tight">
          Explore Sign Language Categories
        </h1>
        <p className="text-base sm:text-lg text-[#5C5954]">
          Browse all 10 everyday Pakistan Sign Language modules curated for clear, practical communication.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((category) => {
          const theme = PASTEL_CLASSES[category.pastel];
          return (
            <Link
              key={category.id}
              to={`/categories/${category.slug}`}
              className={`group rounded-3xl p-6 border ${theme.bg} ${theme.border} hover:-translate-y-1 transition-transform flex flex-col justify-between gap-6`}
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/85 border border-[#202020]/10 flex items-center justify-center">
                    <CategoryIcon iconKey={category.iconKey} className="w-6 h-6" />
                  </div>
                  <span className="font-urdu text-base text-[#202020]" dir="rtl" lang="ur">
                    {category.urduTitle}
                  </span>
                </div>
                <h2 className="font-display font-bold text-xl text-[#202020]">
                  {category.title}
                </h2>
                <p className="text-sm text-[#202020]/80 leading-relaxed">
                  {category.description}
                </p>
              </div>
              <div className="pt-4 border-t border-[#202020]/10 flex items-center justify-between text-sm font-semibold text-[#202020]">
                <span className="tabular-nums">{category.lessonCount} lessons</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Explore Category
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
