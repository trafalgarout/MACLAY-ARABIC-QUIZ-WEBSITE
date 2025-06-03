"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QuizCategory } from "@/data/quiz-categories";
import { ArrowLeft } from "lucide-react";

interface CategoryCardProps {
  category: QuizCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {

  return (
    <Link href={`/category/${category.id}`}>
      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${category.color}`} />
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="text-3xl animate-float">{category.icon}</div>
            <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <CardTitle className="text-lg font-bold text-quiz-dark leading-tight">
            {category.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {category.description}
          </p>
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-quiz-gray text-quiz-dark">
              {category.quizzesCount} اختبار
            </Badge>
            <div className="text-xs text-muted-foreground">
              ابدأ الآن →
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}