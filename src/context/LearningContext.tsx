import React, { createContext, useContext, useEffect, useState } from 'react';

export interface LearnerProfile {
  name: string;
  email: string;
  city: string;
  goal: string;
  joinedAt: string;
}

export interface QuizAttempt {
  id: string;
  modeLabel: string;
  score: number;
  total: number;
  date: string;
}

interface LearningState {
  user: LearnerProfile | null;
  completedSlugs: string[];
  recentSlugs: string[];
  quizHistory: QuizAttempt[];
  isSearchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  loginDemo: () => void;
  loginWithCredentials: (name: string, email: string, city?: string) => void;
  logout: () => void;
  toggleComplete: (slug: string) => void;
  markCompleted: (slug: string) => void;
  recordView: (slug: string) => void;
  recordQuizScore: (modeLabel: string, score: number, total: number) => void;
}

const STORAGE_KEY = 'ishara_psl_learner_v1';

const DEFAULT_DEMO_USER: LearnerProfile = {
  name: 'Amina Tariq',
  email: 'amina.tariq@example.pk',
  city: 'Lahore',
  goal: 'Everyday conversational fluency in PSL',
  joinedAt: 'November 2026',
};

const LearningContext = createContext<LearningState | undefined>(undefined);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<LearnerProfile | null>(null);
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([
    'hello',
    'thank-you',
    'letter-a',
    'letter-e',
  ]);
  const [recentSlugs, setRecentSlugs] = useState<string[]>([
    'hello',
    'thank-you',
    'how-are-you',
    'letter-a',
  ]);
  const [quizHistory, setQuizHistory] = useState<QuizAttempt[]>([
    {
      id: 'init-1',
      modeLabel: 'Greetings & Politeness Starter',
      score: 5,
      total: 6,
      date: 'Today',
    },
  ]);
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.user) setUser(parsed.user);
        if (Array.isArray(parsed.completedSlugs)) setCompletedSlugs(parsed.completedSlugs);
        if (Array.isArray(parsed.recentSlugs)) setRecentSlugs(parsed.recentSlugs);
        if (Array.isArray(parsed.quizHistory)) setQuizHistory(parsed.quizHistory);
      }
    } catch {
      // Ignore corrupt local storage
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ user, completedSlugs, recentSlugs, quizHistory })
      );
    } catch {
      // Ignore storage quota issues
    }
  }, [user, completedSlugs, recentSlugs, quizHistory]);

  const loginDemo = () => {
    setUser(DEFAULT_DEMO_USER);
  };

  const loginWithCredentials = (name: string, email: string, city = 'Islamabad') => {
    setUser({
      name: name.trim() || 'PSL Learner',
      email: email.trim(),
      city: city.trim() || 'Pakistan',
      goal: 'Everyday PSL Communication',
      joinedAt: 'November 2026',
    });
  };

  const logout = () => {
    setUser(null);
  };

  const toggleComplete = (slug: string) => {
    setCompletedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]
    );
  };

  const markCompleted = (slug: string) => {
    setCompletedSlugs((prev) => (prev.includes(slug) ? prev : [...prev, slug]));
  };

  const recordView = (slug: string) => {
    setRecentSlugs((prev) => [slug, ...prev.filter((item) => item !== slug)].slice(0, 6));
  };

  const recordQuizScore = (modeLabel: string, score: number, total: number) => {
    const newAttempt: QuizAttempt = {
      id: `quiz-${Date.now()}`,
      modeLabel,
      score,
      total,
      date: new Date().toLocaleDateString('en-PK', { month: 'short', day: 'numeric' }),
    };
    setQuizHistory((prev) => [newAttempt, ...prev].slice(0, 8));
  };

  return (
    <LearningContext.Provider
      value={{
        user,
        completedSlugs,
        recentSlugs,
        quizHistory,
        isSearchOpen,
        setSearchOpen,
        loginDemo,
        loginWithCredentials,
        logout,
        toggleComplete,
        markCompleted,
        recordView,
        recordQuizScore,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export function useLearning() {
  const ctx = useContext(LearningContext);
  if (!ctx) {
    throw new Error('useLearning must be used inside LearningProvider');
  }
  return ctx;
}
