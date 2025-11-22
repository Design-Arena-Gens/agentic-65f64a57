const modules = [
  {
    title: "مدخل إلى مهنة التمريض",
    description:
      "تعرّف على دور الممرضة، قيم المهنة، أخلاقيات العمل، والتعاون داخل الفريق الصحي.",
    duration: "40 دقيقة",
    focus: ["أخلاقيات", "تواصل", "سلامة"],
  },
  {
    title: "مهارات السلامة والتحكم بالعدوى",
    description:
      "خطوات التعقيم، غسل اليدين، استخدام معدات الوقاية، والتعامل مع النفايات الطبية.",
    duration: "55 دقيقة",
    focus: ["التعقيم", "PPE", "الإبلاغ"],
  },
  {
    title: "التقييم الأولي للمريض",
    description:
      "قياس العلامات الحيوية، ملاحظة العلامات التحذيرية، وتوثيق الملاحظات بدقة.",
    duration: "1 ساعة",
    focus: ["علامات حيوية", "مراقبة", "توثيق"],
  },
  {
    title: "الرعاية الأساسية اليومية",
    description:
      "العناية الشخصية، تبديل الملاءات، منع تقرحات الفراش، وتقييم الراحة والألم.",
    duration: "45 دقيقة",
    focus: ["تغذية", "قسطرة", "راحة"],
  },
  {
    title: "الأدوية والحقن الأولية",
    description:
      "الخمس حقوق للدواء، حساب الجرعة، الحقن تحت الجلد والعضلي مع إجراءات السلامة.",
    duration: "1 ساعة 15 دقيقة",
    focus: ["حساب جرعة", "تحضير", "توثيق"],
  },
  {
    title: "التواصل مع المريض وذويه",
    description:
      "تقنيات الاستماع الفعّال، التعامل مع القلق، ودعم المرضى خلال الخطة العلاجية.",
    duration: "35 دقيقة",
    focus: ["استماع", "تعاطف", "دعم"],
  },
];

export default function ModuleGrid() {
  return (
    <section
      id="modules"
      className="space-y-6 rounded-3xl border border-zinc-200/70 bg-white/70 p-10 shadow-xl backdrop-blur-sm"
    >
      <div className="flex flex-col gap-3 text-right">
        <h2 className="text-2xl font-bold text-zinc-900">خطة التعلم الأساسية</h2>
        <p className="text-sm leading-6 text-zinc-500">
          تعلم أسس التمريض عبر وحدات مصغرة ومركزة. كل وحدة تنتهي بمهمة عملية
          قصيرة لتعزيز الفهم.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {modules.map((module) => (
          <article
            key={module.title}
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="absolute end-4 top-4 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              {module.duration}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-900">
              {module.title}
            </h3>
            <p className="text-sm leading-6 text-zinc-500">
              {module.description}
            </p>
            <div className="mt-5 flex flex-wrap justify-end gap-2 text-xs">
              {module.focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-zinc-100 px-3 py-1 font-medium text-zinc-600 transition group-hover:bg-blue-100 group-hover:text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
