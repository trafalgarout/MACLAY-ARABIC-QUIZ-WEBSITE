"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSense from "@/components/AdSense";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Database, Lock, Share, Cookie } from "lucide-react";

export default function PrivacyPolicyPage() {

  const sections = [
    {
      icon: Eye,
      title: "المعلومات التي نجمعها",
      content: "نجمع المعلومات التي تقدمها لنا طوعياً عند استخدام موقعنا، مثل الاسم والبريد الإلكتروني عند التسجيل أو التواصل معنا. كما نجمع معلومات تقنية تلقائياً مثل عنوان IP ونوع المتصفح لتحسين تجربة الاستخدام."
    },
    {
      icon: Database,
      title: "كيف نستخدم معلوماتك",
      content: "نستخدم المعلومات المجمعة لتوفير وتحسين خدماتنا، وإرسال التحديثات والإشعارات المهمة، وتخصيص المحتوى حسب اهتماماتك، وضمان أمان الموقع، وإجراء التحليلات لفهم كيفية استخدام الموقع."
    },
    {
      icon: Share,
      title: "مشاركة المعلومات",
      content: "لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية: بموافقتك الصريحة، للامتثال للقوانين، لحماية حقوقنا أو سلامة المستخدمين، أو مع مقدمي الخدمات الموثوقين الذين يساعدوننا في تشغيل الموقع."
    },
    {
      icon: Lock,
      title: "أمان المعلومات",
      content: "نتخذ تدابير أمنية متقدمة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير. نستخدم التشفير وبروتوكولات الأمان المعتمدة عالمياً، ونراجع إجراءاتنا الأمنية بانتظام."
    },
    {
      icon: Cookie,
      title: "ملفات الارتباط (Cookies)",
      content: "نستخدم ملفات الارتباط لتحسين تجربة التصفح وحفظ تفضيلاتك. يمكنك إدارة إعدادات ملفات الارتباط من خلال متصفحك. بعض ميزات الموقع قد لا تعمل بشكل صحيح إذا تم تعطيل ملفات الارتباط."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 bg-quiz-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            نحن ملتزمون بحماية خصوصيتك وضمان أمان معلوماتك الشخصية
          </p>
        </div>
      </section>

      {/* AdSense Slot 1 */}
      <AdSense slot="1" />

      {/* Last Updated */}
      <section className="py-8 bg-quiz-gray/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            آخر تحديث: ديسمبر 2024
          </p>
        </div>
      </section>

      {/* AdSense Slot 2 */}
      <AdSense slot="2" />

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-0 shadow-lg">
              <CardContent className="pt-8">
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  في دار المعرفة، نحترم خصوصيتك ونلتزم بحماية المعلومات الشخصية التي تشاركها معنا. 
                  هذه السياسة توضح كيفية جمع واستخدام وحماية معلوماتك عند استخدام موقعنا الإلكتروني.
                </p>
              </CardContent>
            </Card>

            {/* AdSense Slot 3 */}
            <AdSense slot="3" />

            {/* Privacy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-quiz-dark flex items-center space-x-3 space-x-reverse">
                        <IconComponent className="h-8 w-8 text-quiz-blue" />
                        <span>{section.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* AdSense Slot 4 */}
            <AdSense slot="4" />

            {/* Rights Section */}
            <Card className="mt-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-quiz-dark">
                  حقوقك
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>الوصول:</strong> يحق لك طلب نسخة من المعلومات الشخصية التي نحتفظ بها عنك.</p>
                  <p><strong>التصحيح:</strong> يمكنك طلب تصحيح أي معلومات غير دقيقة أو غير مكتملة.</p>
                  <p><strong>الحذف:</strong> يمكنك طلب حذف معلوماتك الشخصية في ظروف معينة.</p>
                  <p><strong>الاعتراض:</strong> يمكنك الاعتراض على معالجة معلوماتك لأغراض التسويق.</p>
                  <p><strong>النقل:</strong> يحق لك الحصول على نسخة من معلوماتك بتنسيق قابل للقراءة آلياً.</p>
                </div>
              </CardContent>
            </Card>

            {/* AdSense Slot 5 */}
            <AdSense slot="5" />

            {/* Contact Information */}
            <Card className="mt-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-quiz-dark">
                  تواصل معنا
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات الخصوصية لدينا، 
                  يرجى التواصل معنا عبر:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>البريد الإلكتروني:</strong> privacy@daralmaarifa.com</p>
                  <p><strong>الهاتف:</strong> +966 50 123 4567</p>
                  <p><strong>العنوان:</strong> الرياض، المملكة العربية السعودية</p>
                </div>
              </CardContent>
            </Card>

            {/* AdSense Slot 6 */}
            <AdSense slot="6" />

            {/* Updates */}
            <Card className="mt-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-quiz-dark">
                  التحديثات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإشعارك بأي تغييرات 
                  مهمة عن طريق نشر السياسة الجديدة على هذه الصفحة وتحديث تاريخ "آخر تحديث" 
                  في أعلى الصفحة. ننصحك بمراجعة هذه الصفحة بانتظام للاطلاع على آخر التحديثات.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}