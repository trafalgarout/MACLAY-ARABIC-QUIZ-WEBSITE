"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizComponent from "@/components/QuizComponent";
import QuizResults from "@/components/QuizResults";
import AdSense from "@/components/AdSense";
import { quizCategories, sampleQuiz, QuizQuestion } from "@/data/quiz-categories";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Target, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function QuizPage() {
  const params = useParams();
  const categoryId = params.categoryId as string;
  const quizId = params.quizId as string;
  
  const [quizState, setQuizState] = useState<'intro' | 'active' | 'completed'>('intro');
  const [quizResults, setQuizResults] = useState<{
    score: number;
    answers: number[];
    timeSpent: number;
  } | null>(null);

  const category = quizCategories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-quiz-dark mb-4">الاختبار غير موجود</h1>
          <Link href="/categories">
            <Button className="bg-quiz-gradient text-white">
              العودة للفئات
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Generate quiz questions dynamically based on category
  const generateQuestions = (): QuizQuestion[] => {
    const questionTemplates = {
      'general-knowledge': [
        { q: 'ما هي عاصمة فرنسا؟', choices: ['لندن', 'برلين', 'باريس', 'روما', 'مدريد'], correct: 2 },
        { q: 'كم عدد قارات العالم؟', choices: ['5', '6', '7', '8', '9'], correct: 2 },
        { q: 'ما هو أكبر محيط في العالم؟', choices: ['الأطلسي', 'الهندي', 'الهادئ', 'المتجمد الشمالي', 'المتوسط'], correct: 2 },
        { q: 'في أي عام انتهت الحرب العالمية الثانية؟', choices: ['1944', '1945', '1946', '1947', '1948'], correct: 1 },
        { q: 'ما هو أطول نهر في العالم؟', choices: ['النيل', 'الأمازون', 'المسيسيبي', 'اليانغتسي', 'الفولغا'], correct: 0 },
        { q: 'كم عدد الأيام في السنة الكبيسة؟', choices: ['365', '366', '367', '364', '368'], correct: 1 },
        { q: 'ما هو العنصر الكيميائي الذي رمزه Au؟', choices: ['الفضة', 'الذهب', 'الألمنيوم', 'الحديد', 'النحاس'], correct: 1 },
        { q: 'ما هي أصغر دولة في العالم؟', choices: ['موناكو', 'سان مارينو', 'الفاتيكان', 'ليختنشتاين', 'مالطا'], correct: 2 },
        { q: 'كم عدد أسنان الإنسان البالغ؟', choices: ['28', '30', '32', '34', '36'], correct: 2 },
        { q: 'ما هو أعلى جبل في العالم؟', choices: ['كيليمانجارو', 'إفرست', 'دينالي', 'أكونكاجوا', 'مونت بلانك'], correct: 1 }
      ],
      'movies': [
        { q: 'من أخرج فيلم "التيتانيك"؟', choices: ['ستيفن سبيلبرغ', 'جيمس كاميرون', 'مارتن سكورسيزي', 'كريستوفر نولان', 'ريدلي سكوت'], correct: 1 },
        { q: 'في أي عام صدر فيلم "كازابلانكا"؟', choices: ['1940', '1942', '1944', '1946', '1948'], correct: 1 },
        { q: 'من هو بطل فيلم "فورست غامب"؟', choices: ['براد بيت', 'توم هانكس', 'ويل سميث', 'روبن ويليامز', 'جونني ديب'], correct: 1 },
        { q: 'كم عدد أفلام "هاري بوتر"؟', choices: ['6', '7', '8', '9', '10'], correct: 2 },
        { q: 'من أخرج ثلاثية "سيد الخواتم"؟', choices: ['جورج لوكاس', 'بيتر جاكسون', 'ستيفن سبيلبرغ', 'كوينتن تارانتينو', 'جيمس كاميرون'], correct: 1 },
        { q: 'في أي فيلم ظهر الجملة الشهيرة "قد تكون القوة معك"؟', choices: ['ستار تريك', 'حرب النجوم', 'حارس المجرة', 'المصفوفة', 'أفاتار'], correct: 1 },
        { q: 'من هو صوت شخصية "وودي" في أفلام "قصة لعبة"؟', choices: ['توم هانكس', 'تيم ألين', 'روبن ويليامز', 'إدي مورفي', 'جيم كاري'], correct: 0 },
        { q: 'كم مرة فاز فيلم "تيتانيك" بجائزة الأوسكار؟', choices: ['9', '10', '11', '12', '13'], correct: 2 },
        { q: 'من هو مخرج فيلم "الأب الروحي"؟', choices: ['مارتن سكورسيزي', 'فرانسيس فورد كوبولا', 'برايان دي بالما', 'سيرجيو ليون', 'سام بيكينباه'], correct: 1 },
        { q: 'في أي عام صدر أول فيلم لـ "حرب النجوم"؟', choices: ['1975', '1976', '1977', '1978', '1979'], correct: 2 }
      ],
      // Add more categories as needed...
    };

    const templates = questionTemplates[categoryId as keyof typeof questionTemplates] || questionTemplates['general-knowledge'];
    
    return templates.map((template, index) => ({
      id: index + 1,
      question: template.q,
      choices: template.choices,
      correctAnswer: template.correct
    }));
  };

  const quizQuestions = generateQuestions();
  const quizTitle = `${category.name} - اختبار ${quizId}`;

  const handleQuizComplete = (score: number, answers: number[], timeSpent: number) => {
    setQuizResults({ score, answers, timeSpent });
    setQuizState('completed');
  };

  const handleRetake = () => {
    setQuizState('intro');
    setQuizResults(null);
  };

  const startQuiz = () => {
    setQuizState('active');
  };

  if (quizState === 'completed' && quizResults) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* AdSense Slot 1 */}
        <AdSense slot="1" />
        
        <div className="container mx-auto px-4 py-8">
          <QuizResults
            score={quizResults.score}
            totalQuestions={quizQuestions.length}
            answers={quizResults.answers}
            questions={quizQuestions}
            timeSpent={quizResults.timeSpent}
            quizTitle={quizTitle}
            categoryId={categoryId}
            onRetake={handleRetake}
          />
        </div>

        {/* AdSense Slot 2 */}
        <AdSense slot="2" />
        
        {/* AdSense Slot 3 */}
        <AdSense slot="3" />

        <Footer />
      </div>
    );
  }

  if (quizState === 'active') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* AdSense Slot 1 */}
        <AdSense slot="1" />
        
        <div className="container mx-auto px-4 py-8">
          <QuizComponent
            questions={quizQuestions}
            onComplete={handleQuizComplete}
            title={quizTitle}
          />
        </div>

        {/* AdSense Slot 2 */}
        <AdSense slot="2" />

        <Footer />
      </div>
    );
  }

  // Quiz Introduction
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* AdSense Slot 1 */}
      <AdSense slot="1" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Quiz Header */}
          <Card className="mb-6 border-0 shadow-xl">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">{category.icon}</div>
              <CardTitle className="text-3xl font-bold text-quiz-dark mb-2">
                {quizTitle}
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                اختبر معرفتك في {category.name} مع هذا الاختبار الشيق
              </p>
            </CardHeader>
          </Card>

          {/* AdSense Slot 2 */}
          <AdSense slot="2" />

          {/* Quiz Info */}
          <Card className="mb-6 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-quiz-dark">
                معلومات الاختبار
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <BookOpen className="h-6 w-6 text-quiz-blue" />
                  <div>
                    <div className="font-semibold text-quiz-dark">عدد الأسئلة</div>
                    <div className="text-muted-foreground">{quizQuestions.length} سؤال</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Clock className="h-6 w-6 text-quiz-green" />
                  <div>
                    <div className="font-semibold text-quiz-dark">الوقت المتوقع</div>
                    <div className="text-muted-foreground">5-10 دقائق</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Target className="h-6 w-6 text-quiz-red" />
                  <div>
                    <div className="font-semibold text-quiz-dark">الخيارات</div>
                    <div className="text-muted-foreground">5 خيارات لكل سؤال</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Users className="h-6 w-6 text-purple-600" />
                  <div>
                    <div className="font-semibold text-quiz-dark">المشاركين</div>
                    <div className="text-muted-foreground">{Math.floor(Math.random() * 1000) + 500}+ شخص</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AdSense Slot 3 */}
          <AdSense slot="3" />

          {/* Instructions */}
          <Card className="mb-6 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-quiz-dark">
                تعليمات الاختبار
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2 space-x-reverse">
                  <span className="flex-shrink-0 w-2 h-2 bg-quiz-blue rounded-full mt-2"></span>
                  <span>اقرأ كل سؤال بعناية قبل اختيار الإجابة</span>
                </li>
                <li className="flex items-start space-x-2 space-x-reverse">
                  <span className="flex-shrink-0 w-2 h-2 bg-quiz-blue rounded-full mt-2"></span>
                  <span>لكل سؤال إجابة واحدة صحيحة فقط</span>
                </li>
                <li className="flex items-start space-x-2 space-x-reverse">
                  <span className="flex-shrink-0 w-2 h-2 bg-quiz-blue rounded-full mt-2"></span>
                  <span>يمكنك التنقل بين الأسئلة والعودة لتعديل إجاباتك</span>
                </li>
                <li className="flex items-start space-x-2 space-x-reverse">
                  <span className="flex-shrink-0 w-2 h-2 bg-quiz-blue rounded-full mt-2"></span>
                  <span>لا يوجد حد زمني للاختبار، خذ وقتك</span>
                </li>
                <li className="flex items-start space-x-2 space-x-reverse">
                  <span className="flex-shrink-0 w-2 h-2 bg-quiz-blue rounded-full mt-2"></span>
                  <span>ستحصل على النتيجة فور انتهائك من الاختبار</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* AdSense Slot 4 */}
          <AdSense slot="4" />

          {/* Start Button */}
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-8 text-center">
              <Button 
                onClick={startQuiz}
                size="lg"
                className="bg-quiz-gradient text-white px-12 py-4 text-lg font-semibold"
              >
                ابدأ الاختبار الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                بالضغط على "ابدأ الاختبار" فإنك توافق على شروط الاستخدام
              </p>
            </CardContent>
          </Card>

          {/* AdSense Slot 5 */}
          <AdSense slot="5" />

          {/* Navigation */}
          <div className="mt-8 text-center">
            <Link href={`/category/${categoryId}`}>
              <Button variant="outline" className="flex items-center space-x-2 space-x-reverse mx-auto">
                <ArrowLeft className="h-4 w-4 rotate-180" />
                <span>العودة لقائمة الاختبارات</span>
              </Button>
            </Link>
          </div>

          {/* AdSense Slot 6 */}
          <AdSense slot="6" />
        </div>
      </div>

      <Footer />
    </div>
  );
}