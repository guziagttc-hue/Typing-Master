import React from 'react';
import { Copy, Check } from 'lucide-react';

const IMSoftworksInfo: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('01753567152');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 p-6 max-w-4xl mx-auto">
      <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">IM Softworks</h2>
        
        <div className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>বাংলা:</strong> IM Softworks একটি উদীয়মান সফটওয়্যার কোম্পানি, যা ভবিষ্যতমুখী প্রযুক্তি ও সৃজনশীল সমাধানের মাধ্যমে ক্লায়েন্টদের ব্যবসায়িক সাফল্যে সহায়তা করে। আমরা বিশ্বাস করি— আমাদের উন্নতি তখনই সম্ভব, যখন আমাদের ক্লায়েন্ট লাভবান হবেন। আমরা শুধু সফটওয়্যার তৈরি করি না — আমরা সম্ভাবনা গড়ে তুলি।
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            <strong>English:</strong> IM Softworks is an emerging software company that empowers clients’ business success through futuristic technology and innovative solutions. We believe that our growth is only possible when our clients benefit. We don’t just build software — We build possibilities.
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">🎯 আমাদের লক্ষ্য (Our Mission)</h3>
        <p className="text-lg italic font-medium text-slate-700 dark:text-slate-300">"আপনার লাভই আমাদের সফলতা।" / "Your profit is our success."</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">🔧 আমাদের সার্ভিসসমূহ (Our Services)</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
            <li>Custom Software Development</li>
            <li>Web Applications</li>
            <li>Mobile Apps</li>
            <li>Cloud Solutions</li>
            <li>API Development</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">💡 About Me</h3>
            <p className="text-slate-700 dark:text-slate-300">Hello, I am Mohammad Esa Ali, a passionate and creative tech enthusiast. I specialize in Software Development, Web Solutions, and Creative Design.</p>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">ডোনেট করুন (সেন্ড মানি)</h3>
        <div className="flex items-center justify-between p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-100 dark:border-emerald-900/50">
            <span className="font-mono text-lg font-bold text-slate-800 dark:text-slate-100">bKash/Nagad: 01753567152</span>
            <button onClick={copyToClipboard} className="flex items-center gap-2 px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                {copied ? <Check size={16}/> : <Copy size={16}/>}
                {copied ? 'কপি হয়েছে' : 'কপি করুন'}
            </button>
        </div>
      </section>
    </div>
  );
};

export default IMSoftworksInfo;
