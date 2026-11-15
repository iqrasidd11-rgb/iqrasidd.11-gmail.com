import React, { useMemo, useState } from 'react';
import {
  Award,
  CheckCircle2,
  ChevronRight,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { PSL_ALPHABET, PSL_LESSONS, QUIZ_QUESTIONS, type QuizQuestion } from '../data/pslData';
import { AlphabetHandDiagram, GestureStageVisual } from './HandSignVisual';
import { useLearning } from '../context/LearningContext';

type QuizFilterMode = 'all' | QuizQuestion['mode'];

const MODE_LABELS: Record<QuizFilterMode, string> = {
  all: 'Complete Practice Mix',
  'multiple-choice': 'Multiple Choice',
  match: 'Match Sign & Meaning',
  'gesture-id': 'Identify Hand Position',
  alphabet: 'Alphabet Recognition',
  vocabulary: 'Everyday Vocabulary',
};

export const QuizEngine: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { recordQuizScore } = useLearning();
  const [selectedMode, setSelectedMode] = useState<QuizFilterMode>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);

  const questions = useMemo(() => {
    const filtered =
      selectedMode === 'all'
        ? QUIZ_QUESTIONS
        : QUIZ_QUESTIONS.filter((q) => q.mode === selectedMode);
    return compact ? filtered.slice(0, 4) : filtered;
  }, [selectedMode, compact]);

  const currentQuestion = questions[currentIndex];
  const isAnswered = selectedOption !== null;
  const isCorrect = isAnswered && selectedOption === currentQuestion?.correctOptionId;

  const totalScore = Object.values(answers).filter(Boolean).length;

  const handleModeChange = (mode: QuizFilterMode) => {
    setSelectedMode(mode);
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers({});
    setFinished(false);
  };

  const handleSelectOption = (optionId: string) => {
    if (isAnswered || !currentQuestion) return;
    setSelectedOption(optionId);
    const correct = optionId === currentQuestion.correctOptionId;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: correct }));
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      const finalCorrect = Object.values(answers).filter(Boolean).length;
      recordQuizScore(MODE_LABELS[selectedMode], finalCorrect, questions.length);
      setFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers({});
    setFinished(false);
  };

  const visualContent = useMemo(() => {
    if (!currentQuestion) return null;
    if (currentQuestion.visualType === 'alphabet') {
      const letter = PSL_ALPHABET.find((a) => a.letter === currentQuestion.visualKey);
      return letter ? <AlphabetHandDiagram sign={letter} compact /> : null;
    }
    const lesson = PSL_LESSONS.find((l) => l.slug === currentQuestion.visualKey);
    return lesson ? <GestureStageVisual lesson={lesson} showControls={false} /> : null;
  }, [currentQuestion]);

  return (
    <div className="space-y-6">
      {/* Mode Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {(Object.keys(MODE_LABELS) as QuizFilterMode[]).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => handleModeChange(mode)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors whitespace-nowrap ${
              selectedMode === mode
                ? 'bg-[#202020] text-white border-[#202020]'
                : 'bg-white text-[#5C5954] border-[#202020]/15 hover:text-[#202020] hover:bg-[#EFE8FA]'
            }`}
          >
            {MODE_LABELS[mode]}
          </button>
        ))}
      </div>

      {finished ? (
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#202020]/10 text-center max-w-2xl mx-auto space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-[#D7E9D5] border border-[#202020]/15 mx-auto flex items-center justify-center">
            <Award className="w-8 h-8 text-[#202020]" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#5C5954]">Practice Complete</p>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#202020]">
              Shabaash! You scored <span className="tabular-nums">{totalScore}</span> out of{' '}
              <span className="tabular-nums">{questions.length}</span>
            </h3>
            <p className="font-urdu text-lg text-[#5C5954]" dir="rtl" lang="ur">
              شاباش! آپ نے مشق مکمل کر لی ہے
            </p>
            <p className="text-sm text-[#5C5954] max-w-md mx-auto leading-relaxed">
              {totalScore === questions.length
                ? 'Excellent recognition across all signs. Try another practice category or explore intermediate vocabulary.'
                : 'Great effort building your visual PSL recognition. Review the handshapes and try again to sharpen your accuracy.'}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#202020] text-white text-sm font-medium hover:bg-[#383838] transition-colors"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              Practice Again
            </button>
          </div>
        </div>
      ) : currentQuestion ? (
        <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#202020]/10 space-y-6">
          {/* Progress header */}
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs sm:text-sm font-medium text-[#5C5954] tabular-nums">
              Question {currentIndex + 1} of {questions.length} · {MODE_LABELS[selectedMode]}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#202020] tabular-nums">
              Score: {totalScore} / {questions.length}
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-[#F8F3E9] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#202020] transition-all duration-300"
              style={{ width: `${((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Visual Prompt */}
            <div className="lg:col-span-5">{visualContent}</div>

            {/* Question & Options */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <h3 className="font-display font-semibold text-lg sm:text-xl text-[#202020] leading-snug">
                  {currentQuestion.prompt}
                </h3>
                {currentQuestion.urduHint && (
                  <p className="font-urdu text-base text-[#5C5954]" dir="rtl" lang="ur">
                    {currentQuestion.urduHint}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((opt) => {
                  const chosen = selectedOption === opt.id;
                  const isRight = opt.id === currentQuestion.correctOptionId;

                  let btnStyle =
                    'bg-[#F8F3E9] border-[#202020]/10 hover:bg-[#EFE8FA] text-[#202020]';

                  if (isAnswered) {
                    if (isRight) {
                      btnStyle = 'bg-[#D7E9D5] border-[#202020] text-[#202020]';
                    } else if (chosen && !isRight) {
                      btnStyle = 'bg-[#F4D4D8] border-[#202020] text-[#202020]';
                    } else {
                      btnStyle = 'bg-[#F8F3E9]/60 border-[#202020]/10 text-[#5C5954]';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`w-full text-left px-4 py-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        {isAnswered && isRight && (
                          <CheckCircle2 className="w-5 h-5 text-[#202020] shrink-0" aria-hidden="true" />
                        )}
                        {isAnswered && chosen && !isRight && (
                          <XCircle className="w-5 h-5 text-[#202020] shrink-0" aria-hidden="true" />
                        )}
                        <span className="text-sm sm:text-base font-medium">{opt.label}</span>
                      </div>
                      {opt.urdu && (
                        <span className="font-urdu text-base shrink-0" dir="rtl" lang="ur">
                          {opt.urdu}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Accessible Feedback Box */}
              {isAnswered && (
                <div
                  role="status"
                  className={`rounded-2xl p-4 border ${
                    isCorrect
                      ? 'bg-[#ECF5EB] border-[#BBD6B8]'
                      : 'bg-[#FAEAEC] border-[#E5B8BE]'
                  }`}
                >
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#202020] mb-1">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                        <span>Correct! Well done.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4" aria-hidden="true" />
                        <span>Not quite — here is how it works:</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-[#202020]/85 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#202020] text-white text-sm font-medium hover:bg-[#383838] transition-colors"
                    >
                      {currentIndex + 1 >= questions.length ? 'Finish Quiz' : 'Next Question'}
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
