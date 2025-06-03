"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { QuizQuestion } from "@/data/quiz-categories";
import { Clock, CheckCircle, XCircle, ArrowRight, ArrowLeft } from "lucide-react";

interface QuizComponentProps {
  questions: QuizQuestion[];
  onComplete: (score: number, answers: number[], timeSpent: number) => void;
  title: string;
}

export default function QuizComponent({ questions, onComplete, title }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
    
    onComplete(score, selectedAnswers, timeSpent);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const current = questions[currentQuestion];
  const answeredCount = selectedAnswers.filter(answer => answer !== -1).length;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!current) {
    return <div>خطأ في تحميل الاختبار</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Quiz Header */}
      <Card className="mb-6 border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold text-quiz-dark">
              {title}
            </CardTitle>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Badge variant="outline" className="flex items-center space-x-1 space-x-reverse">
                <Clock className="h-3 w-3" />
                <span>{formatTime(timeSpent)}</span>
              </Badge>
              <Badge className="bg-quiz-blue text-white">
                السؤال {currentQuestion + 1} من {questions.length}
              </Badge>
            </div>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
      </Card>

      {/* Question Card */}
      <Card className="mb-6 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-quiz-dark leading-relaxed">
            {current.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {current.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-right rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-quiz-blue bg-quiz-blue/10 text-quiz-blue font-medium'
                    : 'border-gray-200 hover:border-quiz-blue/50 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-quiz-blue bg-quiz-blue'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswers[currentQuestion] === index && (
                      <CheckCircle className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <span className="text-lg">{choice}</span>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <Card className="border-0 shadow-lg">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2 space-x-reverse">
              <Button
                onClick={goToPrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                className="flex items-center space-x-2 space-x-reverse"
              >
                <ArrowRight className="h-4 w-4" />
                <span>السابق</span>
              </Button>
              
              {currentQuestion < questions.length - 1 ? (
                <Button
                  onClick={goToNext}
                  disabled={selectedAnswers[currentQuestion] === -1}
                  className="bg-quiz-blue text-white flex items-center space-x-2 space-x-reverse"
                >
                  <span>التالي</span>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={answeredCount < questions.length}
                  className="bg-quiz-green text-white flex items-center space-x-2 space-x-reverse"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>إنهاء الاختبار</span>
                </Button>
              )}
            </div>

            <div className="text-sm text-muted-foreground">
              تم الإجابة على {answeredCount} من {questions.length} أسئلة
            </div>
          </div>

          {/* Question Navigator */}
          <div className="mt-6 pt-4 border-t">
            <p className="text-sm font-medium text-quiz-dark mb-3">الانتقال السريع:</p>
            <div className="grid grid-cols-10 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`aspect-square rounded-lg text-sm font-medium transition-colors ${
                    index === currentQuestion
                      ? 'bg-quiz-blue text-white'
                      : selectedAnswers[index] !== -1
                      ? 'bg-quiz-green text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}