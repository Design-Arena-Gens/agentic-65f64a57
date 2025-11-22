const resources = [
  {
    title: "دفتر ملخصات قابل للطباعة",
    description:
      "ملخص شامل للعلامات الحيوية، مخطط إعطاء الأدوية، وجداول المتابعة اليومية.",
    linkText: "تحميل PDF",
  },
  {
    title: "فيديوهات محاكاة سريرية",
    description:
      "مجموعة مختارة من مقاطع تعليمية توضح خطوات التقييم وإجراءات التمريض خطوة بخطوة.",
    linkText: "مشاهدة قائمة التشغيل",
  },
  {
    title: "نموذج توثيق جاهز",
    description:
      "قالب يومي لتوثيق التمريض مع أمثلة للتعبئة ونهج SBAR للتواصل مع الفريق.",
    linkText: "نسخ القالب",
  },
];

export default function ResourceShowcase() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-lg">
      <div className="flex flex-col gap-3 text-right">
        <h2 className="text-2xl font-bold text-zinc-900">
          مصادر مساندة لرحلة التعلم
        </h2>
        <p className="text-sm text-zinc-500">
          روابط جاهزة لتطبيق عملي فوري. استخدمها مع خطة الدروس لتسريع اكتسابك
          للمهارات.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {resources.map((resource) => (
          <article
            key={resource.title}
            className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 text-right shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
          >
            <h3 className="text-base font-semibold text-zinc-800">
              {resource.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-500">{resource.description}</p>
            <button className="mt-4 w-full rounded-full border border-blue-500 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-500 hover:text-white">
              {resource.linkText}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
