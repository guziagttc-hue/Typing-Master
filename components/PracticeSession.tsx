import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PRACTICE_TEXTS } from '../constants';
import { SessionStats, TypingMode } from '../types';
import TypingWarrior from './TypingWarrior';
import { X, RefreshCcw, Volume2, VolumeX } from 'lucide-react';

interface Props {
  bestWpm: number;
  mode: TypingMode;
  limit: number;
  correctColor: string;
  incorrectColor: string;
  onComplete: (stats: SessionStats) => void;
  onExit: () => void;
}

const CharacterSpan = React.memo(({ char, i, userInput, correctColor, incorrectColor }: {
  char: string;
  i: number;
  userInput: string;
  correctColor: string;
  incorrectColor: string;
}) => {
  const isCorrect = userInput[i] === char;
  const hasTyped = i < userInput.length;
  
  const style = hasTyped ? { color: isCorrect ? correctColor : incorrectColor, fontWeight: 'bold' } : {};
  
  if (i === userInput.length) {
    return (
      <span key={i} className="mono text-2xl bg-blue-500/20 text-blue-500 rounded">
        {char}
      </span>
    );
  }

  return (
    <span key={i} className={`mono text-2xl ${hasTyped ? '' : 'text-slate-500 dark:text-slate-500'}`} style={style}>
      {char}
    </span>
  );
});

const PracticeSession: React.FC<Props> = ({ bestWpm, mode, limit, correctColor, incorrectColor, onComplete, onExit }) => {
  const [targetText, setTargetText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [mistakes, setMistakes] = useState<Record<string, number>>({});
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const timerRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef(new Audio('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/one_stop_single_mechanical_typewriter_key_press.mp3'));

  useEffect(() => {
    audioRef.current.volume = 0.2;
  }, []);

  // Initialize text
  useEffect(() => {
    let text = PRACTICE_TEXTS[Math.floor(Math.random() * PRACTICE_TEXTS.length)];
    if (mode === TypingMode.WORDS) {
        text = text.split(' ').slice(0, limit).join(' ');
    }
    setTargetText(text);
    inputRef.current?.focus();
  }, [mode, limit]);

  const calculateWpm = useCallback((chars: number, seconds: number) => {
    if (seconds === 0) return 0;
    return Math.round((chars / 5) / (seconds / 60));
  }, []);

  const calculateAccuracy = useCallback((input: string, target: string) => {
    if (input.length === 0) return 100;
    let correct = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === target[i]) correct++;
    }
    return Math.round((correct / input.length) * 100);
  }, []);

  useEffect(() => {
    if (startTime) {
      if (mode === TypingMode.TIME && elapsed >= limit) {
         if (timerRef.current) clearInterval(timerRef.current);
         onComplete({
             id: Math.random().toString(36).substr(2, 9),
             wpm,
             accuracy,
             date: new Date().toISOString(),
             duration: elapsed,
             mistakes
         });
         return;
      }
      
      timerRef.current = window.setInterval(() => {
        const now = Date.now();
        const diff = (now - startTime) / 1000;
        setElapsed(diff);
        setWpm(calculateWpm(userInput.length, diff));
      }, 1000);
    } 
    
    // Check if word-count based limit reached
    if (mode === TypingMode.WORDS && userInput.length >= targetText.length && targetText.length > 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      onComplete({
        id: Math.random().toString(36).substr(2, 9),
        wpm,
        accuracy,
        date: new Date().toISOString(),
        duration: elapsed,
        mistakes
      });
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTime, userInput.length, targetText.length, wpm, accuracy, elapsed, mistakes, calculateWpm, onComplete, mode, limit]);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    setActiveKey(e.key);
    
    if (!startTime && e.key.length === 1) {
      setStartTime(Date.now());
    }
  };

  const handleKeyUp = () => {
    setActiveKey(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length <= targetText.length) {
      const lastChar = val[val.length - 1];
      const targetChar = targetText[val.length - 1];
      
      if (lastChar !== targetChar) {
        setMistakes(prev => ({
          ...prev,
          [targetChar]: (prev[targetChar] || 0) + 1
        }));
      } else {
        // Correct key press audio
        if (soundEnabled) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        }
      }

      setUserInput(val);
      setAccuracy(calculateAccuracy(val, targetText));
    }
  };

  const renderText = () => {
    return targetText.split('').map((char, i) => (
      <CharacterSpan 
        key={i} 
        char={char} 
        i={i} 
        userInput={userInput} 
        correctColor={correctColor} 
        incorrectColor={incorrectColor} 
      />
    ));
  };

  const reset = () => {
    setUserInput('');
    setStartTime(null);
    setElapsed(0);
    setWpm(0);
    setAccuracy(100);
    setMistakes({});
    const randomText = PRACTICE_TEXTS[Math.floor(Math.random() * PRACTICE_TEXTS.length)];
    setTargetText(randomText);
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div className="bg-white dark:bg-slate-800 px-6 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
             <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest block">Speed</span>
             <span className="text-2xl font-bold text-blue-600">{wpm} WPM</span>
          </div>
          <div className="bg-white dark:bg-slate-800 px-6 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
             <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest block">Accuracy</span>
             <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{accuracy}%</span>
          </div>
          <div className="bg-white dark:bg-slate-800 px-6 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
             <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest block">Time</span>
             <span className="text-2xl font-bold">{Math.floor(elapsed)}s</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors border border-slate-200 dark:border-slate-700"
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          <button 
            onClick={reset}
            className="p-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors border border-slate-200 dark:border-slate-700"
          >
            <RefreshCcw size={20} />
          </button>
          <button 
            onClick={onExit}
            className="p-3 bg-red-100 dark:bg-red-600/20 text-red-600 dark:text-red-500 hover:bg-red-200 dark:hover:bg-red-600/30 rounded-xl transition-colors border border-red-200 dark:border-red-500/50"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <TypingWarrior currentWpm={wpm} bestWpm={bestWpm} progress={userInput.length / targetText.length} />

      <div 
        className="bg-white dark:bg-slate-800/50 p-10 rounded-3xl border-2 border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-2xl relative group cursor-text min-h-[200px]"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="leading-relaxed flex flex-wrap gap-x-0.5">
          {renderText()}
        </div>
        <input
          ref={inputRef}
          type="text"
          className="absolute inset-0 opacity-0 pointer-events-none"
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          autoFocus
        />
      </div>

    </div>
  );
};

export default PracticeSession;
