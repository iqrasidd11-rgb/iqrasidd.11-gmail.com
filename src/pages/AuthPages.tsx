import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff, Info } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export const LoginPage: React.FC = () => {
  const { loginWithCredentials, loginDemo } = useLearning();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 4) {
      setError('Please enter a password of at least 4 characters.');
      return;
    }
    const derivedName = email.split('@')[0].replace(/[._-]/g, ' ');
    const formattedName = derivedName.replace(/\b\w/g, (c) => c.toUpperCase());
    loginWithCredentials(formattedName, email);
    navigate('/dashboard');
  };

  const handleDemoLogin = () => {
    loginDemo();
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-14 sm:py-20">
      <div className="bg-white rounded-[2rem] border border-[#202020]/10 p-7 sm:p-9 space-y-6 shadow-sm">
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#202020]">
            Welcome Back
          </h1>
          <p className="text-sm text-[#5C5954]">
            Sign in to view your completed PSL lessons, quiz scores, and badges.
          </p>
        </div>

        <div className="rounded-2xl bg-[#E6F4FA] border border-[#A9D2E6] p-3.5 text-xs text-[#202020] flex items-start gap-2.5">
          <Info className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Learner profiles and progress are stored locally in your browser session so you can explore the full dashboard immediately.
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {error && (
            <div role="alert" className="rounded-xl bg-[#FAEAEC] border border-[#E5B8BE] p-3 text-xs font-medium text-[#202020]">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label htmlFor="login-email" className="block text-xs font-semibold text-[#202020]">
              Email Address
            </label>
            <input
              id="login-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setError('');
                setEmail(e.target.value);
              }}
              placeholder="amina@example.pk"
              className="w-full px-4 py-3 rounded-xl border border-[#202020]/20 bg-[#F8F3E9]/60 text-sm text-[#202020] focus:bg-white focus:outline-none focus:border-[#202020]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="login-password" className="block text-xs font-semibold text-[#202020]">
              Password
            </label>
            <div className="relative">
              <input
                id="login-password"
                type={showPass ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => {
                  setError('');
                  setPassword(e.target.value);
                }}
                placeholder="Enter your password"
                className="w-full px-4 py-3 pr-11 rounded-xl border border-[#202020]/20 bg-[#F8F3E9]/60 text-sm text-[#202020] focus:bg-white focus:outline-none focus:border-[#202020]"
              />
              <button
                type="button"
                onClick={() => setShowPass((s) => !s)}
                aria-label={showPass ? 'Hide password' : 'Show password'}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5C5954] hover:text-[#202020] p-1"
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-5 rounded-full bg-[#202020] text-white text-sm font-semibold hover:bg-[#383838] transition-colors"
          >
            Login to Dashboard
          </button>
        </form>

        <div className="relative py-1 flex items-center">
          <div className="flex-grow border-t border-[#202020]/10" />
          <span className="px-3 text-xs text-[#5C5954]">or</span>
          <div className="flex-grow border-t border-[#202020]/10" />
        </div>

        <button
          type="button"
          onClick={handleDemoLogin}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#DCCDF4] text-[#202020] text-sm font-semibold border border-[#202020]/15 hover:bg-[#cfbcea] transition-colors"
        >
          Continue as Demo Learner (Amina)
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>

        <p className="text-center text-xs text-[#5C5954]">
          New to Ishara?{' '}
          <Link to="/signup" className="font-semibold text-[#202020] underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export const SignUpPage: React.FC = () => {
  const { loginWithCredentials } = useLearning();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Lahore');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 4) {
      setError('Please choose a password with at least 4 characters.');
      return;
    }
    loginWithCredentials(name, email, city);
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-14 sm:py-20">
      <div className="bg-white rounded-[2rem] border border-[#202020]/10 p-7 sm:p-9 space-y-6 shadow-sm">
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#202020]">
            Start Your PSL Journey
          </h1>
          <p className="text-sm text-[#5C5954]">
            Create a free learner profile to track completed signs, quiz accuracy, and study streaks.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {error && (
            <div role="alert" className="rounded-xl bg-[#FAEAEC] border border-[#E5B8BE] p-3 text-xs font-medium text-[#202020]">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label htmlFor="signup-name" className="block text-xs font-semibold text-[#202020]">
              Full Name
            </label>
            <input
              id="signup-name"
              type="text"
              required
              value={name}
              onChange={(e) => {
                setError('');
                setName(e.target.value);
              }}
              placeholder="e.g. Bilal Ahmed"
              className="w-full px-4 py-3 rounded-xl border border-[#202020]/20 bg-[#F8F3E9]/60 text-sm text-[#202020] focus:bg-white focus:outline-none focus:border-[#202020]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="signup-email" className="block text-xs font-semibold text-[#202020]">
              Email Address
            </label>
            <input
              id="signup-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setError('');
                setEmail(e.target.value);
              }}
              placeholder="bilal@example.pk"
              className="w-full px-4 py-3 rounded-xl border border-[#202020]/20 bg-[#F8F3E9]/60 text-sm text-[#202020] focus:bg-white focus:outline-none focus:border-[#202020]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="signup-city" className="block text-xs font-semibold text-[#202020]">
              City (Optional)
            </label>
            <input
              id="signup-city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Lahore, Karachi, Islamabad..."
              className="w-full px-4 py-3 rounded-xl border border-[#202020]/20 bg-[#F8F3E9]/60 text-sm text-[#202020] focus:bg-white focus:outline-none focus:border-[#202020]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="signup-password" className="block text-xs font-semibold text-[#202020]">
              Password
            </label>
            <input
              id="signup-password"
              type="password"
              required
              value={password}
              onChange={(e) => {
                setError('');
                setPassword(e.target.value);
              }}
              placeholder="Minimum 4 characters"
              className="w-full px-4 py-3 rounded-xl border border-[#202020]/20 bg-[#F8F3E9]/60 text-sm text-[#202020] focus:bg-white focus:outline-none focus:border-[#202020]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-5 rounded-full bg-[#202020] text-white text-sm font-semibold hover:bg-[#383838] transition-colors"
          >
            Create Learner Account
          </button>
        </form>

        <p className="text-center text-xs text-[#5C5954]">
          Already have a profile?{' '}
          <Link to="/login" className="font-semibold text-[#202020] underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};
