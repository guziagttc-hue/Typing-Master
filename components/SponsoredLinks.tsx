import React from 'react';
import { AppView } from '../types';

interface Props {
  onStartPractice: () => void;
}

const SponsoredLinks: React.FC<Props> = ({ onStartPractice }) => {
  return (
    <div className="p-8 max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-6">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Sponsored Ads</h2>
        <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-lg flex justify-center">
            <a href="#" rel="nofollow">
                <img src="https://landings-cdn.adsterratech.com/referralBanners/gif/720x90_adsterra_reff.gif" alt="banner" />
            </a>
        </div>
        <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-lg flex justify-center">
            <a href="https://www.effectivecpmnetwork.com/w3si925gt4?key=e145bcc7a2e6a3a10b11ffa66c3e7ce1" rel="nofollow" target="_blank" className="text-blue-400 hover:text-blue-300 underline text-center block">
                Click here for Sponsored Link
            </a>
        </div>
        <button 
          onClick={onStartPractice}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
        >
          Start Practice
        </button>
    </div>
  );
};

export default SponsoredLinks;
