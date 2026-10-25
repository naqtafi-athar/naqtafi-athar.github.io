// The only file to edit when we post something new: add one entry to POSTS (newest first).
// Add a person to PEOPLE once; posts refer to people by their id.
// person.avatar: a file in avatars/ (their official channel picture); without it the page shows their first letter.
// post.watch: where to watch our post. The main button opens YouTube when it exists, otherwise Instagram.

window.PEOPLE = {
  amjad: {
    avatar: "avatars/amjad.jpg",
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
    avatar: "avatars/hazza.jpg",
    name: "القارئ هزاع البلوشي",
    role: "قارئ",
    links: [
      { label: "يوتيوب", url: "https://www.youtube.com/@hazzaalblushi" },
      { label: "إنستقرام", url: "https://www.instagram.com/hazzaalblushi95/" },
    ],
  },
  awap: {
    avatar: "avatars/awap.jpg",
    name: "قناة «أواب»",
    role: "عرّفتنا بمقاطع الشيخ أمجد سمير",
    links: [{ label: "يوتيوب", url: "https://www.youtube.com/@a3waap" }],
  },
  sherif: {
    avatar: "avatars/sherif.jpg",
    name: "أ. شريف علي",
    role: "داعية • مصر",
    links: [{ label: "يوتيوب", url: "https://www.youtube.com/@sherifali" }],
  },
  kamali: {
    avatar: "avatars/kamali.jpg",
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
    avatar: "avatars/thabet.jpg",
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
    watch: {
      youtube: "https://www.youtube.com/shorts/xMEja4dls8Q",
      instagram: "https://www.instagram.com/naqtafi.athar/reel/De583CWobHO/",
      tiktok: "https://www.tiktok.com/@naqtafi.athar/video/7700472790469627156",
    },
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
    watch: {
      instagram: "https://www.instagram.com/naqtafi.athar/reel/De324iauqHY/",
      tiktok: "https://www.tiktok.com/@naqtafi.athar/video/7700172582674369813",
    },
    date: "2026-10-24",
    type: "تلاوة",
    people: ["dosari"],
    source: "ترجمة معاني الآيات: Saheeh International",
    links: [],
  },
  {
    title: "فأنت معجب بإيه؟",
    watch: {
      youtube: "https://www.youtube.com/shorts/BsKX1dsw3b4",
      instagram: "https://www.instagram.com/naqtafi.athar/reel/De2LezrRyhM/",
      tiktok: "https://www.tiktok.com/@naqtafi.athar/video/7700086956398611733",
    },
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
    watch: {
      youtube: "https://www.youtube.com/shorts/_DvKP9R08Cc",
      instagram: "https://www.instagram.com/naqtafi.athar/reel/De2C0gzxUt8/",
      tiktok: "https://www.tiktok.com/@naqtafi.athar/video/7700086848600902932",
    },
    date: "2026-10-23",
    type: "مقطع",
    people: ["amjad", "awap"],
    source: "الحديث: البخاري (٦٤٨٥)، والترمذي (٢٣١٢، حسن)",
    links: [],
  },
  {
    title: "سورة الحجر (٨٦–٩٩) مع الترجمة",
    watch: {
      instagram: "https://www.instagram.com/naqtafi.athar/reel/De2B7xcuwYW/",
      tiktok: "https://www.tiktok.com/@naqtafi.athar/video/7700087179694935316",
    },
    date: "2026-10-23",
    type: "تلاوة",
    people: ["hazza"],
    source: "ترجمة معاني الآيات: Saheeh International",
    links: [],
  },
  {
    title: "دنيا إيه اللي بنجري وراها؟!",
    watch: {
      youtube: "https://www.youtube.com/shorts/vG-n71VMw7A",
      instagram: "https://www.instagram.com/naqtafi.athar/reel/De164SqR_y1/",
      tiktok: "https://www.tiktok.com/@naqtafi.athar/video/7699900873773829396",
    },
    date: "2026-10-23",
    type: "مقطع",
    people: ["amjad", "awap"],
    source: "",
    links: [],
  },
  {
    title: "سورة الحجر (٨٦–٩٩)",
    watch: {
      instagram: "https://www.instagram.com/naqtafi.athar/reel/De1zUosxAMN/",
    },
    date: "2026-10-23",
    type: "تلاوة",
    people: ["hazza"],
    source: "",
    links: [],
  },
  {
    title: "ثمامة بن أثال: الأسير الذي أحبّ",
    watch: {
      instagram: "https://www.instagram.com/naqtafi.athar/p/De1wJU0jglC/",
    },
    date: "2026-10-23",
    type: "قصة",
    people: [],
    source: "صحيح البخاري (٤٣٧٢) وصحيح مسلم (١٧٦٤)",
    links: [],
  },
];
