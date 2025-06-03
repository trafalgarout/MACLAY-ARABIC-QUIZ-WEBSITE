"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSense from "@/components/AdSense";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { quizCategories } from "@/data/quiz-categories";
import { ArrowLeft, Clock, Star, Users, Play } from "lucide-react";
import Link from "next/link";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.categoryId as string;

  const category = quizCategories.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-quiz-dark mb-4">الفئة غير موجودة</h1>
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

  // Generate sample quizzes for this category
  const quizzes = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    title: `${category.name} - اختبار ${index + 1}`,
    description: `اختبر معرفتك في ${category.name} مع هذا الاختبار الشيق`,
    difficulty: ['سهل', 'متوسط', 'صعب'][index % 3] as 'سهل' | 'متوسط' | 'صعب',
    questions: 10,
    participants: Math.floor(Math.random() * 1000) + 100,
    rating: (4 + Math.random()).toFixed(1),
    duration: '5-7 دقائق',
    categoryId: category.id
  }));

  const difficultyColors = {
    'سهل': 'bg-green-100 text-green-800',
    'متوسط': 'bg-yellow-100 text-yellow-800', 
    'صعب': 'bg-red-100 text-red-800'
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Category Header */}
      <section className={`py-16 bg-gradient-to-r ${category.color} text-white`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {category.name}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-6">
              {category.description}
            </p>
            <div className="flex justify-center space-x-6 space-x-reverse text-sm">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Clock className="h-4 w-4" />
                <span>5-10 دقائق لكل اختبار</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Star className="h-4 w-4" />
                <span>10 أسئلة لكل اختبار</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Users className="h-4 w-4" />
                <span>{category.quizzesCount} اختبار متاح</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Slot 1 */}
      <AdSense slot="1" />

      {/* Quizzes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-quiz-dark mb-4">
              الاختبارات المتاحة
            </h2>
            <p className="text-lg text-muted-foreground">
              اختر الاختبار الذي يناسب مستواك وابدأ التحدي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz, index) => (
              <div key={quiz.id}>
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg font-bold text-quiz-dark leading-tight">
                        {quiz.title}
                      </CardTitle>
                      <Badge className={difficultyColors[quiz.difficulty]}>
                        {quiz.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {quiz.description}
                    </p>
                    
                    <div className="space-y-2 mb-4 text-xs text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span>عدد الأسئلة:</span>
                        <span>{quiz.questions} سؤال</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>المدة المتوقعة:</span>
                        <span>{quiz.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>المشاركين:</span>
                        <span>{quiz.participants} شخص</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>التقييم:</span>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{quiz.rating}</span>
                        </div>
                      </div>
                    </div>

                    <Link href={`/quiz/${categoryId}/${quiz.id}`}>
                      <Button className="w-full bg-quiz-gradient text-white group-hover:shadow-md transition-shadow">
                        <Play className="h-4 w-4 ml-2" />
                        ابدأ الاختبار
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Insert ads every 6 quizzes */}
                {(index + 1) % 6 === 0 && index < quizzes.length - 1 && (
                  <div className="col-span-full my-8">
                    <AdSense slot={((Math.floor(index / 6) % 4) + 2).toString()} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Slot 5 */}
      <AdSense slot="5" />

      {/* Related Categories */}
      <section className="py-16 bg-quiz-gray/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-quiz-dark mb-8 text-center">
            فئات ذات صلة
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quizCategories
              .filter(cat => cat.id !== categoryId)
              .slice(0, 4)
              .map((relatedCategory) => (
                <Link key={relatedCategory.id} href={`/category/${relatedCategory.id}`}>
                  <Card className="text-center cursor-pointer hover:shadow-md transition-shadow border-0">
                    <CardContent className="pt-6">
                      <div className="text-3xl mb-2">{relatedCategory.icon}</div>
                      <h3 className="font-semibold text-sm text-quiz-dark">
                        {relatedCategory.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {relatedCategory.quizzesCount} اختبار
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* AdSense Slot 6 */}
      <AdSense slot="6" />

      <Footer />
    </div>
  );
}