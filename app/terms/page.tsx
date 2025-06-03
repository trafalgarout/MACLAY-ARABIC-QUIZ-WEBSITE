"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSense from "@/components/AdSense";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Shield, AlertTriangle, Scale, BookOpen } from "lucide-react";

export default function TermsPage() {

  const sections = [
    {
      icon: BookOpen,
      title: "قبول الشروط",
      content: "باستخدام موقع دار المعرفة، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع. هذه الشروط تشكل اتفاقية ملزمة قانونياً بينك وبين دار المعرفة."
    },
    {
      icon: Users,
      title: "استخدام الموقع",
      content: "يحق لك استخدام الموقع لأغراض شخصية وتعليمية فقط. يُمنع استخدام الموقع لأي أغراض تجارية أو غير قانونية. لا يجوز نسخ أو توزيع أو تعديل المحتوى دون إذن كتابي مسبق منا. نحتفظ بالحق في إنهاء أو تقييد وصولك للموقع في أي وقت."
    },
    {
      icon: Shield,
      title: "الملكية الفكرية",
      content: "جميع المحتويات الموجودة على الموقع، بما في ذلك النصوص والصور والرسوم والتصاميم والاختبارات، محمية بموجب قوانين حقوق النشر والملكية الفكرية. دار المعرفة تملك أو ترخص جميع الحقوق في هذا المحتوى."
    },
    {
      icon: AlertTriangle,
      title: "مسؤولية المستخدم",
      content: "أنت مسؤول عن أي معلومات تقدمها وعن استخدامك للموقع. يجب أن تكون المعلومات المقدمة دقيقة ومحدثة. لا يجوز استخدام الموقع لأي أنشطة ضارة أو غير قانونية أو تنتهك حقوق الآخرين. أنت مسؤول عن الحفاظ على سرية معلومات حسابك."
    },
    {
      icon: Scale,
      title: "إخلاء المسؤولية",
      content: "يتم توفير الموقع والمحتوى 'كما هو' دون أي ضمانات صريحة أو ضمنية. لا نضمن دقة أو اكتمال المعلومات المقدمة. لا نتحمل أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة قد تنتج عن استخدام الموقع. استخدامك للموقع على مسؤوليتك الخاصة."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 bg-quiz-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <FileText className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            الشروط والأحكام
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            الشروط والأحكام التي تحكم استخدامك لموقع دار المعرفة
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
                  مرحباً بك في دار المعرفة. هذه الشروط والأحكام تحدد القواعد والضوابط 
                  لاستخدام موقعنا الإلكتروني. يرجى قراءة هذه الشروط بعناية قبل استخدام الموقع.
                </p>
              </CardContent>
            </Card>

            {/* AdSense Slot 3 */}
            <AdSense slot="3" />

            {/* Terms Sections */}
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

            {/* Prohibited Activities */}
            <Card className="mt-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-quiz-dark">
                  الأنشطة المحظورة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  يُمنع منعاً باتاً القيام بالأنشطة التالية عند استخدام الموقع:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• انتهاك أي قوانين محلية أو دولية</li>
                  <li>• نشر محتوى مسيء أو ضار أو غير قانوني</li>
                  <li>• محاولة اختراق أو تعطيل الموقع</li>
                  <li>• استخدام برامج آلية لجمع المعلومات</li>
                  <li>• انتحال شخصية أشخاص أو كيانات أخرى</li>
                  <li>• استخدام الموقع لأغراض تجارية دون إذن</li>
                  <li>• نشر فيروسات أو برمجيات ضارة</li>
                </ul>
              </CardContent>
            </Card>

            {/* AdSense Slot 5 */}
            <AdSense slot="5" />

            {/* Modifications */}
            <Card className="mt-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-quiz-dark">
                  التعديلات على الشروط
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت دون إشعار مسبق. 
                  التعديلات تصبح سارية فور نشرها على الموقع. استمرارك في استخدام الموقع 
                  بعد نشر التعديلات يعني موافقتك على الشروط المعدلة. ننصحك بمراجعة 
                  هذه الصفحة بانتظام للاطلاع على آخر التحديثات.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="mt-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-quiz-dark">
                  القانون الحاكم
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية. أي نزاع 
                  ينشأ عن استخدام الموقع سيتم حله في المحاكم المختصة في المملكة العربية السعودية. 
                  إذا تبين أن أي بند من هذه الشروط غير قابل للتنفيذ، فإن باقي البنود تبقى سارية المفعول.
                </p>
              </CardContent>
            </Card>

            {/* AdSense Slot 6 */}
            <AdSense slot="6" />

            {/* Contact Information */}
            <Card className="mt-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-quiz-dark">
                  تواصل معنا
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا عبر:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>البريد الإلكتروني:</strong> legal@daralmaarifa.com</p>
                  <p><strong>الهاتف:</strong> +966 50 123 4567</p>
                  <p><strong>العنوان:</strong> الرياض، المملكة العربية السعودية</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}