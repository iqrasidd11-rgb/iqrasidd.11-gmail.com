import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Hand,
} from 'lucide-react';
import { PSL_ALPHABET } from '../data/pslData';
import { AlphabetHandDiagram } from './HandSignVisual';
import { useLearning } from '../context/LearningContext';

interface AlphabetExplorerProps {
  initialLetter?: string;
}

export const AlphabetExplorer: React.FC<AlphabetExplorerProps> = ({ initialLetter = 'A' }) => {
  const { completedSlugs, toggleComplete } = useLearning();
  const [filterType, setFilterType] = useState<'All' | 'Vowel' | 'Consonant'>('All');

  const initialIndex = useMemo(() => {
    const idx = PSL_ALPHABET.findIndex(
      (item) => item.letter.toUpperCase() === initialLetter.toUpperCase()
    );
    return idx >= 0 ? idx : 0;
  }, [initialLetter]);

  const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex);

  const visibleLetters = useMemo(() => {
    if (filterType === 'All') return PSL_ALPHABET;
    return PSL_ALPHABET.filter((item) => item.category === filterType);
  }, [filterType]);

  const currentSign = PSL_ALPHABET[selectedIndex] ?? PSL_ALPHABET[0];
  const isCompleted = completedSlugs.includes(currentSign.slug);

  const completedAlphabetCount = useMemo(
    () => PSL_ALPHABET.filter((item) => completedSlugs.includes(item.slug)).length,
    [completedSlugs]
  );

  const progressPct = Math.round((completedAlphabetCount / PSL_ALPHABET.length) * 100);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + PSL_ALPHABET.length) % PSL_ALPHABET.length);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % PSL_ALPHABET.length);
  };

  return (
    <div className="space-y-6">
      {/* Top Progress & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white rounded-2xl p-4 sm:p-5 border border-[#202020]/10">
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-[#202020]">
            <span>Two-Handed PSL Alphabet Progress</span>
            <span className="tabular-nums text-[#5C5954]">
              {completedAlphabetCount} / {PSL_ALPHABET.length} letters ({progressPct}%)
            </span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-[#F8F3E9] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#202020] transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-1 p-1 bg-[#F8F3E9] rounded-xl self-start md:self-auto">
          {(['All', 'Vowel', 'Consonant'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilterType(tab)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filterType === tab
                  ? 'bg-white text-[#202020] shadow-xs'
                  : 'text-[#5C5954] hover:text-[#202020]'
              }`}
            >
              {tab === 'All' ? 'All (26)' : tab === 'Vowel' ? 'Vowels (5)' : 'Consonants (21)'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Split Learning Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Letter Grid Selector */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-5 sm:p-6 border border-[#202020]/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-base text-[#202020]">
                Select a Letter (A–Z)
              </h3>
              <span className="text-xs text-[#5C5954]">Two-handed fingerspelling</span>
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-7 lg:grid-cols-5 gap-2">
              {visibleLetters.map((item) => {
                const idx = PSL_ALPHABET.findIndex((x) => x.letter === item.letter);
                const active = item.letter === currentSign.letter;
                const done = completedSlugs.includes(item.slug);

                return (
                  <button
                    key={item.letter}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    aria-pressed={active}
                    className={`relative h-12 rounded-xl font-display font-semibold text-base transition-all border flex items-center justify-center ${
                      active
                        ? 'bg-[#202020] text-white border-[#202020] scale-[1.03]'
                        : done
                        ? 'bg-[#D7E9D5] text-[#202020] border-[#BBD6B8] hover:bg-[#c8e0c5]'
                        : item.category === 'Vowel'
                        ? 'bg-[#EFE8FA] text-[#202020] border-[#DCCDF4] hover:bg-[#DCCDF4]'
                        : 'bg-[#F8F3E9] text-[#202020] border-[#202020]/10 hover:bg-[#C9E5F3]/50'
                    }`}
                  >
                    {item.letter}
                    {done && !active && (
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-[#202020] absolute top-1 right-1"
                        aria-label="Completed"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#202020]/10 text-xs text-[#5C5954] flex items-start gap-2.5">
            <Hand className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed">
              Pakistan Sign Language uses a two-handed manual alphabet for Latin letters alongside native Urdu{' '}
              <span className="font-urdu text-sm text-[#202020]" dir="rtl" lang="ur">
                حروفِ تہجی
              </span>{' '}
              signs.
            </p>
          </div>
        </div>

        {/* Right: Active Letter Detailed Visual Stage */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-7 border border-[#202020]/10 flex flex-col justify-between gap-6">
          <div className="space-y-5">
            {/* Header Row */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[#5C5954]">
                  Letter {selectedIndex + 1} of {PSL_ALPHABET.length} · {currentSign.category}
                </p>
                <div className="flex items-baseline gap-3 mt-1">
                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#202020]">
                    Letter {currentSign.letter}
                  </h3>
                  <span className="font-urdu text-xl text-[#5C5954]" dir="rtl" lang="ur">
                    {currentSign.urduPhonetic}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => toggleComplete(currentSign.slug)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium border transition-colors whitespace-nowrap ${
                  isCompleted
                    ? 'bg-[#D7E9D5] text-[#202020] border-[#202020]/20'
                    : 'bg-[#F8F3E9] text-[#202020] border-[#202020]/20 hover:bg-[#DCCDF4]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                {isCompleted ? 'Completed' : 'Mark as Completed'}
              </button>
            </div>

            {/* Hand Illustration / Studio Photo */}
            <AlphabetHandDiagram sign={currentSign} />

            {/* Structured Hand Guidance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#E6F4FA] p-4 border border-[#A9D2E6]/50">
                <p className="text-xs font-semibold text-[#202020] mb-1">Base Hand (Non-Dominant)</p>
                <p className="text-sm text-[#202020]/85 leading-relaxed">{currentSign.baseHand}</p>
              </div>
              <div className="rounded-2xl bg-[#EFE8FA] p-4 border border-[#C6B2E8]/50">
                <p className="text-xs font-semibold text-[#202020] mb-1">Dominant Hand (Pointer)</p>
                <p className="text-sm text-[#202020]/85 leading-relaxed">{currentSign.dominantHand}</p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#F8F3E9] p-4 space-y-1.5">
              <p className="text-xs font-semibold text-[#202020]">Movement & Learner Tip</p>
              <p className="text-sm text-[#202020] leading-relaxed">{currentSign.movement}</p>
              <p className="text-xs text-[#5C5954] leading-relaxed">{currentSign.tip}</p>
            </div>
          </div>

          {/* Previous / Next Navigation */}
          <div className="flex items-center justify-between pt-3 border-t border-[#202020]/10 gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#202020]/20 bg-white text-sm font-medium text-[#202020] hover:bg-[#F8F3E9] transition-colors whitespace-nowrap"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              Previous
            </button>

            <button
              type="button"
              onClick={() => setSelectedIndex(0)}
              aria-label="Reset to letter A"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#5C5954] hover:text-[#202020] transition-colors whitespace-nowrap"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              Start at A
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#202020] text-white text-sm font-medium hover:bg-[#383838] transition-colors whitespace-nowrap"
            >
              Next Letter
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
