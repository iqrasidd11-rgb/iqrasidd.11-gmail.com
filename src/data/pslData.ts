export type PastelTheme = 'lavender' | 'blue' | 'pink' | 'mint' | 'yellow';

export interface CategoryItem {
  id: string;
  slug: string;
  title: string;
  urduTitle: string;
  description: string;
  lessonCount: number;
  pastel: PastelTheme;
  iconKey:
    | 'alphabet'
    | 'numbers'
    | 'greetings'
    | 'family'
    | 'conversation'
    | 'education'
    | 'food'
    | 'emotions'
    | 'colors'
    | 'expressions';
}

export interface AlphabetSign {
  letter: string;
  slug: string;
  urduPhonetic: string;
  category: 'Vowel' | 'Consonant';
  handshapeSummary: string;
  baseHand: string;
  dominantHand: string;
  movement: string;
  tip: string;
  photoUrl?: string;
  diagramPreset:
    | 'vowel-thumb'
    | 'vowel-index'
    | 'vowel-middle'
    | 'vowel-ring'
    | 'vowel-pinky'
    | 'b-parallel'
    | 'c-curve'
    | 'd-loop'
    | 'f-cross'
    | 'g-fists'
    | 'h-sweep'
    | 'j-trace'
    | 'k-hook'
    | 'l-palm-line'
    | 'm-three-palm'
    | 'n-two-palm'
    | 'p-circle-tip'
    | 'q-ring-hook'
    | 'r-curved-palm'
    | 's-pinky-lock'
    | 't-edge-touch'
    | 'v-two-palm'
    | 'w-interlock'
    | 'x-cross-index'
    | 'y-crotch-touch'
    | 'z-edge-rest';
}

export interface PSLLesson {
  id: string;
  slug: string;
  title: string;
  urduTitle: string;
  transliteration: string;
  categorySlug: string;
  categoryName: string;
  difficulty: 'Beginner' | 'Intermediate';
  duration: string;
  featured?: boolean;
  pastel: PastelTheme;
  shortDescription: string;
  handshape: string;
  movement: string;
  facialExpression: string;
  steps: string[];
  culturalNote: string;
  imageUrl?: string;
  gestureVisual:
    | 'hello'
    | 'thank-you'
    | 'how-are-you'
    | 'good-morning'
    | 'please'
    | 'sorry'
    | 'family-mother'
    | 'family-father'
    | 'number-one'
    | 'number-five'
    | 'water'
    | 'tea'
    | 'happy'
    | 'school'
    | 'book'
    | 'green'
    | 'yes'
    | 'understand';
}

export interface QuizQuestion {
  id: string;
  mode: 'multiple-choice' | 'match' | 'gesture-id' | 'alphabet' | 'vocabulary';
  prompt: string;
  urduHint?: string;
  visualType: 'alphabet' | 'lesson';
  visualKey: string;
  options: { id: string; label: string; urdu?: string }[];
  correctOptionId: string;
  explanation: string;
}

export const PASTEL_CLASSES: Record<
  PastelTheme,
  { bg: string; border: string; softBg: string; text: string }
> = {
  lavender: {
    bg: 'bg-[#DCCDF4]',
    border: 'border-[#C6B2E8]',
    softBg: 'bg-[#EFE8FA]',
    text: 'text-[#202020]',
  },
  blue: {
    bg: 'bg-[#C9E5F3]',
    border: 'border-[#A9D2E6]',
    softBg: 'bg-[#E6F4FA]',
    text: 'text-[#202020]',
  },
  pink: {
    bg: 'bg-[#F4D4D8]',
    border: 'border-[#E5B8BE]',
    softBg: 'bg-[#FAEAEC]',
    text: 'text-[#202020]',
  },
  mint: {
    bg: 'bg-[#D7E9D5]',
    border: 'border-[#BBD6B8]',
    softBg: 'bg-[#ECF5EB]',
    text: 'text-[#202020]',
  },
  yellow: {
    bg: 'bg-[#F4D98B]',
    border: 'border-[#E5C263]',
    softBg: 'bg-[#FBF0CF]',
    text: 'text-[#202020]',
  },
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'cat-alphabets',
    slug: 'alphabets',
    title: 'Alphabets (A–Z)',
    urduTitle: 'حروفِ تہجی',
    description:
      'Master the two-handed PSL manual alphabet used for fingerspelling names and places across Pakistan.',
    lessonCount: 26,
    pastel: 'lavender',
    iconKey: 'alphabet',
  },
  {
    id: 'cat-numbers',
    slug: 'numbers',
    title: 'Numbers (0–100)',
    urduTitle: 'گنتی اور اعداد',
    description:
      'Count clearly from zero to one hundred for daily shopping, telling time, and classroom math.',
    lessonCount: 12,
    pastel: 'blue',
    iconKey: 'numbers',
  },
  {
    id: 'cat-greetings',
    slug: 'greetings',
    title: 'Greetings & Introductions',
    urduTitle: 'سلام اور تعارف',
    description:
      'Start warm conversations with Assalam-o-Alaikum, thank you, polite requests, and introductions.',
    lessonCount: 10,
    pastel: 'yellow',
    iconKey: 'greetings',
  },
  {
    id: 'cat-family',
    slug: 'family',
    title: 'Family & Relationships',
    urduTitle: 'خاندان اور رشتے',
    description:
      'Sign mother, father, siblings, grandparents, and close friends with culturally grounded gestures.',
    lessonCount: 9,
    pastel: 'pink',
    iconKey: 'family',
  },
  {
    id: 'cat-conversations',
    slug: 'daily-conversations',
    title: 'Daily Conversations',
    urduTitle: 'روزمرہ گفتگو',
    description:
      'Build practical sentences for asking directions, checking in with neighbors, and everyday dialogue.',
    lessonCount: 14,
    pastel: 'mint',
    iconKey: 'conversation',
  },
  {
    id: 'cat-education',
    slug: 'education',
    title: 'Education & School',
    urduTitle: 'تعلیم اور اسکول',
    description:
      'Essential classroom signs for teachers, students, and parents covering books, reading, and questions.',
    lessonCount: 11,
    pastel: 'blue',
    iconKey: 'education',
  },
  {
    id: 'cat-food',
    slug: 'food-and-drinks',
    title: 'Food & Drinks',
    urduTitle: 'کھانا اور پینا',
    description:
      'Order chai, water, roti, and fruit or share meals comfortably with deaf family and friends.',
    lessonCount: 12,
    pastel: 'yellow',
    iconKey: 'food',
  },
  {
    id: 'cat-emotions',
    slug: 'emotions',
    title: 'Emotions & Feelings',
    urduTitle: 'جذبات اور احساسات',
    description:
      'Express happiness, gratitude, concern, and empathy using coordinated hand and facial cues.',
    lessonCount: 8,
    pastel: 'pink',
    iconKey: 'emotions',
  },
  {
    id: 'cat-colors',
    slug: 'colors-and-objects',
    title: 'Colors & Objects',
    urduTitle: 'رنگ اور اشیاء',
    description:
      'Describe everyday items and colors around your home, workplace, and Pakistani street markets.',
    lessonCount: 10,
    pastel: 'mint',
    iconKey: 'colors',
  },
  {
    id: 'cat-expressions',
    slug: 'common-expressions',
    title: 'Common Expressions',
    urduTitle: 'عام تاثرات',
    description:
      'Communicate yes, no, I understand, wait a moment, and helpful everyday affirmations naturally.',
    lessonCount: 10,
    pastel: 'lavender',
    iconKey: 'expressions',
  },
];

export const PSL_ALPHABET: AlphabetSign[] = [
  {
    letter: 'A',
    slug: 'letter-a',
    urduPhonetic: 'اے (مُصوّتہ)',
    category: 'Vowel',
    handshapeSummary: 'Dominant index finger touches the tip of the non-dominant thumb.',
    baseHand: 'Open non-dominant hand, palm facing inward, thumb raised comfortably.',
    dominantHand: 'Index finger extended gently toward the base hand.',
    movement: 'Hold steady and tap the tip of the base thumb once cleanly.',
    tip: 'All 5 vowels in two-handed PSL follow the fingertips in order from thumb (A) to pinky (U).',
    photoUrl: '/src/assets/images/lesson_alphabet_hands_1794742840690.jpg',
    diagramPreset: 'vowel-thumb',
  },
  {
    letter: 'B',
    slug: 'letter-b',
    urduPhonetic: 'بی',
    category: 'Consonant',
    handshapeSummary: 'Both hands form rounded loops held side by side like the two bowls of B.',
    baseHand: 'Thumb and fingers curved into a circle facing the center.',
    dominantHand: 'Matching curved circle touching the inner edge of the base hand.',
    movement: 'Bring both pinched finger-rings briefly together at chest height.',
    tip: 'Keep the openings clearly visible to your listener rather than hiding them behind your palms.',
    diagramPreset: 'b-parallel',
  },
  {
    letter: 'C',
    slug: 'letter-c',
    urduPhonetic: 'سی',
    category: 'Consonant',
    handshapeSummary: 'Dominant thumb and index finger curve into a clear letter C shape.',
    baseHand: 'Relaxed near the chest or lightly framing the lower wrist.',
    dominantHand: 'Thumb and index finger arched in an open crescent.',
    movement: 'Hold the crescent upright facing slightly toward the viewer.',
    tip: 'Avoid closing the gap completely so C stays distinct from O.',
    diagramPreset: 'c-curve',
  },
  {
    letter: 'D',
    slug: 'letter-d',
    urduPhonetic: 'ڈی',
    category: 'Consonant',
    handshapeSummary: 'Dominant thumb and index arc onto the upright non-dominant index finger.',
    baseHand: 'Index finger pointing straight up as the vertical stem of D.',
    dominantHand: 'Thumb and index curved to meet the top and base of that stem.',
    movement: 'Form the D outline cleanly against the upright index finger.',
    tip: 'Think of your base index finger as the straight spine of the capital letter D.',
    diagramPreset: 'd-loop',
  },
  {
    letter: 'E',
    slug: 'letter-e',
    urduPhonetic: 'ای (مُصوّتہ)',
    category: 'Vowel',
    handshapeSummary: 'Dominant index finger touches the tip of the non-dominant index finger.',
    baseHand: 'Open non-dominant hand held upright, fingers slightly spread.',
    dominantHand: 'Index finger extended to touch the base index fingertip.',
    movement: 'Single crisp tap on the tip of the index finger.',
    tip: 'Thumb = A, Index = E. Keep the rest of your fingers relaxed and visible.',
    diagramPreset: 'vowel-index',
  },
  {
    letter: 'F',
    slug: 'letter-f',
    urduPhonetic: 'ایف',
    category: 'Consonant',
    handshapeSummary: 'Extended index and middle fingers of dominant hand rest across base index and middle.',
    baseHand: 'Index and middle fingers extended horizontally, palm down.',
    dominantHand: 'Index and middle fingers laid perpendicularly across the base fingers.',
    movement: 'Light tap as the upper fingers rest across the lower pair.',
    tip: 'Keep your fingers straight so the crossed lines resemble the bars of F.',
    diagramPreset: 'f-cross',
  },
  {
    letter: 'G',
    slug: 'letter-g',
    urduPhonetic: 'جی',
    category: 'Consonant',
    handshapeSummary: 'Two loosely closed fists stacked lightly one atop the other.',
    baseHand: 'Soft closed fist held palm-side inward at lower chest level.',
    dominantHand: 'Matching closed fist resting gently on top of the base fist.',
    movement: 'Set the dominant fist atop the base fist without forceful tapping.',
    tip: 'Keep wrists relaxed and shoulders neutral.',
    diagramPreset: 'g-fists',
  },
  {
    letter: 'H',
    slug: 'letter-h',
    urduPhonetic: 'ایچ',
    category: 'Consonant',
    handshapeSummary: 'Dominant open palm sweeps smoothly forward across the upturned base palm.',
    baseHand: 'Flat open palm facing upward like a tray.',
    dominantHand: 'Flat open palm gliding across the base palm toward the fingertips.',
    movement: 'One smooth forward brush across the length of the base palm.',
    tip: 'A gentle single glide is all that is needed; avoid repeating rapidly.',
    diagramPreset: 'h-sweep',
  },
  {
    letter: 'I',
    slug: 'letter-i',
    urduPhonetic: 'آئی (مُصوّتہ)',
    category: 'Vowel',
    handshapeSummary: 'Dominant index finger touches the tip of the non-dominant middle finger.',
    baseHand: 'Open non-dominant hand held comfortably upright.',
    dominantHand: 'Index finger extended toward the middle fingertip.',
    movement: 'Clear single tap on the tip of the middle finger.',
    tip: 'Remember the sequence: A (thumb), E (index), I (middle).',
    diagramPreset: 'vowel-middle',
  },
  {
    letter: 'J',
    slug: 'letter-j',
    urduPhonetic: 'جے',
    category: 'Consonant',
    handshapeSummary: 'Dominant index finger traces down the base middle finger and curves out along the thumb.',
    baseHand: 'Open palm facing upward with fingers gently spread.',
    dominantHand: 'Index finger acting as the pointer.',
    movement: 'Slide from the middle fingertip down into the palm and curve out to the thumb tip.',
    tip: 'Follow the curve of a written J across your open palm.',
    diagramPreset: 'j-trace',
  },
  {
    letter: 'K',
    slug: 'letter-k',
    urduPhonetic: 'کے',
    category: 'Consonant',
    handshapeSummary: 'Bent dominant index knuckle hooks lightly against the upright base index finger.',
    baseHand: 'Index finger pointing straight upward.',
    dominantHand: 'Index finger bent at the middle knuckle to form an angled chevron.',
    movement: 'Touch the bent knuckle to the middle of the upright base finger.',
    tip: 'The upright finger plus the bent knuckle clearly forms the letter K.',
    diagramPreset: 'k-hook',
  },
  {
    letter: 'L',
    slug: 'letter-l',
    urduPhonetic: 'ایل',
    category: 'Consonant',
    handshapeSummary: 'Dominant index finger rests vertically along the center of the open base palm.',
    baseHand: 'Open palm held upright or slightly tilted upward.',
    dominantHand: 'Index finger straight, placed vertically in the base palm.',
    movement: 'Place firmly against the center of the open palm.',
    tip: 'Contrast with M (3 fingers) and N (2 fingers) on the palm — L uses 1 index finger.',
    diagramPreset: 'l-palm-line',
  },
  {
    letter: 'M',
    slug: 'letter-m',
    urduPhonetic: 'ایم',
    category: 'Consonant',
    handshapeSummary: 'Three extended dominant fingers rest across the open non-dominant palm.',
    baseHand: 'Open flat palm facing upward.',
    dominantHand: 'Index, middle, and ring fingers extended together.',
    movement: 'Rest the three fingertips neatly against the center of the base palm.',
    tip: 'Count the vertical strokes: M has 3 legs, so 3 fingers touch the palm.',
    diagramPreset: 'm-three-palm',
  },
  {
    letter: 'N',
    slug: 'letter-n',
    urduPhonetic: 'این',
    category: 'Consonant',
    handshapeSummary: 'Two extended dominant fingers rest across the open non-dominant palm.',
    baseHand: 'Open flat palm facing upward.',
    dominantHand: 'Index and middle fingers extended together.',
    movement: 'Rest the two fingertips gently on the base palm.',
    tip: 'N has 2 legs, so 2 fingers touch the palm right next to M (3 fingers).',
    diagramPreset: 'n-two-palm',
  },
  {
    letter: 'O',
    slug: 'letter-o',
    urduPhonetic: 'او (مُصوّتہ)',
    category: 'Vowel',
    handshapeSummary: 'Dominant index finger touches the tip of the non-dominant ring finger.',
    baseHand: 'Open non-dominant hand held upright.',
    dominantHand: 'Index finger extended cleanly.',
    movement: 'Tap the tip of the ring finger clearly.',
    tip: 'Keep the ring finger distinct from the middle (I) and pinky (U) fingers.',
    diagramPreset: 'vowel-ring',
  },
  {
    letter: 'P',
    slug: 'letter-p',
    urduPhonetic: 'پی',
    category: 'Consonant',
    handshapeSummary: 'Dominant thumb and index form a small circle touching the tip of the upright base index.',
    baseHand: 'Index finger pointing straight upward.',
    dominantHand: 'Thumb and index joined in a small loop.',
    movement: 'Hold the small loop against the upper side of the upright index finger.',
    tip: 'This visually mirrors the upright stem and top loop of the letter P.',
    diagramPreset: 'p-circle-tip',
  },
  {
    letter: 'Q',
    slug: 'letter-q',
    urduPhonetic: 'کیو',
    category: 'Consonant',
    handshapeSummary: 'Base thumb and index form a circle while dominant index hooks into the lower edge.',
    baseHand: 'Thumb and index joined to make an O-shaped ring.',
    dominantHand: 'Curved index finger hooked at the bottom of the ring like Q’s tail.',
    movement: 'Hold the hooked tail steady at the base of the ring.',
    tip: 'Picture drawing the tail onto an uppercase Q.',
    diagramPreset: 'q-ring-hook',
  },
  {
    letter: 'R',
    slug: 'letter-r',
    urduPhonetic: 'آر',
    category: 'Consonant',
    handshapeSummary: 'Curved dominant index finger rests against the open non-dominant palm.',
    baseHand: 'Open palm tilted upward.',
    dominantHand: 'Index finger gently hooked or arched.',
    movement: 'Place the curved index finger into the center of the palm.',
    tip: 'Unlike L (straight finger), R uses a distinctly curved hook.',
    diagramPreset: 'r-curved-palm',
  },
  {
    letter: 'S',
    slug: 'letter-s',
    urduPhonetic: 'ایس',
    category: 'Consonant',
    handshapeSummary: 'The pinky fingers of both hands gently hook and interlock together.',
    baseHand: 'Pinky finger extended and slightly hooked upward.',
    dominantHand: 'Pinky finger hooked from above to link with the base pinky.',
    movement: 'Link both pinkies briefly in front of the chest.',
    tip: 'Notice how the two hooked pinkies trace an S-curve when linked.',
    diagramPreset: 's-pinky-lock',
  },
  {
    letter: 'T',
    slug: 'letter-t',
    urduPhonetic: 'ٹی',
    category: 'Consonant',
    handshapeSummary: 'Dominant index fingertip touches the outer edge of the open base palm.',
    baseHand: 'Flat open palm facing inward horizontally.',
    dominantHand: 'Index finger pointing horizontally to meet the palm edge.',
    movement: 'Tap the outer edge of the base palm perpendicular to it.',
    tip: 'Forms a crisp perpendicular T shape between pointer and palm.',
    diagramPreset: 't-edge-touch',
  },
  {
    letter: 'U',
    slug: 'letter-u',
    urduPhonetic: 'یو (مُصوّتہ)',
    category: 'Vowel',
    handshapeSummary: 'Dominant index finger touches the tip of the non-dominant pinky finger.',
    baseHand: 'Open non-dominant hand with pinky clearly extended.',
    dominantHand: 'Index finger extended cleanly.',
    movement: 'Tap the tip of the pinky finger once.',
    tip: 'Completes the 5-finger vowel scale: A (thumb), E (index), I (middle), O (ring), U (pinky).',
    diagramPreset: 'vowel-pinky',
  },
  {
    letter: 'V',
    slug: 'letter-v',
    urduPhonetic: 'وی',
    category: 'Consonant',
    handshapeSummary: 'Spread index and middle fingers (V-shape) of dominant hand rest on the open base palm.',
    baseHand: 'Open flat palm held upward.',
    dominantHand: 'Index and middle fingers spread wide apart into a V.',
    movement: 'Place the fingertips of the open V on the base palm.',
    tip: 'Keep the two fingers visibly separated so V is unmistakable from N.',
    diagramPreset: 'v-two-palm',
  },
  {
    letter: 'W',
    slug: 'letter-w',
    urduPhonetic: 'ڈبلیو',
    category: 'Consonant',
    handshapeSummary: 'Fingers of both open hands interlock cleanly with fingertips pointing diagonally up.',
    baseHand: 'Open fingers slightly spread facing inward.',
    dominantHand: 'Open fingers woven gently between the base fingers.',
    movement: 'Interlace the fingers lightly in front of the chest.',
    tip: 'Keep thumbs relaxed and fingers visible from the front.',
    diagramPreset: 'w-interlock',
  },
  {
    letter: 'X',
    slug: 'letter-x',
    urduPhonetic: 'ایکس',
    category: 'Consonant',
    handshapeSummary: 'Both index fingers cross over each other cleanly to form an X.',
    baseHand: 'Index finger extended diagonally upward.',
    dominantHand: 'Index finger placed across the base index at a 90-degree angle.',
    movement: 'Cross the two index fingers briefly at mid-chest level.',
    tip: 'One of the fastest two-handed consonants to recognize.',
    diagramPreset: 'x-cross-index',
  },
  {
    letter: 'Y',
    slug: 'letter-y',
    urduPhonetic: 'وائے',
    category: 'Consonant',
    handshapeSummary: 'Dominant index finger rests in the web between the base thumb and index finger.',
    baseHand: 'Open hand with thumb and index spread into an open V.',
    dominantHand: 'Index finger extended downward along the lower wrist line.',
    movement: 'Place the dominant index into the thumb-index crook.',
    tip: 'The base thumb and index form the top V of Y, while your pointer forms the stem.',
    diagramPreset: 'y-crotch-touch',
  },
  {
    letter: 'Z',
    slug: 'letter-z',
    urduPhonetic: 'زیڈ',
    category: 'Consonant',
    handshapeSummary: 'Flat angled dominant hand meets the upright base palm edge at an angle.',
    baseHand: 'Flat open hand held upright.',
    dominantHand: 'Flat hand angled diagonally with fingertips resting against the base palm.',
    movement: 'Hold or lightly tap the angled palm formation.',
    tip: 'Keep both hands flat and crisp so the diagonal Z line reads clearly.',
    diagramPreset: 'z-edge-rest',
  },
];

export const PSL_LESSONS: PSLLesson[] = [
  {
    id: 'lesson-hello',
    slug: 'hello',
    title: 'Hello / Assalam-o-Alaikum',
    urduTitle: 'السلام علیکم',
    transliteration: 'Assalam-o-Alaikum',
    categorySlug: 'greetings',
    categoryName: 'Greetings & Introductions',
    difficulty: 'Beginner',
    duration: '3 min',
    featured: true,
    pastel: 'lavender',
    shortDescription:
      'Greet someone warmly in Pakistan Sign Language with a friendly raised hand or traditional salam.',
    handshape:
      'Open relaxed hand with fingers gently together, palm facing toward your forehead/side of brow for Assalam-o-Alaikum or open palm facing outward for a casual Hello.',
    movement:
      'Raise your dominant hand near the forehead/temple and move it smoothly outward in a gentle arc, accompanied by a warm smile.',
    facialExpression: 'Relaxed eyebrows, open smile, and attentive eye contact.',
    steps: [
      'Make warm eye contact with the person you are greeting.',
      'Bring your open right hand smoothly up near your forehead or upper cheek.',
      'Sweep the hand gently outward and slightly downward in a welcoming arc.',
      'Pair the gesture with a natural smile to convey warmth and respect.',
    ],
    culturalNote:
      'In Pakistan, "Assalam-o-Alaikum" is the most common everyday greeting in both Deaf and hearing communities, often replacing a casual wave in respectful settings.',
    imageUrl: '/src/assets/images/hero_psl_signer_1794742839409.jpg',
    gestureVisual: 'hello',
  },
  {
    id: 'lesson-thank-you',
    slug: 'thank-you',
    title: 'Thank You',
    urduTitle: 'شکریہ',
    transliteration: 'Shukriya',
    categorySlug: 'greetings',
    categoryName: 'Greetings & Introductions',
    difficulty: 'Beginner',
    duration: '3 min',
    featured: true,
    pastel: 'blue',
    shortDescription:
      'Express genuine gratitude clearly by bringing flat fingers from the chin outward toward your listener.',
    handshape: 'Flat open hand with fingers together and palm facing inward toward the chin.',
    movement: 'Touch the fingertips lightly near the chin and glide the hand forward and down toward the listener.',
    facialExpression: 'Warm smile and slight appreciative nod of the head.',
    steps: [
      'Hold your dominant hand flat with all fingers neatly together.',
      'Place the fingertips gently just below your chin or lower lip.',
      'Move your hand forward in one smooth motion toward the person you are thanking.',
      'Add a slight warm nod to reinforce sincerity.',
    ],
    culturalNote:
      'Used daily across homes, classrooms, and workplaces in Pakistan; often paired with "JazakAllah" in community gatherings.',
    imageUrl: '/src/assets/images/demo_psl_greeting_1794742839632.jpg',
    gestureVisual: 'thank-you',
  },
  {
    id: 'lesson-how-are-you',
    slug: 'how-are-you',
    title: 'How Are You?',
    urduTitle: 'آپ کیسے ہیں؟',
    transliteration: 'Aap Kaise Hain?',
    categorySlug: 'greetings',
    categoryName: 'Greetings & Introductions',
    difficulty: 'Beginner',
    duration: '4 min',
    featured: true,
    pastel: 'yellow',
    shortDescription:
      'Ask someone how they are doing by combining the "You" point with an inquisitive open-hand sign.',
    handshape: 'Start with a gentle index point toward the listener ("You"), followed by open palms upturned.',
    movement: 'Point smoothly toward the person, then rotate open hands outward with a questioning lift.',
    facialExpression: 'Slightly raised eyebrows and an attentive questioning expression.',
    steps: [
      'Point gently toward the person with an open index finger ("Aap / You").',
      'Open both hands softly in front of your torso with palms facing upward.',
      'Raise your eyebrows slightly—in PSL, facial grammar marks a question.',
      'Wait attentively for their response before continuing.',
    ],
    culturalNote:
      'In Pakistan Sign Language, raising your eyebrows is essential grammatical information that signals an open question.',
    gestureVisual: 'how-are-you',
  },
  {
    id: 'lesson-good-morning',
    slug: 'good-morning',
    title: 'Good Morning',
    urduTitle: 'صبح بخیر',
    transliteration: 'Subah Bakhair',
    categorySlug: 'greetings',
    categoryName: 'Greetings & Introductions',
    difficulty: 'Beginner',
    duration: '4 min',
    featured: true,
    pastel: 'mint',
    shortDescription:
      'Sign "Good Morning" by combining the sign for Good with the rising-sun motion for Morning.',
    handshape: 'Flat hand for "Good", followed by an open hand rising smoothly upward like the morning sun.',
    movement: 'First signal "Good" (thumbs-up or outward chin gesture), then raise your open hand smoothly from elbow height upward.',
    facialExpression: 'Bright, energetic smile.',
    steps: [
      'Start with the sign for "Good" using a clear, steady hand.',
      'Rest your non-dominant forearm horizontally as the horizon line.',
      'Raise your dominant open palm upward above the forearm like the rising sun.',
      'Keep the movement smooth and unhurried.',
    ],
    culturalNote:
      'Combining a time-of-day visual metaphor (rising sun) with "Good" makes morning, afternoon, and evening signs intuitive for beginners.',
    gestureVisual: 'good-morning',
  },
  {
    id: 'lesson-please',
    slug: 'please',
    title: 'Please',
    urduTitle: 'مہربانی',
    transliteration: 'Meharbani',
    categorySlug: 'greetings',
    categoryName: 'Greetings & Introductions',
    difficulty: 'Beginner',
    duration: '3 min',
    featured: true,
    pastel: 'pink',
    shortDescription:
      'Make polite requests respectfully by placing a flat palm over the chest in a gentle circular motion.',
    handshape: 'Flat open hand with fingers comfortably together, palm facing the chest.',
    movement: 'Place the open palm gently on the center of your chest and rub in one or two slow circles.',
    facialExpression: 'Soft, polite expression with gentle eye contact.',
    steps: [
      'Relax your shoulders and keep your palm flat and open.',
      'Place the flat palm lightly over the center of your chest.',
      'Move your hand in a smooth, gentle circular motion.',
      'Keep your facial expression polite and friendly.',
    ],
    culturalNote:
      'Notice the difference between Please (open flat palm circling on the chest) and Sorry (closed fist circling on the chest).',
    gestureVisual: 'please',
  },
  {
    id: 'lesson-sorry',
    slug: 'sorry',
    title: 'Sorry',
    urduTitle: 'معاف کیجیے',
    transliteration: 'Maaf Kijiye',
    categorySlug: 'greetings',
    categoryName: 'Greetings & Introductions',
    difficulty: 'Beginner',
    duration: '3 min',
    featured: true,
    pastel: 'lavender',
    shortDescription:
      'Apologize sincerely in PSL by circling a closed fist lightly over your chest with an empathetic expression.',
    handshape: 'Dominant hand formed into a soft closed fist, palm side toward the chest.',
    movement: 'Rub the closed fist in a slow, gentle circular motion over the chest.',
    facialExpression: 'Sincere, slightly concerned expression with softened eyebrows.',
    steps: [
      'Form a relaxed, soft fist with your dominant hand.',
      'Bring the fist lightly against the center of your chest.',
      'Trace two slow circles over your heart.',
      'Show genuine regret through your facial expression.',
    ],
    culturalNote:
      'Facial expression carries half the meaning in PSL—an apology signed with a blank face can feel insincere, so match your expression to the message.',
    gestureVisual: 'sorry',
  },
  {
    id: 'lesson-mother',
    slug: 'mother',
    title: 'Mother',
    urduTitle: 'ماں / امی',
    transliteration: 'Maa / Ammi',
    categorySlug: 'family',
    categoryName: 'Family & Relationships',
    difficulty: 'Beginner',
    duration: '3 min',
    pastel: 'pink',
    shortDescription: 'Refer to Mother warmly with a gentle chin-area tap common in PSL family vocabulary.',
    handshape: 'Open relaxed palm or thumb/index gently touching near the chin.',
    movement: 'Tap lightly once or twice near the chin with a warm expression.',
    facialExpression: 'Affectionate, warm smile.',
    steps: [
      'Keep your dominant hand relaxed with fingers lightly extended.',
      'Bring the fingertips or thumb gently to touch the chin area.',
      'Combine with "Father" when signing the compound word for "Parents".',
    ],
    culturalNote:
      'Many PSL family signs distinguish male and female relatives using consistent facial zones around the upper face/mustache line and chin.',
    gestureVisual: 'family-mother',
  },
  {
    id: 'lesson-father',
    slug: 'father',
    title: 'Father',
    urduTitle: 'ابو / والد',
    transliteration: 'Abbu / Walid',
    categorySlug: 'family',
    categoryName: 'Family & Relationships',
    difficulty: 'Beginner',
    duration: '3 min',
    pastel: 'blue',
    shortDescription: 'Sign Father clearly by indicating near the upper lip/mustache line or forehead zone.',
    handshape: 'Index and thumb shaped cleanly near the upper lip or forehead.',
    movement: 'A crisp single touch or short outward stroke along the upper lip/forehead.',
    facialExpression: 'Respectful, calm expression.',
    steps: [
      'Bring your dominant hand comfortably up near the upper lip or forehead.',
      'Make one clean, distinct gesture without covering your mouth.',
      'Keep your hand visible from the front so lip-patterns remain clear.',
    ],
    culturalNote:
      'In Pakistani family context, combining Father and Mother signs smoothly communicates "Walidain" (Parents).',
    gestureVisual: 'family-father',
  },
  {
    id: 'lesson-number-one',
    slug: 'number-one',
    title: 'Number 1 (One)',
    urduTitle: 'ایک (۱)',
    transliteration: 'Aik',
    categorySlug: 'numbers',
    categoryName: 'Numbers (0–100)',
    difficulty: 'Beginner',
    duration: '2 min',
    pastel: 'blue',
    shortDescription: 'Count "One" clearly with a single upright index finger.',
    handshape: 'Index finger extended straight upward, remaining fingers curled gently into the palm.',
    movement: 'Hold steadily at chest or shoulder height facing the listener.',
    facialExpression: 'Neutral and clear.',
    steps: [
      'Curl your middle, ring, and pinky fingers softly into your palm.',
      'Extend your index finger straight upward.',
      'Hold at comfortable chest height so your hand does not block your face.',
    ],
    culturalNote:
      'In PSL, numbers are held slightly to the side of the torso so facial expressions remain clearly visible.',
    gestureVisual: 'number-one',
  },
  {
    id: 'lesson-number-five',
    slug: 'number-five',
    title: 'Number 5 (Five)',
    urduTitle: 'پانچ (۵)',
    transliteration: 'Paanch',
    categorySlug: 'numbers',
    categoryName: 'Numbers (0–100)',
    difficulty: 'Beginner',
    duration: '2 min',
    pastel: 'mint',
    shortDescription: 'Show "Five" with all five fingers open and evenly spread.',
    handshape: 'All five fingers extended and comfortably separated.',
    movement: 'Hold steadily with palm facing outward or slightly angled.',
    facialExpression: 'Clear and attentive.',
    steps: [
      'Open your dominant hand completely.',
      'Spread all five fingers evenly apart.',
      'Hold steadily for a beat before moving to the next word.',
    ],
    culturalNote:
      'Clear finger separation helps distinguish 5 from flat-hand gestures used in greetings or numbers like 10.',
    gestureVisual: 'number-five',
  },
  {
    id: 'lesson-water',
    slug: 'water',
    title: 'Water',
    urduTitle: 'پانی',
    transliteration: 'Paani',
    categorySlug: 'food-and-drinks',
    categoryName: 'Food & Drinks',
    difficulty: 'Beginner',
    duration: '3 min',
    pastel: 'blue',
    shortDescription: 'Ask for or offer water with a natural drinking-cup gesture toward the mouth.',
    handshape: 'Hand curved smoothly as if holding a small glass of water.',
    movement: 'Tilt the curved hand gently toward the lips without touching.',
    facialExpression: 'Neutral or slightly raised eyebrows if asking "Would you like water?"',
    steps: [
      'Curve your fingers and thumb as though holding a glass.',
      'Bring the curved hand near your chin/mouth.',
      'Tilt slightly twice to clearly distinguish "Water" from "Chai / Tea".',
    ],
    culturalNote:
      'Hospitality is central in Pakistani culture—Water and Tea are among the very first food signs learned by beginners.',
    gestureVisual: 'water',
  },
  {
    id: 'lesson-tea',
    slug: 'chai-tea',
    title: 'Tea (Chai)',
    urduTitle: 'چائے',
    transliteration: 'Chai',
    categorySlug: 'food-and-drinks',
    categoryName: 'Food & Drinks',
    difficulty: 'Beginner',
    duration: '3 min',
    pastel: 'yellow',
    shortDescription: 'Offer or ask for Pakistani chai using a delicate teacup-sipping gesture.',
    handshape: 'Thumb and index pinched lightly as if holding a small teacup handle.',
    movement: 'Lift the pinched hand slightly toward the lips in a gentle sipping motion.',
    facialExpression: 'Welcoming smile.',
    steps: [
      'Pinch your dominant thumb and index finger softly as though holding a cup ear.',
      'Bring the hand gracefully near your mouth.',
      'Tilt gently once or twice like taking a warm sip of chai.',
    ],
    culturalNote:
      'Asking "Chai?" with raised eyebrows is a universal warm welcome in Pakistani homes and offices.',
    gestureVisual: 'tea',
  },
  {
    id: 'lesson-school',
    slug: 'school',
    title: 'School',
    urduTitle: 'اسکول',
    transliteration: 'School',
    categorySlug: 'education',
    categoryName: 'Education & School',
    difficulty: 'Beginner',
    duration: '4 min',
    pastel: 'blue',
    shortDescription: 'Sign School using two flat palms brought together in a gentle rhythmic clap.',
    handshape: 'Both hands open and flat, palms facing one another.',
    movement: 'Bring the palms together in two light, clear taps at chest level.',
    facialExpression: 'Engaged and attentive.',
    steps: [
      'Hold your non-dominant hand flat, palm facing upward.',
      'Bring your dominant flat palm down onto it lightly twice.',
      'Keep movements crisp and visible at chest height.',
    ],
    culturalNote:
      'Used daily by teachers and students across Deaf Reach campuses and inclusive schools throughout Pakistan.',
    gestureVisual: 'school',
  },
  {
    id: 'lesson-book',
    slug: 'book',
    title: 'Book',
    urduTitle: 'کتاب',
    transliteration: 'Kitaab',
    categorySlug: 'education',
    categoryName: 'Education & School',
    difficulty: 'Beginner',
    duration: '3 min',
    pastel: 'mint',
    shortDescription: 'Represent Book naturally by opening both flat palms together like pages of a book.',
    handshape: 'Both flat palms pressed together, pinky edges touching.',
    movement: 'Open both hands outward like opening the cover of a book.',
    facialExpression: 'Calm and clear.',
    steps: [
      'Place both flat palms together in front of you.',
      'Keep the pinky sides connected like a book spine.',
      'Open both palms outward evenly so they face upward.',
    ],
    culturalNote:
      'This iconic visual sign is immediately intuitive and pairs naturally with "Read" and "Learn".',
    gestureVisual: 'book',
  },
  {
    id: 'lesson-happy',
    slug: 'happy',
    title: 'Happy',
    urduTitle: 'خوش',
    transliteration: 'Khush',
    categorySlug: 'emotions',
    categoryName: 'Emotions & Feelings',
    difficulty: 'Beginner',
    duration: '3 min',
    pastel: 'pink',
    shortDescription: 'Show happiness by brushing an open hand upward on your chest while smiling warmly.',
    handshape: 'Flat open hand with fingers softly extended.',
    movement: 'Brush upward gently from the lower chest once or twice in an uplifting motion.',
    facialExpression: 'Genuine bright smile and lifted cheeks.',
    steps: [
      'Hold your open palm against your chest.',
      'Brush smoothly upward with an airy, uplifting motion.',
      'Let your smile clearly reflect the positive emotion.',
    ],
    culturalNote:
      'In emotion signs, facial expression and posture work together with hand movement to convey intensity.',
    gestureVisual: 'happy',
  },
  {
    id: 'lesson-green',
    slug: 'green',
    title: 'Green',
    urduTitle: 'سبز',
    transliteration: 'Sabz',
    categorySlug: 'colors-and-objects',
    categoryName: 'Colors & Objects',
    difficulty: 'Intermediate',
    duration: '4 min',
    pastel: 'mint',
    shortDescription: 'Learn the sign for Green, connected visually with plants, nature, and Pakistan’s flag.',
    handshape: 'Open relaxed hand with fingers gently waving upward like growing leaves.',
    movement: 'Move the hand slightly upward with gentle finger wiggle or steady leaf gesture.',
    facialExpression: 'Calm and descriptive.',
    steps: [
      'Hold your dominant hand at chest level with fingers extended.',
      'Raise the hand slightly as if indicating growing leaves.',
      'Pair with context nouns such as tree, leaf, or cloth.',
    ],
    culturalNote:
      'Because PSL connects colors closely to natural visual references, learning nature and clothing signs alongside colors helps reinforce memory.',
    gestureVisual: 'green',
  },
  {
    id: 'lesson-yes',
    slug: 'yes',
    title: 'Yes',
    urduTitle: 'جی ہاں',
    transliteration: 'Jee Haan',
    categorySlug: 'common-expressions',
    categoryName: 'Common Expressions',
    difficulty: 'Beginner',
    duration: '2 min',
    pastel: 'mint',
    shortDescription: 'Agree or confirm clearly using a gentle nodding fist motion paired with a head nod.',
    handshape: 'Closed soft fist held upright at shoulder height.',
    movement: 'Tilt the wrist forward slightly once or twice like a nodding head.',
    facialExpression: 'Affirmative head nod.',
    steps: [
      'Form a relaxed fist with your dominant hand.',
      'Hold it comfortably near shoulder height.',
      'Flex the wrist forward gently while nodding your head.',
    ],
    culturalNote:
      'Head nods and eye contact make affirmation effortless and unmistakable across noisy or quiet rooms alike.',
    gestureVisual: 'yes',
  },
  {
    id: 'lesson-understand',
    slug: 'understand',
    title: 'I Understand',
    urduTitle: 'میں سمجھ گیا',
    transliteration: 'Samajh Aaya',
    categorySlug: 'daily-conversations',
    categoryName: 'Daily Conversations',
    difficulty: 'Intermediate',
    duration: '4 min',
    pastel: 'lavender',
    shortDescription: 'Signal comprehension during conversation by flicking an index finger upward near the temple.',
    handshape: 'Closed hand near the side of the forehead with index finger ready to extend.',
    movement: 'Open the index finger straight up smoothly near the temple like a lightbulb moment.',
    facialExpression: 'Affirmative nod and attentive eyes.',
    steps: [
      'Bring your relaxed fist near the side of your forehead (temple).',
      'Smoothly extend your index finger upward.',
      'Nod slightly to show your conversation partner they can continue.',
    ],
    culturalNote:
      'Pairing "I Understand" with a slight shake of the head communicates "I don’t understand yet — please sign again slowly."',
    gestureVisual: 'understand',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    mode: 'alphabet',
    prompt: 'In the two-handed PSL alphabet, which fingertip of the base hand do you touch to sign the vowel "E"?',
    urduHint: 'دو ہاتھوں والے اشارے میں حرف E کیسے بنتا ہے؟',
    visualType: 'alphabet',
    visualKey: 'E',
    options: [
      { id: 'thumb', label: 'Thumb tip (Vowel A)' },
      { id: 'index', label: 'Index fingertip (Vowel E)' },
      { id: 'middle', label: 'Middle fingertip (Vowel I)' },
      { id: 'pinky', label: 'Pinky fingertip (Vowel U)' },
    ],
    correctOptionId: 'index',
    explanation: 'The five vowels map across the fingertips in sequence: Thumb (A), Index (E), Middle (I), Ring (O), and Pinky (U).',
  },
  {
    id: 'q2',
    mode: 'multiple-choice',
    prompt: 'Which polite PSL sign uses flat fingertips touching the chin and gliding smoothly forward?',
    urduHint: 'ٹھوڑی سے ہاتھ آگے بڑھانے کا اشارہ کس لفظ کے لیے ہے؟',
    visualType: 'lesson',
    visualKey: 'thank-you',
    options: [
      { id: 'sorry', label: 'Sorry', urdu: 'معاف کیجیے' },
      { id: 'thank-you', label: 'Thank You', urdu: 'شکریہ' },
      { id: 'school', label: 'School', urdu: 'اسکول' },
      { id: 'water', label: 'Water', urdu: 'پانی' },
    ],
    correctOptionId: 'thank-you',
    explanation: 'Thank You (شکریہ) begins with flat fingers lightly touching the chin and moving outward toward the listener.',
  },
  {
    id: 'q3',
    mode: 'gesture-id',
    prompt: 'How do "Please" (مہربانی) and "Sorry" (معاف کیجیے) differ on the chest?',
    urduHint: 'مہربانی اور معاف کیجیے کے اشاروں میں کیا فرق ہے؟',
    visualType: 'lesson',
    visualKey: 'sorry',
    options: [
      { id: 'a', label: 'Please uses an open flat palm; Sorry uses a closed fist' },
      { id: 'b', label: 'Please uses two fingers; Sorry uses both hands above the head' },
      { id: 'c', label: 'Please is signed on the forehead; Sorry is signed on the chin' },
      { id: 'd', label: 'They use the exact same handshape' },
    ],
    correctOptionId: 'a',
    explanation: 'Both circle gently on the chest, but Please uses a flat open palm while Sorry uses a soft closed fist paired with a sincere expression.',
  },
  {
    id: 'q4',
    mode: 'alphabet',
    prompt: 'How many extended fingers rest on the open base palm when signing the letter "M" in two-handed PSL?',
    urduHint: 'حرف M کے لیے ہتھیلی پر کتنی انگلیاں رکھی جاتی ہیں؟',
    visualType: 'alphabet',
    visualKey: 'M',
    options: [
      { id: '1', label: '1 finger (Letter L)' },
      { id: '2', label: '2 fingers (Letter N)' },
      { id: '3', label: '3 fingers (Letter M)' },
      { id: '5', label: 'All 5 fingers spread' },
    ],
    correctOptionId: '3',
    explanation: 'Just like the three downward strokes of the letter M, three extended fingers rest neatly across the open non-dominant palm.',
  },
  {
    id: 'q5',
    mode: 'match',
    prompt: 'Match this visual demonstration ("Opening both flat palms together like pages") with its English and Urdu meaning:',
    urduHint: 'اس اشارے کا صحیح مطلب منتخب کریں',
    visualType: 'lesson',
    visualKey: 'book',
    options: [
      { id: 'book', label: 'Book', urdu: 'کتاب' },
      { id: 'happy', label: 'Happy', urdu: 'خوش' },
      { id: 'tea', label: 'Tea (Chai)', urdu: 'چائے' },
      { id: 'yes', label: 'Yes', urdu: 'جی ہاں' },
    ],
    correctOptionId: 'book',
    explanation: 'Opening two pressed flat palms outward along the pinky edge visually represents opening a Book (کتاب).',
  },
  {
    id: 'q6',
    mode: 'vocabulary',
    prompt: 'When asking "How Are You?" (آپ کیسے ہیں؟) in PSL, which facial cue completes the question grammar?',
    urduHint: 'سوالیہ جملے میں چہرے کا تاثر کیسا ہونا چاہیے؟',
    visualType: 'lesson',
    visualKey: 'how-are-you',
    options: [
      { id: 'brows', label: 'Slightly raised eyebrows and attentive eye contact' },
      { id: 'closed', label: 'Looking down away from the listener' },
      { id: 'frown', label: 'Covering your mouth with the non-dominant hand' },
      { id: 'none', label: 'Facial expressions are never used in PSL' },
    ],
    correctOptionId: 'brows',
    explanation: 'Non-manual markers—especially raised eyebrows and clear eye contact—indicate questions naturally in Pakistan Sign Language.',
  },
];
