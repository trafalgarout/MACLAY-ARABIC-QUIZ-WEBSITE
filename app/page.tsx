"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import AdSense from "@/components/AdSense";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { quizCategories } from "@/data/quiz-categories";
import { BookOpen, Users, Award, TrendingUp, Star, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {

  const stats = [
    { icon: BookOpen, label: "الاختبارات", value: "600+", color: "text-quiz-blue" },
    { icon: Users, label: "المستخدمين", value: "50K+", color: "text-quiz-green" },
    { icon: Award, label: "الفئات", value: "20", color: "text-quiz-red" },
    { icon: TrendingUp, label: "معدل النجاح", value: "85%", color: "text-purple-600" },
  ];

  const features = [
    {
      icon: Zap,
      title: "اختبارات سريعة",
      description: "اختبارات قصيرة ومركزة تناسب وقتك"
    },
    {
      icon: Star,
      title: "محتوى عالي الجودة",
      description: "أسئلة مدروسة ومحدثة باستمرار"
    },
    {
      icon: Users,
      title: "مشاركة النتائج",
      description: "شارك إنجازاتك مع الأصدقاء"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-quiz-blue via-blue-600 to-quiz-green">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              مرحباً بكم في دار المعرفة
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              اكتشف عالماً من المعرفة مع أكثر من 600 اختبار تعليمي وترفيهي في 20 فئة مختلفة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/categories">
                <Button size="lg" className="bg-white text-quiz-blue hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  ابدأ الاختبارات الآن
                  <BookOpen className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-quiz-blue px-8 py-3 text-lg">
                  تعرف علينا أكثر
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* AdSense Slot 1 */}
      <AdSense slot="1" />

      {/* Stats Section */}
      <section className="py-16 bg-quiz-gray/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-md">
                  <CardContent className="pt-6">
                    <IconComponent className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-3xl font-bold text-quiz-dark mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AdSense Slot 2 */}
      <AdSense slot="2" />

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-quiz-dark mb-4">
              لماذا نحن الأفضل؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم لك تجربة تعليمية فريدة مع أحدث التقنيات وأفضل المحتويات
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-quiz-gradient rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-quiz-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AdSense Slot 3 */}
      <AdSense slot="3" />

      {/* Categories Section */}
      <section className="py-16 bg-quiz-gray/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-quiz-dark mb-4">
              فئات الاختبارات
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اختر من بين 20 فئة مختلفة تشمل جميع مجالات المعرفة والثقافة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {quizCategories.slice(0, 8).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/categories">
              <Button size="lg" className="bg-quiz-gradient text-white px-8 py-3">
                عرض جميع الفئات
                <BookOpen className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Slot 4 */}
      <AdSense slot="4" />

      {/* CTA Section */}
      <section className="py-16 bg-quiz-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              هل أنت مستعد لتحدي معرفتك؟
            </h2>
            <p className="text-xl mb-8 opacity-90">
              انضم إلى آلاف المستخدمين واختبر معلوماتك في مختلف المجالات
            </p>
            <Link href="/categories">
              <Button size="lg" className="bg-white text-quiz-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                ابدأ أول اختبار مجاناً
                <Star className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Slot 5 */}
      <AdSense slot="5" />

      {/* AdSense Slot 6 */}
      <AdSense slot="6" />

      <Footer />
    </div>
  );
}
