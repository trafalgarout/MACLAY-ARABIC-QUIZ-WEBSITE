export interface QuizQuestion {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  questions: QuizQuestion[];
  category: string;
  difficulty: 'سهل' | 'متوسط' | 'صعب';
  icon: string;
}

export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  quizzesCount: number;
}

export const quizCategories: QuizCategory[] = [
  {
    id: 'general-knowledge',
    name: 'المعرفة العامة',
    description: 'اختبارات متنوعة في المعرفة العامة والثقافة',
    icon: '🧠',
    color: 'from-blue-500 to-blue-600',
    quizzesCount: 30
  },
  {
    id: 'movies',
    name: 'السينما والأفلام',
    description: 'اختبارات حول الأفلام والنجوم والسينما العربية والعالمية',
    icon: '🎬',
    color: 'from-purple-500 to-purple-600',
    quizzesCount: 30
  },
  {
    id: 'history',
    name: 'التاريخ',
    description: 'رحلة عبر التاريخ العربي والإسلامي والعالمي',
    icon: '🏛️',
    color: 'from-amber-500 to-amber-600',
    quizzesCount: 30
  },
  {
    id: 'science',
    name: 'العلوم',
    description: 'اختبارات في الفيزياء والكيمياء والأحياء',
    icon: '🔬',
    color: 'from-green-500 to-green-600',
    quizzesCount: 30
  },
  {
    id: 'sports',
    name: 'الرياضة',
    description: 'كرة القدم والرياضات المختلفة والبطولات العالمية',
    icon: '⚽',
    color: 'from-red-500 to-red-600',
    quizzesCount: 30
  },
  {
    id: 'geography',
    name: 'الجغرافيا',
    description: 'العواصم والدول والمعالم الجغرافية حول العالم',
    icon: '🌍',
    color: 'from-teal-500 to-teal-600',
    quizzesCount: 30
  },
  {
    id: 'literature',
    name: 'الأدب واللغة',
    description: 'الشعر والنثر والأدب العربي والعالمي',
    icon: '📚',
    color: 'from-indigo-500 to-indigo-600',
    quizzesCount: 30
  },
  {
    id: 'technology',
    name: 'التكنولوجيا',
    description: 'أحدث التقنيات والبرمجة والذكاء الاصطناعي',
    icon: '💻',
    color: 'from-cyan-500 to-cyan-600',
    quizzesCount: 30
  },
  {
    id: 'music',
    name: 'الموسيقى',
    description: 'الموسيقى العربية والعالمية والفنانين المشهورين',
    icon: '🎵',
    color: 'from-pink-500 to-pink-600',
    quizzesCount: 30
  },
  {
    id: 'art',
    name: 'الفنون',
    description: 'الرسم والنحت والفنون التشكيلية عبر التاريخ',
    icon: '🎨',
    color: 'from-orange-500 to-orange-600',
    quizzesCount: 30
  },
  {
    id: 'food',
    name: 'الطبخ والطعام',
    description: 'الأطباق العربية والعالمية وفنون الطبخ',
    icon: '🍽️',
    color: 'from-yellow-500 to-yellow-600',
    quizzesCount: 30
  },
  {
    id: 'religion',
    name: 'الدين الإسلامي',
    description: 'القرآن الكريم والسنة النبوية والفقه الإسلامي',
    icon: '☪️',
    color: 'from-emerald-500 to-emerald-600',
    quizzesCount: 30
  },
  {
    id: 'animals',
    name: 'الحيوانات والطبيعة',
    description: 'عالم الحيوانات والنباتات والطبيعة',
    icon: '🦁',
    color: 'from-lime-500 to-lime-600',
    quizzesCount: 30
  },
  {
    id: 'mathematics',
    name: 'الرياضيات',
    description: 'الأرقام والمعادلات والمسائل الرياضية',
    icon: '📊',
    color: 'from-violet-500 to-violet-600',
    quizzesCount: 30
  },
  {
    id: 'politics',
    name: 'السياسة',
    description: 'السياسة العربية والعالمية والأحداث المعاصرة',
    icon: '🏛️',
    color: 'from-slate-500 to-slate-600',
    quizzesCount: 30
  },
  {
    id: 'economy',
    name: 'الاقتصاد',
    description: 'الاقتصاد العالمي والعملات والأسواق المالية',
    icon: '💰',
    color: 'from-yellow-600 to-yellow-700',
    quizzesCount: 30
  },
  {
    id: 'travel',
    name: 'السفر والسياحة',
    description: 'المعالم السياحية والوجهات حول العالم',
    icon: '✈️',
    color: 'from-sky-500 to-sky-600',
    quizzesCount: 30
  },
  {
    id: 'fashion',
    name: 'الموضة والأزياء',
    description: 'عالم الموضة والأزياء والماركات العالمية',
    icon: '👗',
    color: 'from-rose-500 to-rose-600',
    quizzesCount: 30
  },
  {
    id: 'health',
    name: 'الصحة والطب',
    description: 'الصحة العامة والطب والتغذية السليمة',
    icon: '⚕️',
    color: 'from-red-600 to-red-700',
    quizzesCount: 30
  },
  {
    id: 'cars',
    name: 'السيارات',
    description: 'عالم السيارات والماركات والسباقات',
    icon: '🚗',
    color: 'from-gray-500 to-gray-600',
    quizzesCount: 30
  }
];

// Sample quiz data - we'll generate this dynamically
export const sampleQuiz: Quiz = {
  id: 1,
  title: 'اختبار المعرفة العامة الأساسي',
  description: 'اختبر معلوماتك في المعرفة العامة',
  category: 'general-knowledge',
  difficulty: 'متوسط',
  icon: '🧠',
  questions: [
    {
      id: 1,
      question: 'ما هي عاصمة فرنسا؟',
      choices: ['لندن', 'برلين', 'باريس', 'روما', 'مدريد'],
      correctAnswer: 2
    },
    {
      id: 2,
      question: 'كم عدد قارات العالم؟',
      choices: ['5', '6', '7', '8', '9'],
      correctAnswer: 2
    },
    {
      id: 3,
      question: 'ما هو أكبر محيط في العالم؟',
      choices: ['المحيط الأطلسي', 'المحيط الهندي', 'المحيط الهادئ', 'المحيط المتجمد الشمالي', 'البحر الأبيض المتوسط'],
      correctAnswer: 2
    },
    {
      id: 4,
      question: 'في أي عام انتهت الحرب العالمية الثانية؟',
      choices: ['1944', '1945', '1946', '1947', '1948'],
      correctAnswer: 1
    },
    {
      id: 5,
      question: 'ما هو أطول نهر في العالم؟',
      choices: ['نهر النيل', 'نهر الأمازون', 'نهر المسيسيبي', 'نهر اليانغتسي', 'نهر الفولغا'],
      correctAnswer: 0
    },
    {
      id: 6,
      question: 'كم عدد الأيام في السنة الكبيسة؟',
      choices: ['365', '366', '367', '364', '368'],
      correctAnswer: 1
    },
    {
      id: 7,
      question: 'ما هو العنصر الكيميائي الذي رمزه Au؟',
      choices: ['الفضة', 'الذهب', 'الألمنيوم', 'الحديد', 'النحاس'],
      correctAnswer: 1
    },
    {
      id: 8,
      question: 'من هو مؤلف رواية "مئة عام من العزلة"؟',
      choices: ['غابرييل غارسيا ماركيز', 'خورخي لويس بورخيس', 'ماريو فارغاس يوسا', 'إيزابيل الليندي', 'خوليو كورتاثار'],
      correctAnswer: 0
    },
    {
      id: 9,
      question: 'ما هي أصغر دولة في العالم؟',
      choices: ['موناكو', 'سان مارينو', 'الفاتيكان', 'ليختنشتاين', 'مالطا'],
      correctAnswer: 2
    },
    {
      id: 10,
      question: 'كم عدد أسنان الإنسان البالغ؟',
      choices: ['28', '30', '32', '34', '36'],
      correctAnswer: 2
    }
  ]
};