"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, BookOpen, Phone, Shield, FileText, Info } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "الرئيسية", href: "/", icon: Home },
    { name: "الاختبارات", href: "/categories", icon: BookOpen },
    { name: "من نحن", href: "/about", icon: Info },
    { name: "اتصل بنا", href: "/contact", icon: Phone },
    { name: "سياسة الخصوصية", href: "/privacy", icon: Shield },
    { name: "الشروط والأحكام", href: "/terms", icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-quiz-gradient">
              <span className="text-white text-xl font-bold">د</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-quiz-gradient bg-clip-text text-transparent">
                دار المعرفة
              </h1>
              <p className="text-sm text-muted-foreground">بيت الاختبارات التعليمية</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            {navigation.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-6">
                <div className="flex items-center space-x-2 space-x-reverse mb-6">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-quiz-gradient">
                    <span className="text-white text-lg font-bold">د</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">دار المعرفة</h2>
                    <p className="text-xs text-muted-foreground">بيت الاختبارات التعليمية</p>
                  </div>
                </div>
                
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 space-x-reverse rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}