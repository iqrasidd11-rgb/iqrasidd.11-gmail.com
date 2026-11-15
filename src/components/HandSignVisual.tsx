import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Play, Gauge } from 'lucide-react';
import type { AlphabetSign, CategoryItem, PSLLesson } from '../data/pslData';

export const BrandHandEmblem: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="36" height="36" rx="11" fill="#DCCDF4" stroke="#202020" strokeWidth="1.75" />
    {/* Stylized two-hand communication arc */}
    <path
      d="M14 27V17.5C14 16.4 14.9 15.5 16 15.5C17.1 15.5 18 16.4 18 17.5V22"
      stroke="#202020"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M18 16V13.5C18 12.4 18.9 11.5 20 11.5C21.1 11.5 22 12.4 22 13.5V21"
      stroke="#202020"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M22 15.5C22 14.4 22.9 13.5 24 13.5C25.1 13.5 26 14.4 26 15.5V24.5C26 27.5 23.8 29.5 20.5 29.5H18.5C15.5 29.5 14 27.8 14 25.5"
      stroke="#202020"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="28.5" cy="12" r="2.2" fill="#F4D98B" stroke="#202020" strokeWidth="1.4" />
  </svg>
);

export const CategoryIcon: React.FC<{
  iconKey: CategoryItem['iconKey'];
  className?: string;
}> = ({ iconKey, className = 'w-7 h-7' }) => {
  switch (iconKey) {
    case 'alphabet':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M6 23L11.5 8L17 23M8 18.5H15" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 13H26L20 23H26" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'numbers':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M8 11L11 8V24M8 24H14" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 11.5C18 9.6 19.6 8 21.5 8C23.4 8 25 9.6 25 11.5C25 13.8 22.8 15.3 18 24H25.5" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'greetings':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M9 17V10.5C9 9.7 9.7 9 10.5 9C11.3 9 12 9.7 12 10.5V16M12 15V8.5C12 7.7 12.7 7 13.5 7C14.3 7 15 7.7 15 8.5V15M15 15V9.5C15 8.7 15.7 8 16.5 8C17.3 8 18 8.7 18 9.5V16M18 16V11.5C18 10.7 18.7 10 19.5 10C20.3 10 21 10.7 21 11.5V20C21 23.3 18.5 25.5 15 25.5C11.8 25.5 9 23.2 9 19.5V17Z" stroke="#202020" strokeWidth="1.9" strokeLinecap="round" />
          <path d="M23.5 9.5C25 11 25.5 13 25 15" stroke="#202020" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      );
    case 'family':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <circle cx="11" cy="11" r="3" stroke="#202020" strokeWidth="1.9" />
          <circle cx="21" cy="11" r="3" stroke="#202020" strokeWidth="1.9" />
          <path d="M6 23C6 19.8 8.2 17.5 11 17.5C13.8 17.5 16 19.8 16 23" stroke="#202020" strokeWidth="1.9" strokeLinecap="round" />
          <path d="M16 23C16 19.8 18.2 17.5 21 17.5C23.8 17.5 26 19.8 26 23" stroke="#202020" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      );
    case 'conversation':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M6 9.5C6 8.1 7.1 7 8.5 7H23.5C24.9 7 26 8.1 26 9.5V18.5C26 19.9 24.9 21 23.5 21H13L8 25V21H8.5C7.1 21 6 19.9 6 18.5V9.5Z" stroke="#202020" strokeWidth="1.9" strokeLinejoin="round" />
          <path d="M11 12.5H21M11 16H17" stroke="#202020" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      );
    case 'education':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M6 10.5C6 9.1 7.1 8 8.5 8H15.5V24H8.5C7.1 24 6 22.9 6 21.5V10.5Z" stroke="#202020" strokeWidth="1.9" strokeLinejoin="round" />
          <path d="M26 10.5C26 9.1 24.9 8 23.5 8H16.5V24H23.5C24.9 24 26 22.9 26 21.5V10.5Z" stroke="#202020" strokeWidth="1.9" strokeLinejoin="round" />
        </svg>
      );
    case 'food':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M8 14H21V18.5C21 21.5 18.5 24 14.5 24C10.5 24 8 21.5 8 18.5V14Z" stroke="#202020" strokeWidth="1.9" strokeLinejoin="round" />
          <path d="M21 15.5H22.8C24.2 15.5 25 16.4 25 17.8C25 19.1 24.2 20 22.8 20H21" stroke="#202020" strokeWidth="1.9" strokeLinecap="round" />
          <path d="M12 10C12 8.5 13 8.5 13 7M16 10C16 8.5 17 8.5 17 7" stroke="#202020" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'emotions':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <circle cx="16" cy="16" r="9.5" stroke="#202020" strokeWidth="1.9" />
          <circle cx="13" cy="14" r="1.2" fill="#202020" />
          <circle cx="19" cy="14" r="1.2" fill="#202020" />
          <path d="M12.5 18.5C13.5 20 14.7 20.6 16 20.6C17.3 20.6 18.5 20 19.5 18.5" stroke="#202020" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      );
    case 'colors':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M16 6.5C10.8 6.5 6.5 10.6 6.5 15.7C6.5 20.8 10.6 24.5 15.5 24.5C17 24.5 18 23.7 18 22.5C18 21.6 17.5 20.8 18.4 20.1C19.1 19.6 20.3 19.8 21.5 19.8C24 19.8 25.5 18.1 25.5 15.6C25.5 10.5 21.3 6.5 16 6.5Z" stroke="#202020" strokeWidth="1.9" />
          <circle cx="12" cy="14" r="1.5" fill="#202020" />
          <circle cx="16" cy="11.5" r="1.5" fill="#202020" />
          <circle cx="20" cy="14" r="1.5" fill="#202020" />
        </svg>
      );
    case 'expressions':
    default:
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M9.5 16.5L14 21L23 11.5" stroke="#202020" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="5.5" y="5.5" width="21" height="21" rx="6" stroke="#202020" strokeWidth="1.8" />
        </svg>
      );
  }
};

export const AlphabetHandDiagram: React.FC<{
  sign: AlphabetSign;
  compact?: boolean;
}> = ({ sign, compact = false }) => {
  const [showPhoto, setShowPhoto] = useState(Boolean(sign.photoUrl));

  // Finger tip targets on the non-dominant open palm SVG (viewBox 0 0 280 210)
  const vowelTargets: Record<string, { x: number; y: number; finger: string }> = {
    'vowel-thumb': { x: 132, y: 112, finger: 'Thumb' },
    'vowel-index': { x: 108, y: 54, finger: 'Index' },
    'vowel-middle': { x: 89, y: 45, finger: 'Middle' },
    'vowel-ring': { x: 70, y: 53, finger: 'Ring' },
    'vowel-pinky': { x: 52, y: 69, finger: 'Pinky' },
  };

  const isVowel = sign.diagramPreset.startsWith('vowel-');
  const vowelPoint = vowelTargets[sign.diagramPreset];

  return (
    <div className="w-full">
      {sign.photoUrl && !compact && (
        <div className="flex items-center justify-end gap-1.5 mb-3">
          <button
            type="button"
            onClick={() => setShowPhoto(true)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap ${
              showPhoto
                ? 'bg-[#202020] text-white border-[#202020]'
                : 'bg-white text-[#202020] border-[#202020]/15 hover:bg-[#F8F3E9]'
            }`}
          >
            Studio Photo
          </button>
          <button
            type="button"
            onClick={() => setShowPhoto(false)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap ${
              !showPhoto
                ? 'bg-[#202020] text-white border-[#202020]'
                : 'bg-white text-[#202020] border-[#202020]/15 hover:bg-[#F8F3E9]'
            }`}
          >
            Hand Diagram
          </button>
        </div>
      )}

      {sign.photoUrl && showPhoto && !compact ? (
        <div className="relative overflow-hidden rounded-2xl border border-[#202020]/10 bg-[#F8F3E9] aspect-[4/3]">
          <img
            src={sign.photoUrl}
            alt={`Two-handed Pakistan Sign Language demonstration of letter ${sign.letter}: ${sign.handshapeSummary}`}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
            <p className="text-xs font-medium">
              Two-Handed PSL Formation · Letter {sign.letter} ({sign.category})
            </p>
          </div>
        </div>
      ) : (
        <div className="relative rounded-2xl border border-[#202020]/10 bg-[#F8F3E9] p-4 flex flex-col items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 280 210"
            className={compact ? 'w-full max-w-[200px] h-auto' : 'w-full max-w-[300px] h-auto'}
            role="img"
            aria-label={`Diagram of PSL two-handed letter ${sign.letter}: ${sign.handshapeSummary}`}
          >
            {/* Soft background guide circle */}
            <circle cx="140" cy="105" r="82" fill="#FFFFFF" stroke="#202020" strokeOpacity="0.08" strokeWidth="1.5" />

            {isVowel && vowelPoint ? (
              <>
                {/* Base Open Hand (Left / Non-dominant, Pastel Blue) */}
                <g>
                  {/* Palm */}
                  <rect x="56" y="100" width="58" height="62" rx="18" fill="#C9E5F3" stroke="#202020" strokeWidth="2.2" />
                  {/* Pinky */}
                  <rect x="46" y="65" width="13" height="48" rx="6.5" fill="#C9E5F3" stroke="#202020" strokeWidth="2.2" transform="rotate(-12 52 88)" />
                  {/* Ring */}
                  <rect x="64" y="48" width="13" height="58" rx="6.5" fill="#C9E5F3" stroke="#202020" strokeWidth="2.2" transform="rotate(-4 70 76)" />
                  {/* Middle */}
                  <rect x="82" y="40" width="14" height="64" rx="7" fill="#C9E5F3" stroke="#202020" strokeWidth="2.2" />
                  {/* Index */}
                  <rect x="101" y="49" width="13.5" height="56" rx="6.7" fill="#C9E5F3" stroke="#202020" strokeWidth="2.2" transform="rotate(6 108 76)" />
                  {/* Thumb */}
                  <rect x="112" y="106" width="32" height="14" rx="7" fill="#C9E5F3" stroke="#202020" strokeWidth="2.2" transform="rotate(-24 124 114)" />
                  {/* Wrist */}
                  <rect x="68" y="158" width="34" height="24" rx="8" fill="#C9E5F3" stroke="#202020" strokeWidth="2.2" />
                </g>

                {/* Dominant Pointer Hand (Soft Lavender) moving to target fingertip */}
                <motion.g
                  initial={{ x: 14, opacity: 0.85 }}
                  animate={{ x: [14, 0, 14] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {/* Pointer Index Finger */}
                  <rect
                    x={vowelPoint.x + 2}
                    y={vowelPoint.y - 7}
                    width="64"
                    height="14"
                    rx="7"
                    fill="#DCCDF4"
                    stroke="#202020"
                    strokeWidth="2.2"
                  />
                  {/* Dominant Fist Base */}
                  <rect
                    x={vowelPoint.x + 56}
                    y={vowelPoint.y - 14}
                    width="42"
                    height="44"
                    rx="14"
                    fill="#DCCDF4"
                    stroke="#202020"
                    strokeWidth="2.2"
                  />
                  {/* Curled fingers detail */}
                  <path
                    d={`M ${vowelPoint.x + 64} ${vowelPoint.y + 8} H ${vowelPoint.x + 86} M ${vowelPoint.x + 64} ${vowelPoint.y + 18} H ${vowelPoint.x + 84}`}
                    stroke="#202020"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </motion.g>

                {/* Contact highlight */}
                <circle
                  cx={vowelPoint.x}
                  cy={vowelPoint.y}
                  r="8"
                  fill="#F4D98B"
                  fillOpacity="0.8"
                  stroke="#202020"
                  strokeWidth="1.8"
                />
              </>
            ) : (
              /* Structured Two-Handed Consonant Representation */
              <g>
                {/* Base Hand Representation (Pastel Blue) */}
                {sign.diagramPreset === 'x-cross-index' ||
                sign.diagramPreset === 'k-hook' ||
                sign.diagramPreset === 'd-loop' ||
                sign.diagramPreset === 'p-circle-tip' ? (
                  <g>
                    <rect x="86" y="106" width="40" height="46" rx="14" fill="#C9E5F3" stroke="#202020" strokeWidth="2.2" />
                    <rect x="98" y="48" width="14" height="64" rx="7" fill="#C9E5F3" stroke="#202020" strokeWidth="2.2" />
                  </g>
                ) : sign.diagramPreset === 'c-curve' ? (
                  <g>
                    <rect x="64" y="138" width="52" height="22" rx="10" fill="#C9E5F3" stroke="#202020" strokeWidth="2.2" />
                  </g>
                ) : (
                  /* Open Palm Base */
                  <g>
                    <rect x="64" y="96" width="66" height="58" rx="16" fill="#C9E5F3" stroke="#202020" strokeWidth="2.2" />
                    <path
                      d="M78 96V70M94 96V64M110 96V68M124 96V78"
                      stroke="#202020"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </g>
                )}

                {/* Dominant Hand Shape (Soft Lavender) */}
                <motion.g
                  initial={{ y: -4 }}
                  animate={{ y: [-4, 2, -4] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {sign.diagramPreset === 'm-three-palm' || sign.diagramPreset === 'n-two-palm' || sign.diagramPreset === 'v-two-palm' ? (
                    <g>
                      <rect x="148" y="76" width="44" height="44" rx="14" fill="#DCCDF4" stroke="#202020" strokeWidth="2.2" />
                      {/* 3 fingers for M, 2 fingers for N/V */}
                      <rect x="108" y="88" width="48" height="11" rx="5.5" fill="#DCCDF4" stroke="#202020" strokeWidth="2" transform="rotate(-12 132 94)" />
                      <rect x="108" y="102" width="48" height="11" rx="5.5" fill="#DCCDF4" stroke="#202020" strokeWidth="2" transform={sign.diagramPreset === 'v-two-palm' ? 'rotate(14 132 108)' : 'rotate(-6 132 108)'} />
                      {sign.diagramPreset === 'm-three-palm' && (
                        <rect x="110" y="116" width="46" height="11" rx="5.5" fill="#DCCDF4" stroke="#202020" strokeWidth="2" />
                      )}
                    </g>
                  ) : sign.diagramPreset === 'x-cross-index' ? (
                    <g>
                      <rect x="148" y="88" width="44" height="44" rx="14" fill="#DCCDF4" stroke="#202020" strokeWidth="2.2" />
                      <rect x="74" y="80" width="84" height="13" rx="6.5" fill="#DCCDF4" stroke="#202020" strokeWidth="2.2" transform="rotate(-24 116 86)" />
                    </g>
                  ) : sign.diagramPreset === 'c-curve' ? (
                    <path
                      d="M174 68C144 52 108 66 108 102C108 138 144 150 174 134"
                      stroke="#202020"
                      strokeWidth="16"
                      strokeLinecap="round"
                    />
                  ) : sign.diagramPreset === 'g-fists' ? (
                    <g>
                      <rect x="112" y="54" width="54" height="44" rx="16" fill="#DCCDF4" stroke="#202020" strokeWidth="2.2" />
                      <path d="M124 72H154M124 82H150" stroke="#202020" strokeWidth="1.8" strokeLinecap="round" />
                    </g>
                  ) : (
                    <g>
                      <rect x="142" y="72" width="48" height="48" rx="16" fill="#DCCDF4" stroke="#202020" strokeWidth="2.2" />
                      <rect x="96" y="88" width="56" height="14" rx="7" fill="#DCCDF4" stroke="#202020" strokeWidth="2.2" />
                    </g>
                  )}
                </motion.g>

                {sign.diagramPreset === 'c-curve' && (
                  <path
                    d="M174 68C144 52 108 66 108 102C108 138 144 150 174 134"
                    stroke="#DCCDF4"
                    strokeWidth="11"
                    strokeLinecap="round"
                  />
                )}

                {/* Center letter anchor */}
                <circle cx="225" cy="46" r="20" fill="#F4D98B" stroke="#202020" strokeWidth="2" />
                <text x="225" y="53" textAnchor="middle" fill="#202020" fontSize="20" fontWeight="700" fontFamily="Poppins, sans-serif">
                  {sign.letter}
                </text>
              </g>
            )}
          </svg>

          {!compact && (
            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-[#5C5954]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#C9E5F3] border border-[#202020]" />
                Base Hand
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#DCCDF4] border border-[#202020]" />
                Dominant Hand
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#F4D98B] border border-[#202020]" />
                {isVowel ? `${vowelPoint?.finger} Tip Touch` : 'Contact Zone'}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const GestureStageVisual: React.FC<{
  lesson: PSLLesson;
  showControls?: boolean;
}> = ({ lesson, showControls = true }) => {
  const [replayKey, setReplayKey] = useState(0);
  const [slowMo, setSlowMo] = useState(false);

  const duration = slowMo ? 3.2 : 1.7;

  return (
    <div className="rounded-2xl border border-[#202020]/10 bg-white overflow-hidden">
      <div className="relative aspect-[16/10] bg-[#F8F3E9] flex items-center justify-center overflow-hidden">
        {lesson.imageUrl ? (
          <>
            <img
              src={lesson.imageUrl}
              alt={`Pakistan Sign Language demonstration for ${lesson.title} (${lesson.urduTitle})`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          </>
        ) : (
          /* Interactive Visual Gesture Stage */
          <svg
            key={replayKey}
            viewBox="0 0 420 260"
            className="w-full h-full max-h-[340px]"
            role="img"
            aria-label={`Animated PSL gesture guide for ${lesson.title}`}
          >
            {/* Clean Studio Silhouette */}
            <rect x="0" y="0" width="420" height="260" fill="#F8F3E9" />
            <circle cx="210" cy="130" r="108" fill="#FFFFFF" stroke="#202020" strokeOpacity="0.07" strokeWidth="1.5" />

            {/* Stylized Torso & Head Reference */}
            <path
              d="M138 260C138 214 166 190 210 190C254 190 282 214 282 260"
              fill="#E8E2D5"
              stroke="#202020"
              strokeWidth="2"
            />
            <circle cx="210" cy="96" r="34" fill="#FFFFFF" stroke="#202020" strokeWidth="2" />
            {/* Friendly eyes & smile */}
            <circle cx="199" cy="92" r="2.2" fill="#202020" />
            <circle cx="221" cy="92" r="2.2" fill="#202020" />
            <path d="M201 106C205 111 215 111 219 106" stroke="#202020" strokeWidth="2" strokeLinecap="round" />

            {/* Gesture-specific animated hand & motion path */}
            {lesson.gestureVisual === 'sorry' || lesson.gestureVisual === 'please' || lesson.gestureVisual === 'happy' ? (
              <>
                <motion.circle
                  cx="210"
                  cy="214"
                  r="24"
                  fill="none"
                  stroke="#202020"
                  strokeDasharray="4 4"
                  strokeWidth="1.8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration, repeat: Infinity, ease: 'linear' }}
                />
                <motion.g
                  animate={
                    lesson.gestureVisual === 'happy'
                      ? { y: [10, -14, 10] }
                      : { x: [0, 12, 0, -12, 0], y: [0, -10, -20, -10, 0] }
                  }
                  transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <rect
                    x="194"
                    y="198"
                    width="34"
                    height={lesson.gestureVisual === 'sorry' ? '30' : '40'}
                    rx="12"
                    fill={lesson.gestureVisual === 'sorry' ? '#DCCDF4' : '#F4D4D8'}
                    stroke="#202020"
                    strokeWidth="2.2"
                  />
                </motion.g>
              </>
            ) : lesson.gestureVisual === 'book' || lesson.gestureVisual === 'school' ? (
              <>
                <motion.rect
                  x="154"
                  y="168"
                  width="50"
                  height="34"
                  rx="8"
                  fill="#C9E5F3"
                  stroke="#202020"
                  strokeWidth="2.2"
                  animate={{ rotate: [0, -18, 0] }}
                  transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.rect
                  x="216"
                  y="168"
                  width="50"
                  height="34"
                  rx="8"
                  fill="#DCCDF4"
                  stroke="#202020"
                  strokeWidth="2.2"
                  animate={{ rotate: [0, 18, 0] }}
                  transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
                />
              </>
            ) : lesson.gestureVisual === 'how-are-you' || lesson.gestureVisual === 'good-morning' ? (
              <>
                <rect x="130" y="196" width="108" height="12" rx="6" fill="#C9E5F3" stroke="#202020" strokeWidth="2" />
                <motion.g
                  animate={{ y: [24, -18, 24] }}
                  transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <circle cx="248" cy="176" r="20" fill="#F4D98B" stroke="#202020" strokeWidth="2.2" />
                  <path d="M248 148V136M268 156L276 148M228 156L220 148" stroke="#202020" strokeWidth="2" strokeLinecap="round" />
                </motion.g>
              </>
            ) : (
              /* Chin / Temple / Mouth outward motion (Hello, Thank You, Water, Tea, Mother, Father, Understand) */
              <>
                <motion.path
                  d="M236 126C260 126 276 138 292 152"
                  fill="none"
                  stroke="#202020"
                  strokeWidth="2"
                  strokeDasharray="5 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.g
                  animate={{ x: [0, 36, 0], y: [0, 14, 0] }}
                  transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <rect x="220" y="114" width="28" height="36" rx="11" fill="#DCCDF4" stroke="#202020" strokeWidth="2.2" />
                  <path d="M227 114V102M234 114V100M241 114V104" stroke="#202020" strokeWidth="2" strokeLinecap="round" />
                </motion.g>
              </>
            )}
          </svg>
        )}

        {/* Accessible Visual Caption Bar */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-4 ${
            lesson.imageUrl ? 'text-white' : 'bg-white/90 border-t border-[#202020]/10 text-[#202020]'
          }`}
        >
          <div>
            <p className="text-sm font-semibold">{lesson.title}</p>
            <p className={`text-xs ${lesson.imageUrl ? 'text-white/85' : 'text-[#5C5954]'}`}>
              {lesson.movement}
            </p>
          </div>
          <span
            className={`font-urdu text-lg shrink-0 ${
              lesson.imageUrl ? 'text-[#F4D98B]' : 'text-[#202020]'
            }`}
            dir="rtl"
            lang="ur"
          >
            {lesson.urduTitle}
          </span>
        </div>
      </div>

      {showControls && (
        <div className="px-4 py-3 bg-white border-t border-[#202020]/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setReplayKey((k) => k + 1)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#202020] text-white text-xs font-medium hover:bg-[#383838] transition-colors whitespace-nowrap"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              Replay Sign
            </button>
            <button
              type="button"
              onClick={() => setSlowMo((s) => !s)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap ${
                slowMo
                  ? 'bg-[#F4D98B] text-[#202020] border-[#202020]'
                  : 'bg-[#F8F3E9] text-[#202020] border-[#202020]/15 hover:bg-[#EFE8FA]'
              }`}
            >
              <Gauge className="w-3.5 h-3.5" aria-hidden="true" />
              {slowMo ? 'Speed: 0.5x Slow' : 'Speed: 1x Normal'}
            </button>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs text-[#5C5954]">
            <Play className="w-3.5 h-3.5" aria-hidden="true" />
            Visual guide with live captions
          </span>
        </div>
      )}
    </div>
  );
};
