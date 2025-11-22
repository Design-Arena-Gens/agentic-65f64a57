"use client";

import { useMemo, useState } from "react";

type Question = {
  prompt: string;
  answers: { text: string; correct: boolean; rationale: string }[];
};

const questions: Question[] = [
  {
    prompt: "ما هو الترتيب الصحيح لخطوات غسل اليدين السريري؟",
    answers: [
      {
        text: "ترطيب اليدين، فرك الصابون، شطف، تجفيف",
        correct: true,
        rationale:
          "ترطيب اليدين أولاً يسهل توزيع الصابون، ثم فرك لمدة 20 ثانية، يليها الشطف والتجفيف بمنديل معقم.",
      },
      {
        text: "فرك الصابون على اليدين الجافة، شطف، تجفيف",
        correct: false,
        rationale: "يجب ترطيب اليدين قبل الفرك لضمان فعالية التنظيف.",
      },
      {
        text: "تجفيف اليدين ثم فرك الصابون",
        correct: false,
        rationale: "التجفيف هو الخطوة الأخيرة فقط بعد الشطف.",
      },
    ],
  },
  {
    prompt: "أي من التالي يُعد من حقوق إعطاء الدواء الخمسة؟",
    answers: [
      {
        text: "الدواء الصحيح والوقت الصحيح والمريض الصحيح",
        correct: true,
        rationale:
          "الحقوق الخمسة تشمل: المريض الصحيح، الدواء الصحيح، الجرعة الصحيحة، الطريق الصحيح، الوقت الصحيح.",
      },
      {
        text: "اختيار نوع الإبرة المناسب لكل مريض",
        correct: false,
        rationale:
          "اختيار الإبرة مهارة مهمة لكنه ليس جزءاً من حقوق إعطاء الدواء الخمسة.",
      },
      {
        text: "توثيق استجابة المريض في نهاية اليوم",
        correct: false,
        rationale:
          "يجب التوثيق مباشرة بعد التدخل وليس في نهاية اليوم فقط، كما أنه ليس ضمن الحقوق الخمسة الأساسية.",
      },
    ],
  },
  {
    prompt: "ما الهدف من تقييم العلامات الحيوية كل أربع ساعات لمريض مستقر؟",
    answers: [
      {
        text: "مراقبة أي تغير مبكر قد يدل على تدهور الحالة",
        correct: true,
        rationale:
          "المراقبة المنتظمة تساعد على اكتشاف أي تغيرات مبكرة تمكن الفريق الصحي من التدخل بسرعة.",
      },
      {
        text: "الالتزام بالروتين التمريضي فقط",
        correct: false,
        rationale:
          "وجود خطة تقييم لهدف واضح يتعلق بسلامة المريض، وليس لمجرد الروتين.",
      },
      {
        text: "توفير الراحة للمريض",
        correct: false,
        rationale:
          "التقييم قد لا يزيد راحة المريض لكنه ضروري للمتابعة السريرية الدقيقة.",
      },
    ],
  },
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = useMemo(() => questions[index], [index]);

  const handleSelect = (choiceIndex: number) => {
    if (selected !== null) return;
    setSelected(choiceIndex);
    const choice = currentQuestion.answers[choiceIndex];
    if (choice.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (selected === null) return;
    if (index + 1 < questions.length) {
      setIndex((prev) => prev + 1);
      setSelected(null);
    } else {
      setCompleted(true);
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setCompleted(false);
  };

  return (
    <section
      id="quiz"
      className="space-y-5 rounded-3xl border border-emerald-200 bg-white p-8 shadow-2xl"
    >
      <div className="flex flex-col gap-2 text-right">
        <h2 className="text-xl font-bold text-emerald-700">اختبار سريع</h2>
        <p className="text-sm text-emerald-500">
          راجع معلوماتك في أساسيات التمريض. اختر الإجابة الصحيحة وشاهد التفسير
          فوراً.
        </p>
      </div>

      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
        <div className="flex items-center justify-between text-xs font-semibold text-emerald-600">
          <span>السؤال {index + 1} من {questions.length}</span>
          <span>الدرجة الحالية: {score}</span>
        </div>

        <div className="mt-4 space-y-4">
          <h3 className="text-lg font-semibold text-emerald-900">
            {currentQuestion.prompt}
          </h3>

          <div className="space-y-3">
            {currentQuestion.answers.map((answer, choiceIndex) => {
              const isSelected = selected === choiceIndex;
              const isCorrect = answer.correct;
              const showResult = selected !== null;

              return (
                <button
                  key={answer.text}
                  onClick={() => handleSelect(choiceIndex)}
                  className={`w-full rounded-xl border px-4 py-3 text-right text-sm transition ${
                    isSelected
                      ? "border-emerald-500 bg-white shadow"
                      : "border-transparent bg-white/90 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-emerald-900">{answer.text}</span>
                    {showResult && (
                      <span
                        className={`h-7 w-7 rounded-full text-xs font-bold ${
                          isCorrect
                            ? "bg-emerald-500/90 text-white"
                            : isSelected
                              ? "bg-rose-500/80 text-white"
                              : "bg-emerald-100 text-emerald-700"
                        }`}
                      ></span>
                    )}
                  </div>
                  {showResult && isSelected && (
                    <p className="mt-2 text-xs leading-5 text-emerald-700">
                      {answer.rationale}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {selected !== null && !completed && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                {index + 1 === questions.length ? "إنهاء الاختبار" : "السؤال التالي"}
              </button>
            </div>
          )}
        </div>
      </div>

      {completed && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-right">
          <h3 className="text-lg font-semibold text-emerald-800">
            أحسنت! نتيجتك {score} من {questions.length}
          </h3>
          <p className="mt-2 text-sm text-emerald-700">
            تابع قراءة الدروس وتدرب على المهارات العملية لتحافظ على مستواك. أعد
            الاختبار لتحسين نتيجة التعلم.
          </p>
          <div className="mt-4 text-left">
            <button
              onClick={resetQuiz}
              className="rounded-full border border-emerald-500 px-5 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-500 hover:text-white"
            >
              إعادة المحاولة
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
