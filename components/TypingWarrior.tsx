
import React from 'react';
import { Trophy, Ghost, Zap } from 'lucide-react';

interface Props {
  currentWpm: number;
  bestWpm: number;
  progress: number;
}

const TypingWarrior: React.FC<Props> = ({ currentWpm, bestWpm, progress }) => {
  // Speed is relative to a reasonable max (say 120 WPM)
  const speedScale = Math.min(currentWpm / 120, 1);
  const ghostPosition = bestWpm > 0 ? (Math.min(bestWpm / 120, 1) * 100) : 0;
  
  return (
    <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 overflow-hidden relative">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-slate-400 flex items-center gap-2">
          <Zap size={14} className="text-amber-500 dark:text-amber-400" /> Typing Warrior Arena
        </h4>
        <div className="flex gap-4">
           <div className="flex items-center gap-1 text-[10px] text-slate-500">
             <div className="w-2 h-2 rounded bg-blue-500"></div> You
           </div>
           {bestWpm > 0 && (
             <div className="flex items-center gap-1 text-[10px] text-slate-500">
               <div className="w-2 h-2 rounded bg-slate-600"></div> Personal Best
             </div>
           )}
        </div>
      </div>

      <div className="h-20 bg-slate-900/50 rounded-xl relative border border-slate-700/50 overflow-hidden">
        {/* Track Lines */}
        <div className="absolute inset-0 flex flex-col justify-evenly opacity-10">
           <div className="w-full h-[1px] bg-slate-100"></div>
           <div className="w-full h-[1px] bg-slate-100"></div>
        </div>

        {/* Ghost Mode Runner */}
        {bestWpm > 0 && (
          <div 
            className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000 ease-linear flex flex-col items-center opacity-40"
            style={{ left: `${progress * 100}%`, transform: `translate(-50%, -50%)` }}
          >
            <Ghost size={24} className="text-slate-400" />
            <span className="text-[10px] font-bold mt-1">{bestWpm}</span>
          </div>
        )}

        {/* Player Runner */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 transition-all duration-150 ease-out flex flex-col items-center"
          style={{ left: `${progress * 100}%`, transform: `translate(-50%, -50%)` }}
        >
          <div className="relative">
            <div className={`p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-500/50 ${currentWpm > 60 ? 'animate-bounce' : ''}`}>
               <Zap size={20} className="text-white" fill="currentColor" />
            </div>
            {currentWpm > 80 && (
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex gap-1">
                 <div className="w-2 h-1 bg-blue-400/50 rounded-full animate-ping"></div>
              </div>
            )}
          </div>
          <span className="text-[10px] font-black mt-1 text-blue-400">{currentWpm} WPM</span>
        </div>

        {/* Finish Line */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-emerald-500/20 border-l border-emerald-500/50 flex flex-col items-center justify-center">
           <Trophy size={12} className="text-emerald-500" />
        </div>
      </div>
    </div>
  );
};

export default TypingWarrior;
