"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "فيسبوك", href: "#", icon: Facebook },
    { name: "تويتر", href: "#", icon: Twitter },
    { name: "إنستغرام", href: "#", icon: Instagram },
    { name: "يوتيوب", href: "#", icon: Youtube },
  ];

  const quickLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "الاختبارات", href: "/categories" },
    { name: "من نحن", href: "/about" },
    { name: "اتصل بنا", href: "/contact" },
  ];

  const legalLinks = [
    { name: "سياسة الخصوصية", href: "/privacy" },
    { name: "الشروط والأحكام", href: "/terms" },
    { name: "ملفات الارتباط", href: "/cookies" },
    { name: "إخلاء المسؤولية", href: "/disclaimer" },
  ];

  return (
    <footer className="bg-quiz-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-quiz-gradient">
                <span className="text-white text-xl font-bold">د</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">دار المعرفة</h3>
                <p className="text-sm text-gray-300">بيت الاختبارات التعليمية</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              موقع دار المعرفة يقدم مجموعة متنوعة من الاختبارات التعليمية والترفيهية 
              في مختلف المجالات لتنمية المعرفة والثقافة العامة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">القوانين</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-4 w-4 text-quiz-green" />
                <span className="text-gray-300 text-sm">info@daralmaarifa.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-4 w-4 text-quiz-green" />
                <span className="text-gray-300 text-sm">+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="h-4 w-4 text-quiz-green" />
                <span className="text-gray-300 text-sm">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} دار المعرفة. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-xs">
              تم التطوير بواسطة فريق دار المعرفة التقني
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}