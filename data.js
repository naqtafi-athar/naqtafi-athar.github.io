// The only file to edit when we post something new: add one entry to POSTS (newest first).
// Add a person to PEOPLE once; posts refer to people by their id.

window.PEOPLE = {
  amjad: {
    name: "الشيخ أمجد سمير",
    role: "داعية • مصر",
    links: [
      { label: "يوتيوب", url: "https://www.youtube.com/@amgad_samir" },
      {
        label: "القناة العلمية",
        url: "https://www.youtube.com/channel/UCoFflcHXUS78RlNMQJDbNGw",
      },
      { label: "فيسبوك", url: "https://www.facebook.com/amgad.samer.fouad" },
    ],
  },
  hazza: {
    name: "القارئ هزاع البلوشي",
    role: "قارئ",
    links: [
      { label: "يوتيوب", url: "https://www.youtube.com/@hazzaalblushi" },
      { label: "إنستقرام", url: "https://www.instagram.com/hazzaalblushi95/" },
    ],
  },
  awap: {
    name: "قناة «أواب»",
    role: "عرّفتنا بمقاطع الشيخ أمجد سمير",
    links: [{ label: "يوتيوب", url: "https://www.youtube.com/@a3waap" }],
  },
  sherif: {
    name: "أ. شريف علي",
    role: "داعية • مصر",
    links: [{ label: "يوتيوب", url: "https://www.youtube.com/@sherifali" }],
  },
  kamali: {
    name: "الشيخ سعيد الكملي",
    role: "عالم • المغرب",
    links: [{ label: "يوتيوب", url: "https://www.youtube.com/@elkamali" }],
  },
  dosari: {
    name: "الشيخ ياسر الدوسري",
    role: "قارئ • إمام الحرم المكي",
    links: [],
  },
  thabet: {
    name: "محمد ثابت",
    role: "عرّفنا بمقطع «فأنت معجب بإيه؟»",
    links: [
      { label: "إنستقرام", url: "https://www.instagram.com/mohamed1thabet/" },
    ],
  },
};

window.POSTS = [
  {
    title: "﴿والذين جاهدوا فينا﴾ وقفات مع الآية",
    date: "2026-10-25",
    type: "مقطع",
    people: ["amjad", "sherif", "kamali"],
    source: "الآية: العنكبوت ٦٩",
    links: [
      { label: "أمجد سمير: «مؤمن و كافر» (٥٧:٢٥)", url: "https://www.youtube.com/watch?v=jQF4Zl7v0Sk&t=3445s" },
      { label: "شريف علي: «مفاتيح الهداية (٢)» (٣١:٣٠)", url: "https://www.youtube.com/watch?v=_IiGAqcIJpI&t=1890s" },
      { label: "شريف علي: «المجاهدة» (١:٤٥)", url: "https://www.youtube.com/watch?v=ho6DN1M3ZVA&t=105s" },
      { label: "سعيد الكملي: «وإنّ الله لمع المحسنين» (١١:٢١)", url: "https://www.youtube.com/watch?v=6Xx6nX2IlWk&t=681s" },
    ],
  },
  {
    title: "سورة المؤمنون (٨٤–٩٢) مع الترجمة",
    date: "2026-10-24",
    type: "تلاوة",
    people: ["dosari"],
    source: "ترجمة معاني الآيات: Saheeh International",
    links: [],
  },
  {
    title: "فأنت معجب بإيه؟",
    date: "2026-10-23",
    type: "مقطع",
    people: ["amjad", "thabet"],
    source: "من درس «منزلة التوبة (٢)» • الآية: الحجرات ١٧",
    links: [
      {
        label: "الدرس كاملًا (٢٧:٣٩)",
        url: "https://www.youtube.com/watch?v=Kt1Qor1jwZI&t=1659s",
      },
    ],
  },
  {
    title: "لو تعلمون ما أعلم…",
    date: "2026-10-23",
    type: "مقطع",
    people: ["amjad", "awap"],
    source: "الحديث: البخاري (٦٤٨٥)، والترمذي (٢٣١٢، حسن)",
    links: [],
  },
  {
    title: "سورة الحجر (٨٦–٩٩) مع الترجمة",
    date: "2026-10-23",
    type: "تلاوة",
    people: ["hazza"],
    source: "ترجمة معاني الآيات: Saheeh International",
    links: [],
  },
  {
    title: "دنيا إيه اللي بنجري وراها؟!",
    date: "2026-10-23",
    type: "مقطع",
    people: ["amjad", "awap"],
    source: "",
    links: [],
  },
  {
    title: "سورة الحجر (٨٦–٩٩)",
    date: "2026-10-23",
    type: "تلاوة",
    people: ["hazza"],
    source: "",
    links: [],
  },
  {
    title: "ثمامة بن أثال: الأسير الذي أحبّ",
    date: "2026-10-23",
    type: "قصة",
    people: [],
    source: "صحيح البخاري (٤٣٧٢) وصحيح مسلم (١٧٦٤)",
    links: [],
  },
];
