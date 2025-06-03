"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { QuizQuestion } from "@/data/quiz-categories";
import { 
  Trophy, 
  Target, 
  Clock, 
  Share2, 
  RotateCcw, 
  Home,
  CheckCircle, 
  XCircle,
  Star,
  Medal,
  Award,
  Zap
} from "lucide-react";
import Link from "next/link";
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon
} from "react-share";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  answers: number[];
  questions: QuizQuestion[];
  timeSpent: number;
  quizTitle: string;
  categoryId: string;
  onRetake: () => void;
}

export default function QuizResults({
  score,
  totalQuestions,
  answers,
  questions,
  timeSpent,
  quizTitle,
  categoryId,
  onRetake
}: QuizResultsProps) {
  const [showDetails, setShowDetails] = useState(false);

  const percentage = Math.round((score / totalQuestions) * 100);
  const averageTimePerQuestion = Math.round(timeSpent / totalQuestions);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getPerformanceLevel = () => {
    if (percentage >= 90) return { level: "ممتاز", icon: Trophy, color: "text-yellow-500", bg: "bg-yellow-50" };
    if (percentage >= 80) return { level: "جيد جداً", icon: Medal, color: "text-blue-500", bg: "bg-blue-50" };
    if (percentage >= 70) return { level: "جيد", icon: Award, color: "text-green-500", bg: "bg-green-50" };
    if (percentage >= 60) return { level: "مقبول", icon: Target, color: "text-orange-500", bg: "bg-orange-50" };
    return { level: "يحتاج تحسين", icon: Zap, color: "text-red-500", bg: "bg-red-50" };
  };

  const performance = getPerformanceLevel();
  const PerformanceIcon = performance.icon;

  const shareUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const shareText = `حصلت على ${score} من ${totalQuestions} في اختبار "${quizTitle}" على دار المعرفة! 🎯 جرب أنت أيضاً:`;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Main Results Card */}
      <Card className="border-0 shadow-xl">
        <CardHeader className="text-center pb-4">
          <div className={`w-20 h-20 mx-auto rounded-full ${performance.bg} flex items-center justify-center mb-4`}>
            <PerformanceIcon className={`h-10 w-10 ${performance.color}`} />
          </div>
          <CardTitle className="text-3xl font-bold text-quiz-dark mb-2">
            تم إنهاء الاختبار!
          </CardTitle>
          <p className="text-lg text-muted-foreground">
            {quizTitle}
          </p>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-quiz-blue mb-2">
              {score}/{totalQuestions}
            </div>
            <div className="text-2xl font-semibold text-quiz-dark mb-4">
              {percentage}% - {performance.level}
            </div>
            <Progress value={percentage} className="w-full max-w-md mx-auto h-3" />
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-quiz-gray/30 rounded-lg">
              <Target className="h-8 w-8 mx-auto mb-2 text-quiz-blue" />
              <div className="text-2xl font-bold text-quiz-dark">{score}</div>
              <div className="text-sm text-muted-foreground">إجابات صحيحة</div>
            </div>
            <div className="text-center p-4 bg-quiz-gray/30 rounded-lg">
              <Clock className="h-8 w-8 mx-auto mb-2 text-quiz-green" />
              <div className="text-2xl font-bold text-quiz-dark">{formatTime(timeSpent)}</div>
              <div className="text-sm text-muted-foreground">الوقت المستغرق</div>
            </div>
            <div className="text-center p-4 bg-quiz-gray/30 rounded-lg">
              <Zap className="h-8 w-8 mx-auto mb-2 text-quiz-red" />
              <div className="text-2xl font-bold text-quiz-dark">{averageTimePerQuestion}ث</div>
              <div className="text-sm text-muted-foreground">متوسط الوقت للسؤال</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              onClick={onRetake}
              className="bg-quiz-blue text-white flex items-center space-x-2 space-x-reverse"
            >
              <RotateCcw className="h-4 w-4" />
              <span>إعادة الاختبار</span>
            </Button>
            <Link href={`/category/${categoryId}`}>
              <Button variant="outline" className="flex items-center space-x-2 space-x-reverse">
                <Target className="h-4 w-4" />
                <span>اختبارات أخرى</span>
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2 space-x-reverse">
                <Home className="h-4 w-4" />
                <span>الصفحة الرئيسية</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Social Sharing */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-quiz-dark flex items-center space-x-2 space-x-reverse">
            <Share2 className="h-5 w-5" />
            <span>شارك نتيجتك</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            شارك نتيجتك مع الأصدقاء وتحداهم لمحاولة التفوق عليك!
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <FacebookShareButton url={shareUrl} title={shareText}>
              <div className="flex items-center space-x-2 space-x-reverse bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <FacebookIcon size={20} round />
                <span>فيسبوك</span>
              </div>
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} title={shareText}>
              <div className="flex items-center space-x-2 space-x-reverse bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors">
                <TwitterIcon size={20} round />
                <span>تويتر</span>
              </div>
            </TwitterShareButton>

            <WhatsappShareButton url={shareUrl} title={shareText}>
              <div className="flex items-center space-x-2 space-x-reverse bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                <WhatsappIcon size={20} round />
                <span>واتساب</span>
              </div>
            </WhatsappShareButton>

            <TelegramShareButton url={shareUrl} title={shareText}>
              <div className="flex items-center space-x-2 space-x-reverse bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                <TelegramIcon size={20} round />
                <span>تيليغرام</span>
              </div>
            </TelegramShareButton>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Results */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold text-quiz-dark">
              مراجعة الإجابات
            </CardTitle>
            <Button 
              variant="outline" 
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
            </Button>
          </div>
        </CardHeader>
        
        {showDetails && (
          <CardContent>
            <div className="space-y-4">
              {questions.map((question, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-quiz-dark flex-1">
                        {index + 1}. {question.question}
                      </h4>
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mr-2" />
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      {question.choices.map((choice, choiceIndex) => (
                        <div key={choiceIndex} className={`p-2 rounded text-sm ${
                          choiceIndex === question.correctAnswer
                            ? 'bg-green-100 text-green-800 border border-green-200'
                            : choiceIndex === userAnswer && !isCorrect
                            ? 'bg-red-100 text-red-800 border border-red-200'
                            : 'bg-gray-50'
                        }`}>
                          <div className="flex items-center justify-between">
                            <span>{choice}</span>
                            {choiceIndex === question.correctAnswer && (
                              <Badge variant="secondary" className="bg-green-200 text-green-800">
                                الإجابة الصحيحة
                              </Badge>
                            )}
                            {choiceIndex === userAnswer && choiceIndex !== question.correctAnswer && (
                              <Badge variant="secondary" className="bg-red-200 text-red-800">
                                إجابتك
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        )}
      </Card>

      {/* Performance Tips */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-quiz-dark flex items-center space-x-2 space-x-reverse">
            <Star className="h-5 w-5" />
            <span>نصائح لتحسين الأداء</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-muted-foreground">
            {percentage >= 90 && (
              <p>🎉 أداء رائع! حافظ على هذا المستوى وجرب اختبارات أصعب لتطوير مهاراتك أكثر.</p>
            )}
            {percentage >= 70 && percentage < 90 && (
              <p>👍 أداء جيد! راجع الأسئلة التي أخطأت فيها وحاول فهم الإجابات الصحيحة.</p>
            )}
            {percentage < 70 && (
              <p>💪 لا تستسلم! راجع المواضيع مرة أخرى وأعد المحاولة. التكرار مفتاح التعلم.</p>
            )}
            <p>📚 تصفح المزيد من الاختبارات في نفس الفئة لتقوية معرفتك.</p>
            <p>⏱️ حاول تحسين سرعتك في الإجابة مع الحفاظ على الدقة.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}