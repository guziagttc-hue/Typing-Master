
import React from 'react';
import { KEYBOARD_LAYOUT } from '../constants';

interface Props {
  activeKey: string | null;
  targetKey: string | null;
}

const VirtualKeyboard: React.FC<Props> = ({ activeKey, targetKey }) => {
  const getFingerColor = (key: string) => {
    // Basic finger mapping (simplified)
    const leftPinky = ['`', '1', 'Q', 'A', 'Z', 'Tab', 'Caps', 'Shift', 'Ctrl'];
    const leftRing = ['2', 'W', 'S', 'X'];
    const leftMiddle = ['3', 'E', 'D', 'C'];
    const leftIndex = ['4', 'R', 'F', 'V', '5', 'T', 'G', 'B'];
    const space = ['Space'];
    const rightIndex = ['6', 'Y', 'H', 'N', '7', 'U', 'J', 'M'];
    const rightMiddle = ['8', 'I', 'K', ','];
    const rightRing = ['9', 'O', 'L', '.'];
    const rightPinky = ['0', 'P', ';', '/', '-', '=', '[', ']', '\\', "'", 'Enter', 'Backspace', 'Shift'];

    if (leftPinky.includes(key)) return 'bg-blue-200 dark:bg-blue-500/20 border-blue-300 dark:border-blue-500/30';
    if (leftRing.includes(key)) return 'bg-emerald-200 dark:bg-emerald-500/20 border-emerald-300 dark:border-emerald-500/30';
    if (leftMiddle.includes(key)) return 'bg-amber-200 dark:bg-amber-500/20 border-amber-300 dark:border-amber-500/30';
    if (leftIndex.includes(key)) return 'bg-rose-200 dark:bg-rose-500/20 border-rose-300 dark:border-rose-500/30';
    if (space.includes(key)) return 'bg-purple-200 dark:bg-purple-500/20 border-purple-300 dark:border-purple-500/30';
    if (rightIndex.includes(key)) return 'bg-rose-200 dark:bg-rose-500/20 border-rose-300 dark:border-rose-500/30';
    if (rightMiddle.includes(key)) return 'bg-amber-200 dark:bg-amber-500/20 border-amber-300 dark:border-amber-500/30';
    if (rightRing.includes(key)) return 'bg-emerald-200 dark:bg-emerald-500/20 border-emerald-300 dark:border-emerald-500/30';
    if (rightPinky.includes(key)) return 'bg-blue-200 dark:bg-blue-500/20 border-blue-300 dark:border-blue-500/30';
    return 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700';
  };

  const isTarget = (key: string) => {
    if (!targetKey) return false;
    if (key === 'Space') return targetKey === ' ';
    return key.toLowerCase() === targetKey.toLowerCase();
  };

  const isActive = (key: string) => {
    if (!activeKey) return false;
    if (key === 'Space') return activeKey === ' ';
    return key.toLowerCase() === activeKey.toLowerCase();
  };

  return (
    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 space-y-2 select-none">
      {KEYBOARD_LAYOUT.map((row, i) => (
        <div key={i} className="flex justify-center gap-1.5">
          {row.map((key, index) => {
            const active = isActive(key);
            const target = isTarget(key);
            
            let width = 'w-12';
            if (key === 'Backspace') width = 'w-24';
            if (key === 'Tab' || key === 'Enter' || key === 'Caps') width = 'w-20';
            if (key === 'Shift') width = 'w-28';
            if (key === 'Space') width = 'w-80';
            if (key === 'Ctrl' || key === 'Alt') width = 'w-16';

            return (
              <div
                key={`${key}-${index}`}
                className={`
                  ${width} h-12 flex items-center justify-center rounded-lg border text-sm font-bold transition-all duration-75
                  ${active ? 'bg-blue-600 border-blue-400 scale-90 translate-y-1' : ''}
                  ${!active && target ? 'bg-blue-600/30 border-blue-500/50 ring-4 ring-blue-500/20 animate-pulse' : ''}
                  ${!active && !target ? getFingerColor(key) : ''}
                  ${!active && !target ? 'text-slate-400' : ''}
                `}
              >
                {key}
              </div>
            );
          })}
        </div>
      ))}
      <div className="mt-4 flex justify-center gap-8 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div> Target Key</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-400"></div> Static Key</div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;
