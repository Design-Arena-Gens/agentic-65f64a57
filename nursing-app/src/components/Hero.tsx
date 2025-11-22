export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400 p-10 text-white shadow-2xl">
      <div className="absolute -start-24 -top-24 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-28 end-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 space-y-6 text-center md:text-right">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
          رحلة تعلم تمريضية موجهة للمبتدئين
        </p>
        <h1 className="text-3xl font-black leading-tight md:text-4xl">
          اكتشف أساسيات التمريض خطوة بخطوة مع خطة عملية ومصادر تفاعلية باللغة
          العربية
        </h1>
        <p className="text-lg leading-relaxed text-white/90 md:text-xl">
          من فهم دور الممرضة إلى مهارات الرعاية الأساسية، دروس مصغرة، دراسات
          حالة، وتمارين تقييم ذاتي تساعدك على بناء الثقة والاحترافية.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-end">
          <a
            href="#modules"
            className="flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            ابدأ خطة التعلم
          </a>
          <a
            href="#quiz"
            className="flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            اختبر معلوماتك الآن
          </a>
        </div>
      </div>
    </section>
  );
}
