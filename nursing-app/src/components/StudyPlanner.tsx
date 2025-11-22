const planner = [
  {
    time: "20 دقيقة",
    activity: "قراءة الدرس اليومي",
    detail: "راجع النقاط الأساسية ودوّن المفاهيم الجديدة في دفتر ملاحظاتك.",
  },
  {
    time: "15 دقيقة",
    activity: "مشاهدة تطبيق عملي",
    detail: "اختر فيديو محاكاة قصير ودوّن الخطوات الأساسية لكل إجراء.",
  },
  {
    time: "10 دقائق",
    activity: "مراجعة سريعة",
    detail: "استخدم بطاقات الاستذكار أو الأسئلة السريعة لتثبيت المعلومات.",
  },
  {
    time: "15 دقيقة",
    activity: "تدريب عملي",
    detail: "طبّق المهارة على نموذج تدريبي أو مع زميل واطلب تغذية راجعة.",
  },
];

export default function StudyPlanner() {
  return (
    <section className="rounded-3xl border border-violet-200 bg-violet-50/60 p-8 shadow-inner">
      <div className="flex flex-col gap-2 text-right">
        <h2 className="text-xl font-bold text-violet-800">
          خطة مذاكرة يومية (60 دقيقة)
        </h2>
        <p className="text-sm text-violet-600">
          حافظ على وتيرة ثابتة: ساعة يومية تكفي لتثبيت المفاهيم الجديدة وتطوير
          المهارات خطوة بخطوة.
        </p>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {planner.map((item) => (
          <div
            key={item.activity}
            className="rounded-2xl border border-violet-100 bg-white/80 p-5 text-right shadow-sm"
          >
            <div className="text-xs font-semibold text-violet-700">
              {item.time}
            </div>
            <h3 className="mt-2 text-base font-semibold text-violet-900">
              {item.activity}
            </h3>
            <p className="mt-1 text-sm leading-6 text-violet-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
