

import React from 'react';
import { SessionStats } from '../types';
import { RotateCcw, Home, Award, TrendingUp, AlertTriangle, Share2 } from 'lucide-react';

interface Props {
  stats: SessionStats;
  onRetry: () => void;
  onBack: () => void;
}

const ResultsCard: React.FC<Props> = ({ stats, onRetry, onBack }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'TypoPro Results',
        text: `I just finished a typing session on TypoPro with ${stats.wpm} WPM and ${stats.accuracy}% accuracy!`,
        url: window.location.href,
      }).catch(console.error);
    }
  };

  // ... (topMistakes logic)
  const topMistakes = (Object.entries(stats.mistakes) as [string, number][])
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in slide-in-from-bottom-10 duration-700">
      {/* ... (render content) */}
      <div className="text-center space-y-2">
        <div className="inline-flex p-4 bg-emerald-500/20 rounded-full text-emerald-500 mb-4">
          <Award size={48} />
        </div>
        <h2 className="text-4xl font-bold">Session Complete!</h2>
        <p className="text-slate-500 dark:text-slate-400">Great work! You're making consistent progress.</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 text-center space-y-2">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Final Speed</p>
          <div className="text-5xl font-black text-blue-500">{stats.wpm}</div>
          <p className="text-sm font-medium">Words Per Minute</p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 text-center space-y-2">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Accuracy</p>
          <div className="text-5xl font-black text-emerald-500">{stats.accuracy}%</div>
          <p className="text-sm font-medium">Character Precision</p>
        </div>
      </div>

      <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <TrendingUp size={20} className="text-amber-500" /> Key Insights
        </h3>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-slate-500 dark:text-slate-400">Time Taken</span>
            <span className="font-bold">{Math.round(stats.duration)} seconds</span>
          </div>
          <div className="space-y-3">
             <div className="flex items-center gap-2 text-red-400 text-sm font-bold">
               <AlertTriangle size={16} /> Troublesome Keys
             </div>
             {topMistakes.length > 0 ? (
               <div className="flex gap-4">
                 {topMistakes.map(([key, count]) => (
                   <div key={key} className="flex-1 bg-slate-200 dark:bg-slate-900 p-4 rounded-xl border border-slate-300 dark:border-slate-700 flex flex-col items-center">
                      <span className="text-2xl font-black text-slate-900 dark:text-slate-100">{key === ' ' ? 'SPC' : key}</span>
                      <span className="text-[10px] uppercase text-red-500 mt-1">{count} Errors</span>
                   </div>
                 ))}
               </div>
             ) : (
               <p className="text-slate-500 text-sm italic">Flawless performance! No mistakes detected.</p>
             )}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button 
          onClick={onRetry}
          className="flex-[2] bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all transform active:scale-95"
        >
          <RotateCcw size={20} /> Try Again
        </button>
        <button 
          onClick={handleShare}
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all transform active:scale-95"
        >
          <Share2 size={20} /> Share
        </button>
        <button 
          onClick={onBack}
          className="flex-1 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold py-4 rounded-2xl border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2 transition-all transform active:scale-95"
        >
          <Home size={20} /> Dashboard
        </button>
      </div>
    </div>
  );
};

export default ResultsCard;
