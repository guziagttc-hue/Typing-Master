
import React, { useState, useEffect } from 'react';
import { AppView, UserProfile, SessionStats, TypingMode } from './types';
import Dashboard from './components/Dashboard';
import PracticeSession from './components/PracticeSession';
import ResultsCard from './components/ResultsCard';
import Settings from './components/Settings';
import IMSoftworksInfo from './components/IMSoftworksInfo';
import Contact from './components/Contact';

const STORAGE_KEY = 'typopro_user_data';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.DASHBOARD);
  const [practiceSettings, setPracticeSettings] = useState<{mode: TypingMode, limit: number}>({mode: TypingMode.TIME, limit: 60});
  const [lastSession, setLastSession] = useState<SessionStats | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    return {
      name: 'Typo Master',
      dailyGoalMinutes: 30,
      targetWpm: 40,
      streak: 0,
      lastActive: new Date().toISOString(),
      history: [],
      bestWpm: 0,
      theme: 'dark',
      correctColor: '#3b82f6',
      incorrectColor: '#ef4444'
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userProfile));
  }, [userProfile]);

  const handleSessionComplete = (stats: SessionStats) => {
    setLastSession(stats);
    setUserProfile(prev => {
      const newHistory = [...prev.history, stats];
      const isNewBest = stats.wpm > prev.bestWpm;
      
      // Streak logic (simplified)
      const today = new Date().toDateString();
      const lastActive = new Date(prev.lastActive).toDateString();
      let newStreak = prev.streak;
      if (lastActive !== today) {
          newStreak += 1;
      }

      return {
        ...prev,
        history: newHistory,
        bestWpm: isNewBest ? stats.wpm : prev.bestWpm,
        lastActive: new Date().toISOString(),
        streak: newStreak
      };
    });
    setView(AppView.RESULT);
  };

  return (
    <div className={`min-h-screen ${userProfile.theme === 'dark' ? 'dark bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'} flex flex-col`}>
      <header className="px-6 py-4 bg-slate-800/50 dark:bg-slate-800/50 backdrop-blur-md border-b border-slate-700 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-xl">T</div>
          <h1 className="text-xl font-bold tracking-tight cursor-pointer" onClick={() => setView(AppView.DASHBOARD)}>TypoPro</h1>
          <button className="text-sm ml-4 hover:text-blue-400" onClick={() => setView(AppView.IM_SOFTWORKS)}>IM Softworks</button>
          <button className="text-sm hover:text-blue-400" onClick={() => setView(AppView.CONTACT)}>Contact us</button>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium px-3 py-1 bg-slate-700 rounded-full">
            🔥 Streak: {userProfile.streak} days
          </div>
          <button 
            onClick={() => setView(AppView.SETTINGS)}
            className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center"
          >
            {userProfile.name[0]}
          </button>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-6 max-w-6xl">
        {view === AppView.DASHBOARD && (
          <Dashboard 
            profile={userProfile} 
            onStart={(mode, limit) => {
                setPracticeSettings({mode, limit});
                setView(AppView.PRACTICE);
            }} 
          />
        )}
        {view === AppView.PRACTICE && (
          <PracticeSession 
            bestWpm={userProfile.bestWpm}
            mode={practiceSettings.mode}
            limit={practiceSettings.limit}
            correctColor={userProfile.correctColor}
            incorrectColor={userProfile.incorrectColor}
            onComplete={handleSessionComplete}
            onExit={() => setView(AppView.DASHBOARD)}
          />
        )}
        {view === AppView.RESULT && lastSession && (
          <ResultsCard 
            stats={lastSession} 
            onRetry={() => setView(AppView.PRACTICE)}
            onBack={() => setView(AppView.DASHBOARD)}
          />
        )}
        {view === AppView.SETTINGS && (
          <Settings
            profile={userProfile}
            onSave={setUserProfile}
            onExit={() => setView(AppView.DASHBOARD)}
          />
        )}
        {view === AppView.IM_SOFTWORKS && (
          <IMSoftworksInfo />
        )}
        {view === AppView.CONTACT && (
          <Contact />
        )}
      </main>

      <footer className="p-4 text-center text-slate-500 text-sm">
        <div className="mb-4 flex justify-center">
            <a href="#" rel="nofollow">
                <img src="https://landings-cdn.adsterratech.com/referralBanners/gif/720x90_adsterra_reff.gif" alt="banner" />
            </a>
        </div>
        <div className="mb-4 flex justify-center">
            <a href="https://www.effectivecpmnetwork.com/w3si925gt4?key=e145bcc7a2e6a3a10b11ffa66c3e7ce1" rel="nofollow" className="text-blue-400 hover:text-blue-300 underline">
                Sponsored Link
            </a>
        </div>
        © 2024 TypoPro - Master the Art of Speed
      </footer>
    </div>
  );
};

export default App;
