
import { Language, PracticeCategory } from './types';

export const PRACTICE_CONTENT: Record<Language, Record<PracticeCategory, string[]>> = {
  [Language.ENGLISH]: {
    [PracticeCategory.STORIES]: [
      "The quick brown fox jumps over the lazy dog repeatedly to test if the keyboard is working correctly. It is important to practice typing daily to improve speed and accuracy. In the digital age, being able to type fast is a crucial skill for many professions. Whether you are a writer, a programmer, or just someone who uses a computer frequently, enhancing your typing abilities will save time and increase productivity. Remember that consistency is key. Keep pushing your limits, track your progress, and stay motivated. There will be challenges, but the reward of mastering the keyboard is worth the effort." +
      " Many people find that starting slowly and focusing on finger placement helps build muscle memory, which is essential for higher speeds. Think of typing as a physical skill, much like playing an instrument or learning a sport. It takes dedication and patience. Do not get discouraged by early mistakes or slow progress. Celebrate small wins, like hitting a new top speed or achieving a higher accuracy rating. As you continue to practice, you will notice that your hands move more fluidly across the keys without needing to look down. This transition from 'hunting and pecking' to touch typing is a major milestone in your journey. Stay focused, stay determined, and enjoy the process of becoming a more efficient typist. The world is at your fingertips, and mastering this tool is your key to unlocking it effectively. Keep typing, keep striving, and you will eventually reach the speed you desire."
    ],
    [PracticeCategory.LETTERS]: ["a b c d e f g h i j k l m n o p q r s t u v w x y z"],
    [PracticeCategory.NUMBERS]: ["0 1 2 3 4 5 6 7 8 9"]
  },
  [Language.BENGALI]: {
    [PracticeCategory.STORIES]: [
      "আমাদের লক্ষ্য আপনার সফলতা এবং টাইপিং দক্ষতা বৃদ্ধি করা। বাংলা টাইপিং এখন আরও সহজ এবং দ্রুত করা সম্ভব। ক্রমাগত অনুশীলনেই উন্নতি সম্ভব। নিয়মিত টাইপিং চর্চা করলে আপনার আঙ্গুলের গতি বাড়বে এবং ভুলগুলো কমে আসবে। একটি ভালো টাইপিং অভ্যাস গড়ে তুলতে প্রতিদিন অন্তত পনের মিনিট সময় দেওয়া উচিত। টাইপিং শেখা এক ধরণের শিল্প, যা ধৈর্যের দাবি রাখে। প্রাথমিকভাবে গতি কম থাকলেও ঘাবড়াবেন না। আস্তে আস্তে টাইপ করুন, তারপর গতি বাড়ান।" +
      " প্রতিটি নতুন দিন আপনার টাইপিং দক্ষতা অর্জনের পথে এক ধাপ এগিয়ে নিয়ে যাবে। টাইপিংয়ের ক্ষেত্রে আঙুলের পজিশন বা বিন্যাস খুব গুরুত্বপূর্ণ। কিবোর্ডের দিকে না তাকিয়ে টাইপ করার ক্ষমতা অর্জন করাটাই আসল লক্ষ্য। এর জন্য নিয়মিত অনুশীলন প্রয়োজন। আমাদের এই প্ল্যাটফর্মে কাজ করার সময় আপনি আপনার অগ্রগতির হিসেব রাখতে পারবেন। ভুল হওয়ার সম্ভাবনা কমাতে কিবোর্ডের সাথে পরিচিত হওয়াটা জরুরি। মনে রাখবেন, পরিশ্রমের ফল সবসময় মিষ্টি হয়। ধৈর্য ধরে এগিয়ে যান, সফলতা আপনার হাতের মুঠোয়। নিয়মিত চর্চা করলে আপনি খুব শীঘ্রই বাংলা টাইপিংয়ে দক্ষ হয়ে উঠবেন।"
    ],
    [PracticeCategory.LETTERS]: ["অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ", "ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ"],
    [PracticeCategory.NUMBERS]: ["০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯"]
  },
  [Language.SPANISH]: {
    [PracticeCategory.STORIES]: ["La práctica hace al maestro."],
    [PracticeCategory.LETTERS]: ["a b c d e f g h i j k l m n ñ o p q r s t u v w x y z"],
    [PracticeCategory.NUMBERS]: ["0 1 2 3 4 5 6 7 8 9"]
  },
  [Language.FRENCH]: {
    [PracticeCategory.STORIES]: ["La pratique rend parfait."],
    [PracticeCategory.LETTERS]: ["a b c d e f g h i j k l m n o p q r s t u v w x y z"],
    [PracticeCategory.NUMBERS]: ["0 1 2 3 4 5 6 7 8 9"]
  },
  [Language.GERMAN]: {
    [PracticeCategory.STORIES]: ["Übung macht den Meister."],
    [PracticeCategory.LETTERS]: ["a b c d e f g h i j k l m n o p q r s t u v w x y z"],
    [PracticeCategory.NUMBERS]: ["0 1 2 3 4 5 6 7 8 9"]
  },
  [Language.ITALIAN]: {
    [PracticeCategory.STORIES]: ["La pratica rende perfetti."],
    [PracticeCategory.LETTERS]: ["a b c d e f g h i j k l m n o p q r s t u v w x y z"],
    [PracticeCategory.NUMBERS]: ["0 1 2 3 4 5 6 7 8 9"]
  },
  [Language.PORTUGUESE]: {
    [PracticeCategory.STORIES]: ["A prática leva à perfeição."],
    [PracticeCategory.LETTERS]: ["a b c d e f g h i j k l m n o p q r s t u v w x y z"],
    [PracticeCategory.NUMBERS]: ["0 1 2 3 4 5 6 7 8 9"]
  },
  [Language.HINDI]: {
    [PracticeCategory.STORIES]: ["अभ्यास ही सफलता की कुंजी है।"],
    [PracticeCategory.LETTERS]: ["अ आ इ ई उ ऊ ऋ ए ऐ ओ औ", "क ख ग घ ङ च छ ज झ ञ"],
    [PracticeCategory.NUMBERS]: ["० १ २ ३ ४ ५ ६ ७ ८ ९"]
  },
  [Language.RUSSIAN]: {
    [PracticeCategory.STORIES]: ["Практика ведет к совершенству."],
    [PracticeCategory.LETTERS]: ["а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я"],
    [PracticeCategory.NUMBERS]: ["0 1 2 3 4 5 6 7 8 9"]
  },
  [Language.JAPANESE]: {
    [PracticeCategory.STORIES]: ["練習は完璧を作る。"],
    [PracticeCategory.LETTERS]: ["あいうえお かきくけこ さしすせそ"],
    [PracticeCategory.NUMBERS]: ["0 1 2 3 4 5 6 7 8 9"]
  }
};

export const KEYBOARD_LAYOUT = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
  ['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
  ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl']
];
