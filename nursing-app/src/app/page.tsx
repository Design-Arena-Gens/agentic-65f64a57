import Hero from "@/components/Hero";
import LearningPath from "@/components/LearningPath";
import ModuleGrid from "@/components/ModuleGrid";
import Quiz from "@/components/Quiz";
import ResourceShowcase from "@/components/ResourceShowcase";
import SkillChecklist from "@/components/SkillChecklist";
import StudyPlanner from "@/components/StudyPlanner";

export default function Home() {
  const highlights = [
    {
      label: "دروس مصغرة",
      value: "18 درس عملي",
      description:
        "مصممة لتلائم المتدربين الجدد وتقدم المعلومة باللغة العربية بأسلوب واضح ومباشر.",
    },
    {
      label: "مشاريع تطبيقية",
      value: "6 سيناريوهات",
      description:
        "تدرب على مواقف حقيقية تشمل التواصل، إعطاء الدواء، وإدارة الألم.",
    },
    {
      label: "متابعة أسبوعية",
      value: "خطة 6 أسابيع",
      description:
        "مسار تدريجي يساعدك على بناء مهاراتك بثقة مع تقييم ذاتي مستمر.",
    },
  ];

  const quickTips = [
    "راجع العلامات الحيوية الأساسية (حرارة، ضغط، نبض، معدل التنفس) يومياً حتى تحفظ القيم الطبيعية.",
    "استخدم تقنية SBAR لتنظيم أفكارك قبل التواصل مع الطبيب أو الفريق التمريضي.",
    "بعد كل درس، سجّل كيف ستطبق المفهوم في موقف سريري واقعي.",
    "صور خطواتك أثناء التدريب (إن أمكن) وشاهدها لاحقاً لاكتشاف مجالات التحسين.",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-50 via-sky-50 to-emerald-50 px-4 py-12 text-zinc-900 md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <Hero />

        <section className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/40 bg-white/90 p-6 text-right shadow-sm backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-bold text-zinc-900">
                {item.value}
              </p>
              <p className="mt-3 text-sm text-zinc-500">{item.description}</p>
            </div>
          ))}
        </section>

        <ModuleGrid />
        <LearningPath />

        <section className="grid gap-6 md:grid-cols-[1.4fr,1fr]">
          <SkillChecklist />
          <div className="space-y-6 rounded-3xl border border-teal-100 bg-white p-6 text-right shadow-sm">
            <h2 className="text-lg font-bold text-teal-700">
              نصائح سريعة للنجاح
            </h2>
            <ul className="space-y-4 text-sm text-teal-700/90">
              {quickTips.map((tip) => (
                <li
                  key={tip}
                  className="rounded-2xl border border-teal-100 bg-teal-50/50 p-4 leading-6"
                >
                  {tip}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-dashed border-teal-200 bg-teal-50/70 p-4 text-xs leading-6 text-teal-600">
              جرّب كتابة انعكاس يومي قصير بعد كل وحدة: ماذا تعلمت؟ كيف ستطبق
              المعرفة؟ ما المهارة التي تحتاج إلى مزيد من التدريب؟
            </div>
          </div>
        </section>

        <Quiz />
        <StudyPlanner />
        <ResourceShowcase />

        <section className="rounded-3xl border border-zinc-200 bg-white/80 p-8 text-right shadow-sm">
          <h2 className="text-xl font-bold text-zinc-900">
            جاهز للخطوة التالية؟
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            انضم لمجتمع متعلمين التمريض لمناقشة الدروس، مشاركة الخبرات، والحصول
            على دعم فوري من زملاء المجال.
          </p>
          <div className="mt-5 flex flex-col items-end gap-3 sm:flex-row sm:justify-end">
            <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              طلب دعوة إلى مجموعة واتساب التعليمية
            </button>
            <button className="rounded-full border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">
              تحميل دليل البدء السريع
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
