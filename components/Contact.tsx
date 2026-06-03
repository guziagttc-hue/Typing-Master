import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Contact Us</h2>
      <p className="text-lg text-slate-700 dark:text-slate-300">
        Feel free to connect with us at:
      </p>
      <a href="mailto:im.softwark.team@gmail.com" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
        Email us at im.softwark.team@gmail.com
      </a>
    </div>
  );
};

export default Contact;
