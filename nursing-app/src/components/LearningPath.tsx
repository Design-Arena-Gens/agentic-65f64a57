const milestones = [
  {
    week: "الأسبوع 1",
    focus: "الأساسيات والأمان",
    details:
      "ابدأ بتعلم مبادئ التمريض، أخلاقيات المهنة، وخطوات الوقاية من العدوى مع تطبيق عملي لغسل اليدين.",
  },
  {
    week: "الأسبوع 2",
    focus: "التقييم الأولي",
    details:
      "تعلم كيفية أخذ التاريخ المرضي، قياس العلامات الحيوية، وتدوين الملاحظات المهمة في ملف المريض.",
  },
  {
    week: "الأسبوع 3",
    focus: "الرعاية اليومية",
    details:
      "تطبيق العناية الشخصية، تغيير الوضعيات، ومنع التقرحات مع استراتيجيات لضمان الراحة.",
  },
  {
    week: "الأسبوع 4",
    focus: "الأدوية والحقن",
    details:
      "تدريب عملي على الخمس حقوق للدواء، تجهيز الحقن، وإجراءات السلامة قبل وبعد الإعطاء.",
  },
  {
    week: "الأسبوع 5",
    focus: "الدعم والتواصل",
    details:
      "تعزيز مهارات التواصل الفعّال مع المريض وأسرته، والتعامل مع المواقف الصعبة والتوتر.",
  },
  {
    week: "الأسبوع 6",
    focus: "مواقف سريرية",
    details:
      "حل دراسات حالة قصيرة، قرارات عاجلة، والعمل ضمن الفريق عند الطوارئ البسيطة.",
  },
];

export default function LearningPath() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-3 text-right">
        <h2 className="text-2xl font-bold text-zinc-900">مسار تعلم منظم خلال 6 أسابيع</h2>
        <p className="text-sm leading-6 text-zinc-500">
          اتبع هذا المسار الأسبوعي، ويمكنك دمجه مع تدريب ميداني أو جلسات محاكاة.
        </p>
      </div>

      <ol className="mt-8 space-y-4">
        {milestones.map((milestone, index) => (
          <li
            key={milestone.week}
            className="relative rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5 pr-12"
          >
            <span className="absolute -right-3 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg">
              {index + 1}
            </span>
            <div className="flex flex-col gap-2 text-right">
              <h3 className="text-sm font-semibold text-blue-700">
                {milestone.week} · {milestone.focus}
              </h3>
              <p className="text-sm text-zinc-600">{milestone.details}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
