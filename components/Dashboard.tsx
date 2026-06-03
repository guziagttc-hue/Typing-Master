
import React, { useState } from 'react';
import { UserProfile, TypingMode } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Play, Target, Zap, Clock, Type } from 'lucide-react';

interface Props {
  profile: UserProfile;
  onStart: (mode: TypingMode, limit: number) => void;
}

const Dashboard: React.FC<Props> = ({ profile, onStart }) => {
  const [mode, setMode] = useState<TypingMode>(TypingMode.TIME);
  const [limit, setLimit] = useState<number>(60);
  const chartData = profile.history.slice(-7).map(session => ({
    date: new Date(session.date).toLocaleDateString('en-US', { weekday: 'short' }),
    wpm: session.wpm,
    acc: session.accuracy
  }));

  const avgWpm = chartData.length > 0 
    ? Math.round(chartData.reduce((acc, curr) => acc + curr.wpm, 0) / chartData.length)
    : 0;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl flex flex-col items-center justify-center text-center space-y-4">
          <div className="p-4 bg-blue-600/20 rounded-full text-blue-600 dark:text-blue-500">
            <Zap size={32} />
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm uppercase font-bold tracking-wider">Avg Speed</p>
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white">{avgWpm} <span className="text-xl text-slate-600 dark:text-slate-400 font-normal">WPM</span></h2>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl flex flex-col items-center justify-center text-center space-y-4">
          <div className="p-4 bg-emerald-600/20 rounded-full text-emerald-600 dark:text-emerald-500">
            <Target size={32} />
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm uppercase font-bold tracking-wider">Best Speed</p>
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white">{profile.bestWpm} <span className="text-xl text-slate-600 dark:text-slate-400 font-normal">WPM</span></h2>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl flex flex-col items-center justify-center text-center space-y-4">
          <div className="p-4 bg-amber-600/20 rounded-full text-amber-600 dark:text-amber-500">
            <Clock size={32} />
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm uppercase font-bold tracking-wider">Daily Goal</p>
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white">{profile.dailyGoalMinutes} <span className="text-xl text-slate-600 dark:text-slate-400 font-normal">MIN</span></h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Zap size={20} className="text-blue-600 dark:text-blue-500" /> Performance Trend (Last 7 Days)
          </h3>
          <div className="h-64 w-full">
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
                  <XAxis dataKey="date" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px' }}
                    itemStyle={{ color: '#0f172a' }}
                  />
                  <Line type="monotone" dataKey="wpm" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-500 italic">
                No sessions completed yet. Start practicing to see your progress!
              </div>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl flex flex-col justify-center space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">Ready to Train?</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Improve your speed with personalized exercises.</p>
            
            <div className="flex gap-2 mb-4">
              <button 
                onClick={() => { setMode(TypingMode.TIME); setLimit(60); }}
                className={`flex-1 py-2 rounded-lg text-sm font-bold ${mode === TypingMode.TIME ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}`}
              >Time</button>
              <button 
                onClick={() => { setMode(TypingMode.WORDS); setLimit(50); }}
                className={`flex-1 py-2 rounded-lg text-sm font-bold ${mode === TypingMode.WORDS ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}`}
              >Words</button>
            </div>
            
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 rounded-lg p-2">
                <Type size={16} className="text-slate-500" />
                <input type="number" 
                    value={limit}
                    onChange={(e) => setLimit(Number(e.target.value))}
                    className="bg-transparent border-none w-full outline-none text-right font-bold text-lg text-slate-800 dark:text-white"
                />
                <span className="text-slate-500 text-xs font-bold">{mode === TypingMode.TIME ? 'SEC' : 'WORDS'}</span>
            </div>
          </div>

          <button 
            onClick={() => onStart(mode, limit)}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group transform active:scale-95"
          >
            <Play fill="currentColor" size={20} />
            Start Practice
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
