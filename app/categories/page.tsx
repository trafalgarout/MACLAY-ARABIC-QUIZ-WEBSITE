"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import AdSense from "@/components/AdSense";
import { quizCategories } from "@/data/quiz-categories";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = quizCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 bg-quiz-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            فئات الاختبارات
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            اكتشف مجموعة واسعة من الاختبارات في 20 فئة مختلفة تشمل جميع مجالات المعرفة
          </p>
        </div>
      </section>

      {/* AdSense Slot 1 */}
      <AdSense slot="1" />

      {/* Search and Filter */}
      <section className="py-8 bg-quiz-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="ابحث عن فئة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 py-3 text-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Slot 2 */}
      <AdSense slot="2" />

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-quiz-dark mb-2">
                لم نجد نتائج
              </h3>
              <p className="text-muted-foreground">
                جرب البحث بكلمات مختلفة أو تصفح جميع الفئات
              </p>
              <Button 
                onClick={() => setSearchTerm("")}
                className="mt-4 bg-quiz-gradient text-white"
              >
                عرض جميع الفئات
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="text-lg text-muted-foreground">
                  {filteredCategories.length === quizCategories.length 
                    ? `جميع الفئات (${filteredCategories.length})`
                    : `نتائج البحث (${filteredCategories.length} من ${quizCategories.length})`
                  }
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCategories.map((category, index) => (
                  <div key={category.id}>
                    <CategoryCard category={category} />
                    {/* Insert ads every 4 categories */}
                    {(index + 1) % 4 === 0 && index < filteredCategories.length - 1 && (
                      <div className="col-span-full my-8">
                        <AdSense slot={((Math.floor(index / 4) % 4) + 3).toString()} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* AdSense Slot 5 */}
      <AdSense slot="5" />

      {/* CTA Section */}
      <section className="py-16 bg-quiz-gray/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-quiz-dark mb-4">
            لم تجد ما تبحث عنه؟
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            نضيف اختبارات جديدة باستمرار. تابعنا للحصول على آخر التحديثات والاختبارات الجديدة
          </p>
          <Button className="bg-quiz-gradient text-white px-8 py-3">
            اقترح فئة جديدة
          </Button>
        </div>
      </section>

      {/* AdSense Slot 6 */}
      <AdSense slot="6" />

      <Footer />
    </div>
  );
}