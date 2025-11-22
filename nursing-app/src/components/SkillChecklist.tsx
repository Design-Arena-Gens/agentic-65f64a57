"use client";

import { useState } from "react";

type Skill = {
  title: string;
  tips: string;
};

const essentialSkills: Skill[] = [
  {
    title: "قياس ضغط الدم بدقة",
    tips: "تأكد من اختيار حجم الكفة المناسب، واترك المريض في وضعية مريحة قبل القياس بثلاث دقائق.",
  },
  {
    title: "تعقيم اليدين بشكل صحيح",
    tips: "اغسل لمدة 20 ثانية على الأقل مع التركيز على الفراغات بين الأصابع والأظافر، وجفف بقطعة معقمة.",
  },
  {
    title: "إدارة الألم",
    tips: "اسأل عن مستوى الألم باستخدام مقياس من 0 إلى 10، ودوّن التغيرات بعد تقديم التدخل.",
  },
  {
    title: "التواصل مع الأسرة",
    tips: "استخدم لغة بسيطة، تأكد من فهمهم للخطة العلاجية، وشجعهم على طرح الأسئلة.",
  },
  {
    title: "توثيق الإجراءات",
    tips: "اكتب ما قمت به مباشرة بعد الإجراء مع الملاحظات الحيوية وأي ردود فعل من المريض.",
  },
];

export default function SkillChecklist() {
  const [selected, setSelected] = useState<Skill | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const toggleSkill = (skill: Skill) => {
    setSelected(skill);
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(skill.title)) {
        next.delete(skill.title);
      } else {
        next.add(skill.title);
      }
      return next;
    });
  };

  return (
    <section className="grid gap-6 rounded-3xl border border-blue-100 bg-blue-50/40 p-8 shadow-inner md:grid-cols-[2fr,1.2fr]">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-blue-900">قائمة المهارات الأساسية</h2>
        <p className="text-sm text-blue-700/80">
          استخدم هذه القائمة للتحقق من اكتسابك لأهم المهارات العملية. اضغط على
          أي مهارة لقراءة نصائح سريعة تساعدك على الإتقان.
        </p>

        <ul className="space-y-3">
          {essentialSkills.map((skill) => {
            const isDone = completed.has(skill.title);
            return (
              <li key={skill.title}>
                <button
                  onClick={() => toggleSkill(skill)}
                  className="flex w-full items-center justify-between rounded-xl border border-blue-100 bg-white px-4 py-3 text-right text-sm font-semibold text-blue-900 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow"
                >
                  <span>{skill.title}</span>
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs ${
                      isDone
                        ? "bg-emerald-500 text-white"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {isDone ? "✓" : "ابدأ"}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <aside className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 text-right shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 opacity-60" />
        <div className="relative space-y-3">
          <h3 className="text-lg font-semibold text-blue-900">
            {selected ? selected.title : "اختر مهارة لمعرفة التفاصيل"}
          </h3>
          <p className="text-sm leading-6 text-blue-700/80">
            {selected
              ? selected.tips
              : "حدد إحدى المهارات في القائمة على اليسار لعرض خطوات الإتقان وأهم النصائح العملية."}
          </p>
        </div>
      </aside>
    </section>
  );
}
