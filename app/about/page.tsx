"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSense from "@/components/AdSense";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Eye, Users, Award, BookOpen, Globe, Lightbulb } from "lucide-react";

export default function AboutPage() {

  const values = [
    {
      icon: Heart,
      title: "الشغف بالتعلم",
      description: "نؤمن بأن التعلم رحلة مستمرة ومثيرة، ونسعى لجعل كل لحظة تعلم ممتعة ومفيدة.",
      color: "text-red-500"
    },
    {
      icon: Target,
      title: "التميز والجودة",
      description: "نلتزم بتقديم محتوى عالي الجودة ومدروس بعناية لضمان تجربة تعليمية استثنائية.",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "المجتمع والمشاركة",
      description: "نبني مجتمعاً تفاعلياً يشارك فيه الجميع المعرفة ويتعلمون من بعضهم البعض.",
      color: "text-green-500"
    },
    {
      icon: Globe,
      title: "الوصول للجميع",
      description: "نسعى لتوفير التعليم الجيد لكل شخص بغض النظر عن موقعه أو خلفيته التعليمية.",
      color: "text-purple-500"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "600+ اختبار متنوع",
      description: "مجموعة واسعة من الاختبارات في 20 فئة مختلفة"
    },
    {
      icon: Award,
      title: "جودة عالية",
      description: "محتوى مدروس ومراجع من قبل خبراء متخصصين"
    },
    {
      icon: Users,
      title: "مجتمع نشط",
      description: "أكثر من 50,000 مستخدم نشط يومياً"
    },
    {
      icon: Lightbulb,
      title: "تحديث مستمر",
      description: "اختبارات ومحتوى جديد كل أسبوع"
    }
  ];

  const team = [
    {
      name: "د. أحمد محمد",
      role: "مدير المحتوى التعليمي",
      description: "دكتوراه في التربية، خبرة 15 سنة في التعليم الإلكتروني",
      speciality: "التعليم والتربية"
    },
    {
      name: "سارة أحمد",
      role: "مطورة المحتوى",
      description: "ماجستير في اللغة العربية، متخصصة في تطوير المناهج",
      speciality: "اللغة والأدب"
    },
    {
      name: "محمد علي",
      role: "مطور تقني",
      description: "مهندس برمجيات، خبرة 10 سنوات في تطوير المواقع",
      speciality: "التكنولوجيا"
    },
    {
      name: "فاطمة حسن",
      role: "مصممة تجربة المستخدم",
      description: "متخصصة في تصميم واجهات المستخدم والتجربة التفاعلية",
      speciality: "التصميم والإبداع"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 bg-quiz-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            من نحن
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            نحن فريق شغوف بالتعليم والتكنولوجيا، نسعى لتقديم تجربة تعليمية مميزة ومفيدة
          </p>
        </div>
      </section>

      {/* AdSense Slot 1 */}
      <AdSense slot="1" />

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-quiz-dark text-center mb-4">
                  قصتنا
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    بدأت رحلة دار المعرفة من فكرة بسيطة: كيف يمكننا جعل التعلم أكثر متعة وتفاعلاً؟ 
                    في عالم يتسارع فيه إيقاع الحياة، أردنا أن نوفر منصة تتيح للجميع اختبار معارفهم 
                    وتطوير قدراتهم بطريقة ممتعة ومشوقة.
                  </p>
                  <p>
                    تأسست دار المعرفة في عام 2024 على يد فريق من التربويين والتقنيين المتخصصين 
                    الذين يؤمنون بقوة التعليم التفاعلي. منذ ذلك الحين، نمت المنصة لتضم أكثر من 600 اختبار 
                    في 20 فئة مختلفة، وتخدم أكثر من 50,000 مستخدم من جميع أنحاء الوطن العربي.
                  </p>
                  <p>
                    نحن لا نكتفي بتقديم الاختبارات فحسب، بل نسعى لبناء مجتمع تعليمي تفاعلي 
                    يشارك فيه المتعلمون خبراتهم ويتحدون أنفسهم باستمرار لتحقيق المزيد من التقدم والنمو.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AdSense Slot 2 */}
      <AdSense slot="2" />

      {/* Mission & Vision */}
      <section className="py-16 bg-quiz-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-quiz-dark flex items-center space-x-3 space-x-reverse">
                    <Target className="h-8 w-8 text-quiz-blue" />
                    <span>رسالتنا</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    نسعى لتمكين الأفراد من تطوير معارفهم ومهاراتهم من خلال منصة تعليمية 
                    تفاعلية وممتعة تجمع بين الجودة العالية والوصول السهل، لنساهم في بناء 
                    مجتمع أكثر ثقافة ومعرفة.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-quiz-dark flex items-center space-x-3 space-x-reverse">
                    <Eye className="h-8 w-8 text-quiz-green" />
                    <span>رؤيتنا</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    أن نكون المنصة الرائدة عربياً في مجال التعليم التفاعلي والاختبارات الذكية، 
                    ونوفر لكل شخص في الوطن العربي الفرصة للتعلم والنمو المستمر في بيئة 
                    محفزة ومشجعة على الإبداع والتميز.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Slot 3 */}
      <AdSense slot="3" />

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-quiz-dark mb-4">
                قيمنا
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                القيم التي توجه عملنا وتشكل ثقافة فريقنا في دار المعرفة
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                        <IconComponent className={`h-8 w-8 ${value.color}`} />
                      </div>
                      <h3 className="text-lg font-bold text-quiz-dark mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Slot 4 */}
      <AdSense slot="4" />

      {/* Features */}
      <section className="py-16 bg-quiz-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-quiz-dark mb-4">
                ما يميزنا
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                الخصائص والمميزات التي تجعل دار المعرفة خيارك الأول للتعلم التفاعلي
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-lg">
                    <CardContent className="pt-6">
                      <IconComponent className="h-12 w-12 mx-auto mb-4 text-quiz-blue" />
                      <h3 className="text-lg font-bold text-quiz-dark mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Slot 5 */}
      <AdSense slot="5" />

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-quiz-dark mb-4">
                فريق العمل
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                تعرف على الفريق المتخصص الذي يعمل بجد لتقديم أفضل تجربة تعليمية لك
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-quiz-gradient rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ')[0][0]}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-quiz-dark mb-1">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground mb-2">
                      {member.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {member.speciality}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Slot 6 */}
      <AdSense slot="6" />

      {/* Contact CTA */}
      <section className="py-16 bg-quiz-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            هل لديك أسئلة أو اقتراحات؟
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            نحن نحب أن نسمع منك! تواصل معنا وشاركنا آراءك وأفكارك لتطوير المنصة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-quiz-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              تواصل معنا
            </a>
            <a href="mailto:info@daralmaarifa.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-quiz-blue transition-colors">
              راسلنا عبر البريد
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}