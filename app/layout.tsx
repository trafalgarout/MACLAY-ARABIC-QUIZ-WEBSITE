import "./globals.css";
import type { Metadata } from "next";
import { Cairo, Tajawal, Amiri } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({ 
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "دار المعرفة - اختبارات تعليمية وترفيهية",
  description: "موقع دار المعرفة يقدم مجموعة متنوعة من الاختبارات التعليمية والترفيهية في مختلف المجالات. اختبر معلوماتك وشارك النتائج مع أصدقائك!",
  keywords: "اختبارات, تعليم, ترفيه, معرفة عامة, علوم, تاريخ, رياضة, أفلام",
  authors: [{ name: "دار المعرفة" }],
  creator: "دار المعرفة",
  publisher: "دار المعرفة",
  robots: "index, follow",
  openGraph: {
    title: "دار المعرفة - اختبارات تعليمية وترفيهية",
    description: "موقع دار المعرفة يقدم مجموعة متنوعة من الاختبارات التعليمية والترفيهية في مختلف المجالات",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "دار المعرفة - اختبارات تعليمية وترفيهية",
    description: "موقع دار المعرفة يقدم مجموعة متنوعة من الاختبارات التعليمية والترفيهية في مختلف المجالات",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6865939387108271" crossOrigin="anonymous"></script>
      </head>
      <body className={`${cairo.variable} ${tajawal.variable} ${amiri.variable} font-arabic antialiased bg-white text-quiz-dark`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}