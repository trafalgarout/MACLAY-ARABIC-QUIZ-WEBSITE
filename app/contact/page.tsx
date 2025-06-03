"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSense from "@/components/AdSense";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      value: "+966 50 123 4567",
      description: "متاح من السبت إلى الخميس، 9 صباحاً - 5 مساءً",
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@daralmaarifa.com",
      description: "نرد على رسائلك خلال 24 ساعة",
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "الرياض، المملكة العربية السعودية",
      description: "مقرنا الرئيسي في قلب العاصمة",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "السبت - الخميس",
      description: "9:00 صباحاً - 5:00 مساءً",
      color: "text-purple-500"
    }
  ];

  const supportTopics = [
    "الدعم التقني",
    "اقتراحات التحسين",
    "الإبلاغ عن خطأ",
    "طلب فئة جديدة",
    "شراكات تجارية",
    "أخرى"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "تم إرسال رسالتك بنجاح!",
        description: "شكراً لك، سنرد عليك في أقرب وقت ممكن.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 bg-quiz-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            اتصل بنا
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            نحن هنا للإجابة على أسئلتك ومساعدتك. لا تتردد في التواصل معنا
          </p>
        </div>
      </section>

      {/* AdSense Slot 1 */}
      <AdSense slot="1" />

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-quiz-dark mb-4">
                معلومات التواصل
              </h2>
              <p className="text-lg text-muted-foreground">
                طرق متعددة للوصول إلينا
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                        <IconComponent className={`h-8 w-8 ${info.color}`} />
                      </div>
                      <h3 className="text-lg font-bold text-quiz-dark mb-2">
                        {info.title}
                      </h3>
                      <p className="font-semibold text-quiz-dark mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Slot 2 */}
      <AdSense slot="2" />

      {/* Contact Form */}
      <section className="py-16 bg-quiz-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Form */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-quiz-dark">
                    أرسل لنا رسالة
                  </CardTitle>
                  <p className="text-muted-foreground">
                    املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكامل *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="أدخل اسمك الكامل"
                        required
                        className="text-right"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="أدخل بريدك الإلكتروني"
                        required
                        className="text-right"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">موضوع الرسالة *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="اختر موضوع رسالتك"
                        required
                        className="text-right"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">الرسالة *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="اكتب رسالتك هنا..."
                        rows={5}
                        required
                        className="text-right"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-quiz-gradient text-white py-3"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>جاري الإرسال...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <Send className="h-4 w-4" />
                          <span>إرسال الرسالة</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Support Topics */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-quiz-dark">
                      مواضيع الدعم الشائعة
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {supportTopics.map((topic, index) => (
                        <button
                          key={index}
                          onClick={() => setFormData(prev => ({ ...prev, subject: topic }))}
                          className="w-full text-right p-3 rounded-lg border border-gray-200 hover:border-quiz-blue hover:bg-quiz-blue/5 transition-colors"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-quiz-dark">
                      الأسئلة الشائعة
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-quiz-dark mb-1">كيف يمكنني إضافة اختبار جديد؟</h4>
                        <p className="text-muted-foreground">يمكنك اقتراح موضوع اختبار جديد عبر نموذج التواصل.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-quiz-dark mb-1">هل الموقع مجاني؟</h4>
                        <p className="text-muted-foreground">نعم، جميع الاختبارات متاحة مجاناً لكل المستخدمين.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-quiz-dark mb-1">كيف أشارك نتيجتي؟</h4>
                        <p className="text-muted-foreground">بعد انتهاء الاختبار، ستجد أزرار المشاركة على منصات التواصل.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Slot 3 */}
      <AdSense slot="3" />

      {/* Response Time */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-quiz-gradient text-white">
              <CardContent className="pt-8 text-center">
                <CheckCircle className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  نهتم بآرائكم وملاحظاتكم
                </h3>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  فريقنا متاح للرد على استفساراتكم وتلقي اقتراحاتكم لتطوير المنصة. 
                  متوسط وقت الرد هو 24 ساعة في أيام العمل.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">24</div>
                    <div className="text-sm opacity-75">ساعة متوسط الرد</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-sm opacity-75">معدل رضا العملاء</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">7</div>
                    <div className="text-sm opacity-75">أيام في الأسبوع</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AdSense Slot 4 */}
      <AdSense slot="4" />

      {/* AdSense Slot 5 */}
      <AdSense slot="5" />

      {/* AdSense Slot 6 */}
      <AdSense slot="6" />

      <Footer />
    </div>
  );
}