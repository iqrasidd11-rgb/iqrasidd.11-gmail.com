import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search, X } from 'lucide-react';
import { CATEGORIES, PSL_ALPHABET, PSL_LESSONS } from '../data/pslData';
import { useLearning } from '../context/LearningContext';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setSearchOpen } = useLearning();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 30);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isSearchOpen, setSearchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        lessons: PSL_LESSONS.slice(0, 5),
        categories: CATEGORIES.slice(0, 4),
        letters: PSL_ALPHABET.slice(0, 5),
      };
    }

    return {
      lessons: PSL_LESSONS.filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.urduTitle.includes(q) ||
          l.transliteration.toLowerCase().includes(q) ||
          l.categoryName.toLowerCase().includes(q)
      ).slice(0, 6),
      categories: CATEGORIES.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.urduTitle.includes(q) ||
          c.description.toLowerCase().includes(q)
      ).slice(0, 4),
      letters: PSL_ALPHABET.filter(
        (a) =>
          `letter ${a.letter}`.toLowerCase().includes(q) ||
          a.letter.toLowerCase() === q ||
          a.handshapeSummary.toLowerCase().includes(q)
      ).slice(0, 6),
    };
  }, [query]);

  if (!isSearchOpen) return null;

  const goTo = (path: string) => {
    setSearchOpen(false);
    navigate(path);
  };

  const hasResults =
    results.lessons.length > 0 || results.categories.length > 0 || results.letters.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#202020]/50 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Search Pakistan Sign Language lessons"
      onClick={() => setSearchOpen(false)}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl border border-[#202020]/15 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#202020]/10">
          <Search className="w-5 h-5 text-[#5C5954] shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search signs, Urdu words, or letters (e.g., Shukriya, Hello, A)..."
            className="w-full text-sm sm:text-base text-[#202020] placeholder-[#5C5954]/70 focus:outline-none bg-transparent"
          />
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
            className="w-9 h-9 rounded-full hover:bg-[#F8F3E9] inline-flex items-center justify-center text-[#202020]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-5 space-y-6">
          {!hasResults ? (
            <div className="text-center py-8">
              <p className="font-display font-semibold text-[#202020]">No matching signs found</p>
              <p className="text-sm text-[#5C5954] mt-1">
                Try searching for "Thank You", "Assalam-o-Alaikum", "Family", or a letter from A to Z.
              </p>
            </div>
          ) : (
            <>
              {results.lessons.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-[#5C5954] mb-2.5">
                    {query ? 'Matching Lessons' : 'Popular Lessons'}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {results.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        type="button"
                        onClick={() => goTo(`/lesson/${lesson.slug}`)}
                        className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#F8F3E9] hover:bg-[#DCCDF4]/60 text-left transition-colors"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-[#202020] truncate">
                            {lesson.title}
                          </p>
                          <p className="text-xs text-[#5C5954] truncate">
                            {lesson.categoryName} · {lesson.transliteration}
                          </p>
                        </div>
                        <span className="font-urdu text-sm text-[#202020] shrink-0" dir="rtl" lang="ur">
                          {lesson.urduTitle}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {results.categories.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-[#5C5954] mb-2.5">Categories</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {results.categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => goTo(`/categories/${cat.slug}`)}
                        className="flex items-center justify-between gap-3 p-3 rounded-2xl border border-[#202020]/10 hover:bg-[#C9E5F3]/50 text-left transition-colors"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#202020]">{cat.title}</p>
                          <p className="text-xs text-[#5C5954]">{cat.lessonCount} lessons</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#202020] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {results.letters.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-[#5C5954] mb-2.5">
                    Two-Handed PSL Alphabet
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {results.letters.map((item) => (
                      <button
                        key={item.slug}
                        type="button"
                        onClick={() => goTo(`/learn?letter=${item.letter}`)}
                        className="px-3.5 py-2 rounded-xl bg-[#F4D98B]/50 hover:bg-[#F4D98B] text-sm font-semibold text-[#202020] transition-colors"
                      >
                        Letter {item.letter}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
