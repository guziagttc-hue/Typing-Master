
import React, { useState } from 'react';
import { UserProfile } from '../types';
import { Save, ArrowLeft } from 'lucide-react';

interface Props {
  profile: UserProfile;
  onSave: (updatedProfile: UserProfile) => void;
  onExit: () => void;
}

const Settings: React.FC<Props> = ({ profile, onSave, onExit }) => {
  const [name, setName] = useState(profile.name);
  const [goal, setGoal] = useState(profile.dailyGoalMinutes);
  const [theme, setTheme] = useState(profile.theme);
  const [correctColor, setCorrectColor] = useState(profile.correctColor || '#22c55e'); // Default green-500
  const [incorrectColor, setIncorrectColor] = useState(profile.incorrectColor || '#ef4444'); // Default red-500

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...profile, name, dailyGoalMinutes: goal, theme, correctColor, incorrectColor });
    onExit();
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl max-w-lg mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onExit} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg">
          <ArrowLeft />
        </button>
        <h2 className="text-2xl font-bold">Profile Settings</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Display Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Daily Goal (minutes)</label>
          <input 
            type="number" 
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Theme</label>
          <div className="flex gap-4">
             <button type="button" onClick={() => setTheme('light')} className={`flex-1 py-2 rounded-lg ${theme === 'light' ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700'}`}>Light</button>
             <button type="button" onClick={() => setTheme('dark')} className={`flex-1 py-2 rounded-lg ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700'}`}>Dark</button>
          </div>
        </div>
        <div className="flex gap-4">
           <div className="flex-1">
             <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Correct Color</label>
             <input type="color" value={correctColor} onChange={(e) => setCorrectColor(e.target.value)} className="w-full h-10 rounded-lg cursor-pointer" />
           </div>
           <div className="flex-1">
             <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Incorrect Color</label>
             <input type="color" value={incorrectColor} onChange={(e) => setIncorrectColor(e.target.value)} className="w-full h-10 rounded-lg cursor-pointer" />
           </div>
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
        >
          <Save size={20} /> Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
