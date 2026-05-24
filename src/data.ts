export interface MenuItem {
  id: string;
  name: string;
  price?: number;
  description?: string;
  image?: string;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon?: string;
  image?: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    "id": "gelato",
    "title": "جيلاتو",
    "icon": "IceCream",
    "image": "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=400&h=400",
    "items": [
      {
        "id": "g1",
        "name": "فانيلا",
        "description": "بوظة الجيلاتو الإيطالية الكلاسيكية والناعمة جداً",
        "image": "https://i.ibb.co/Z6N4kWjZ/Chat-GPT-Image-May-24-2026-08-31-50-AM.png"
      },
      {
        "id": "g2",
        "name": "شوكليت",
        "description": "لعشاق الكاكاو، جيلاتو الشوكولاتة الداكنة أو الحليب",
        "image": "https://i.ibb.co/fdJL2SRw/Chat-GPT-Image-May-24-2026-08-34-10-AM.png"
      },
      {
        "id": "g3",
        "name": "فراوله",
        "description": "جيلاتو منعش بنكهة الفراولة الطبيعية",
        "isPopular": true,
        "image": "https://i.ibb.co/MyZ5bM7Y/Chat-GPT-Image-May-24-2026-08-35-31-AM.png"
      },
      {
        "id": "g4",
        "name": "مانجا",
        "description": "عشق الصيف بنكهة المانجا اللذيذة والمنعشة",
        "image": "https://i.ibb.co/0yyQ206W/Chat-GPT-Image-May-24-2026-08-36-50-AM.png"
      },
      {
        "id": "g5",
        "name": "اوريو",
        "description": "جيلاتو بقطع الأوريو المقرمشة",
        "image": "https://intelligentfoods.ae/cdn/shop/files/Premium-HORECAPACK-CookiesandCream.jpg?v=1716205366",
        "price": 15
      },
      {
        "id": "g6",
        "name": "لوتوس",
        "description": "نكهة زبدة اللوتس تتألق في هذا الجيلاتو المتقن",
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "g7",
        "name": "فوريرو",
        "description": "البندق والشوكولاتة يجتمعان في جيلاتو فريرو روشيه الدافئ بالمذاق",
        "image": "https://images.unsplash.com/photo-1515022879532-69f2e32a6bc8?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "g8",
        "name": "رفايلو",
        "description": "طعم جوز الهند الرائع مستوحى من شوكولاتة رافايلو البيضاء",
        "image": "https://images.unsplash.com/photo-1582273610996-eb4270d0ade2?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "g9",
        "name": "سنكرز",
        "description": "کراميل وفول سوداني في جيلاتو السنيكرز الشهي",
        "image": "https://images.unsplash.com/photo-1545696563968-1ebdd9bd7855?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "g10",
        "name": "بلجيكي دارك",
        "description": "مذاق الشوكولاتة البلجيكية الداكنة لمحبي القهوة القوية",
        "image": "https://images.unsplash.com/photo-1570197781117-063a568b201a?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "g11",
        "name": "تيراميسو",
        "description": "حلوى التيراميسو الإيطالية تحولت لجيلاتو فاخر",
        "image": "https://images.unsplash.com/photo-1579954115563-e72bf138162b?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "g12",
        "name": "تفاح اخضر",
        "description": "جيلاتو سوربيه التفاح الأخضر الخفيف والحامض",
        "image": "https://images.unsplash.com/photo-1515982855194-e3db7c5417ab?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "g13",
        "name": "مسفلورا",
        "description": "السوربيه المنعش بنكهة فاكهة الحب المسفلورا",
        "image": "https://images.unsplash.com/photo-1591901844002-363eeea1a774?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "g14",
        "name": "ليمون ونعنع",
        "description": "انتعاش السوربيه المطلق بالليمون والنعناع",
        "image": "https://images.unsplash.com/photo-1576404172421-4d1a580e03be?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "g15",
        "name": "تشيز كيك",
        "description": "جيلاتو بنكهة التشيز كيك الغنية والجبن الكريمي",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "g16",
        "name": "رمان",
        "description": "نكهة الرمان الرائعة في بوظة سوربيه لذيذة",
        "image": "https://images.unsplash.com/photo-1546816578-83b6329cbfd4?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "g17",
        "name": "مانجا سوربيه",
        "description": "سوربيه مانجا استوائي بدون منتجات ألبان",
        "image": "https://images.unsplash.com/photo-1555580045-812e9b08560f?auto=format&fit=crop&q=80&w=400&h=400"
      }
    ]
  },
  {
    "id": "affogato-gelato",
    "title": "افوكاتو جيلاتو",
    "icon": "Coffee",
    "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=400&h=400",
    "items": [
      {
        "id": "af1",
        "name": "افوكاتو كلاسيك",
        "description": "كرة جيلاتو فانيلا غارقة في جرعة اسبريسو ساخنة",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "af2",
        "name": "افوكاتو نوتيلا",
        "description": "الافوكاتو مع لمسة من شوكولاتة النوتيلا الغنية",
        "price": 14,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1585494156145-1c60a44a2b90?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "af3",
        "name": "افوكاتو فوريرو",
        "description": "مزيج القهوة مع نكهة شوكولاتة الفريرو روشيه",
        "price": 16,
        "image": "https://images.unsplash.com/photo-1556910113-587ff7fa526a?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "af4",
        "name": "افوكاتو فستق حلبي",
        "description": "فستق حلبي مميز مدمج مع تناقض القهوة الساخنة والجيلاتو",
        "price": 16,
        "image": "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "af5",
        "name": "افوكاتو لوتوس",
        "description": "مزيج مبهر من النكهات يجمع اللوتس، الجيلاتو والقهوة",
        "price": 16,
        "image": "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "af6",
        "name": "افوكاتو تيراميسو",
        "description": "حلوى التيراميسو الإيطالية بصيغة الافوكاتو المنعش الساخن",
        "price": 16,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400&h=400"
      }
    ]
  },
  {
    "id": "waffles",
    "title": "الوافل",
    "icon": "CakeSlice",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&q=80&w=400&h=400",
    "items": [
      {
        "id": "w1",
        "name": "وافل كلاسيك",
        "description": "قطعة وافل ذهبية هشة تقدم مع شراب القيقب الحلو",
        "price": 16,
        "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "w2",
        "name": "وافل اوريو",
        "description": "وافل مغطى بفتات بسكويت الأوريو مع صوص الشوكولاتة",
        "price": 18,
        "image": "https://images.unsplash.com/photo-1551214062-8178a9c4bace?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "w3",
        "name": "وافل فستق حلبي",
        "description": "لعشاق الفستق، وافل مغطى بكريمة ومقرمشات الفستق الحلبي",
        "price": 20,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1504938363717-3bf90cefeadd?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "w4",
        "name": "وافل لوتوس",
        "description": "طعم فريد مع زبدة ومقرمشات اللوتس الغنية",
        "price": 18,
        "image": "https://images.unsplash.com/photo-1534432589214-5bfce229c1b3?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "w5",
        "name": "وافل جيلاتولاب محشي",
        "description": "تجربة استثنائية لوافل محشي بمكونات سرية لدينا",
        "price": 22,
        "image": "https://images.unsplash.com/photo-1525286591242-a1df1f52d9a9?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "w6",
        "name": "إضافة أي طعم",
        "description": "نكهتك المفضلة كإضافة غنية",
        "price": 2,
        "image": "https://images.unsplash.com/photo-1505500624-9b7e90e791cb?auto=format&fit=crop&q=80&w=400&h=400"
      }
    ]
  },
  {
    "id": "crepes",
    "title": "الكريب",
    "icon": "CakeSlice",
    "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=400&h=400",
    "items": [
      {
        "id": "cr1",
        "name": "كريب كلاسيك",
        "description": "كريب فرنسي رقيق وهش مع إضافات السكر أو النوتيلا الكلاسيكية",
        "price": 16,
        "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "cr2",
        "name": "كريب لوتوس",
        "description": "حلاوة الكريب مع زبدة لوتس المذابة الساحرة",
        "price": 18,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1586518776610-85fbd648ceeb?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "cr4",
        "name": "كريب اوريو",
        "description": "عجينة كريب مميزة مع حشوة الأوريو المقرمش",
        "price": 18,
        "image": "https://images.unsplash.com/photo-1551214062-8178a9c4bace?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "cr5",
        "name": "كريب فوتوشيني",
        "description": "كريب مقطع كشرائط الباستا غارقة بصوصات شوكولاتة متنوعة",
        "price": 20,
        "isPopular": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8NaqAih4UxAVNf3YgoqcG56vA0CNw0wBCCADNYZoPw&s=10"
      },
      {
        "id": "cr6",
        "name": "كريب جيلاتولاب محشي",
        "description": "كريب محشو بلمسة جيلاتولاب السرية لمذاق لا ينسى",
        "price": 22,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYSp5yoWXnbhr2dV6PxiPMUy3omUmChXes5AxoejvOg&s=10"
      }
    ]
  },
  {
    "id": "pancakes-fashafesh",
    "title": "البان كيك \\ فشافيش",
    "icon": "CakeSlice",
    "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&q=80&w=400&h=400",
    "items": [
      {
        "id": "pc1",
        "name": "بان كيك كاسة",
        "description": "طبقات من ميني بان كيك تقدم في كوب مع صوصات غنية",
        "price": 16,
        "image": "https://images.unsplash.com/photo-1528207776546-ba7e6ac9ce34?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "pc2",
        "name": "بان كيك كلاسيك",
        "description": "شرائح البان كيك الذهبية، الطرية، مع السيرب اللذيذ",
        "price": 16,
        "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "pc3",
        "name": "بان كيك لوتوس",
        "description": "بان كيك مغطى بكرم من صوص اللوتس الدافئ",
        "price": 18,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1598514982205-f36b96d1ea8d?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "pc4",
        "name": "بان كيك فستق حلبي",
        "description": "طعم الشرق الفاخر يتألق مع البان كيك وصوص الفستق",
        "price": 20,
        "image": "https://images.unsplash.com/photo-1504938363717-3bf90cefeadd?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "pc5",
        "name": "بان كيك اوريو",
        "description": "مزيج طراوة البان كيك مع قرمشة بسكويت الأوريو",
        "price": 18,
        "image": "https://images.unsplash.com/photo-1551214062-8178a9c4bace?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "pc6",
        "name": "بان كيك جيلاتولاب محشي",
        "description": "لمحبي المفاجآت، بان كيك محشو بالنكهة التي تحبها",
        "price": 22,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400&h=400"
      }
    ]
  },
  {
    "id": "hot-drinks",
    "title": "المشروبات الساخنة",
    "icon": "Coffee",
    "image": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=400&h=400",
    "items": [
      {
        "id": "h1",
        "name": "إسبريسو سنجل",
        "description": "جرعة مكثفة من القهوة الغنية لبداية يومك بطاقة كاملة",
        "price": 8,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1514432324607-a1282914cdc4?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h2",
        "name": "إسبريسو دبل",
        "description": "جرعة مضاعفة من الاسبريسو لعشاق القهوة القوية",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h3",
        "name": "ميكاتو",
        "description": "اسبريسو مع لمسة ناعمة من رغوة الحليب",
        "price": 10,
        "image": "https://images.unsplash.com/photo-1553882772-2d17c2f1f516?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h4",
        "name": "كابتشينو",
        "description": "مزيج متناغم من الاسبريسو مع الحليب المبخر والرغوة المخملية",
        "price": 12,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1461023058943-07cb14d4e28e?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h5",
        "name": "فلات وايت",
        "description": "قهوة ناعمة ومركزة مع حليب مبخر بدون رغوة كثيفة",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1545657077-4b77f98fb695?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h6",
        "name": "أمريكانو",
        "description": "قهوة سوداء كلاسيكية خفيفة ومثالية في أي وقت",
        "price": 10,
        "image": "https://images.unsplash.com/photo-1551199321-ea1c32ce3704?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h7",
        "name": "لاتيه",
        "description": "الكثير من الحليب الدافئ مع طبقة رقيقة من القهوة",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1511920170033-f83b692aaad1?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h8",
        "name": "شاي لاتيه",
        "description": "شاي ممزوج مع الحليب المبخر لتجربة دافئة ومريحة",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1515822363715-27bed90cd243?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h9",
        "name": "كراميل",
        "description": "مشروب دافئ محلى بصوص الكراميل الغني بنكهة لا تقاوم",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1485808191679-5f8f983c374c?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h10",
        "name": "فرنش فانيلا",
        "description": "مشروب بنكهة الفانيليا الفرنسية الأصيلة الفاخرة",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1505500624-9b7e90e791cb?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h11",
        "name": "فرنش بندق",
        "description": "نكهة البندق المحمص الدافئة مدمجة في مشروبك اللذيذ",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1521302080334-efa305be962d?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h12",
        "name": "لوتوس",
        "description": "طعم الكراميل والبسكويت الغني في مشروب اللوتس المميز",
        "price": 14,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1563805042-7684c8a9e9bc?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h13",
        "name": "موكا",
        "description": "تناغم رائع بين القهوة وصوص الشوكولاتة اللذيذة",
        "price": 14,
        "image": "https://images.unsplash.com/photo-1532054044572-1b15aa795493?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h14",
        "name": "وايت موكا",
        "description": "مذاق الشوكولاتة البيضاء الحلو يتجانس مع القهوة الفاخرة",
        "price": 14,
        "image": "https://images.unsplash.com/photo-1515822363715-27bed90cd243?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h15",
        "name": "سحلب",
        "description": "مشروب الشتاء المفضل مزين بالمكسرات والقرفة الساحرة",
        "price": 8,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1544783307-e85d4f3b7301?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h16",
        "name": "نسكافيه",
        "description": "القهوة السريعة الكلاسيكية لبداية يومك بلطف",
        "price": 8,
        "image": "https://images.unsplash.com/photo-1553882772-2d17c2f1f516?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h17",
        "name": "زهورات مكس",
        "description": "مجموعة منتقاة من الأعشاب المفيدة لتهدئة الأعصاب",
        "price": 7,
        "image": "https://images.unsplash.com/photo-1576092762791-dd9e2220afa1?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h18",
        "name": "شاي أطعمه",
        "description": "شاي بنكهتك المفضلة لتجربة منعشة ودافئة",
        "price": 7,
        "image": "https://images.unsplash.com/photo-1558160057-0a442ed3f2df?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "h19",
        "name": "إضافة أي طعم",
        "description": "اجعل مشروبك على ذوقك مع إضافة نكهتك المفضلة",
        "price": 2,
        "image": "https://images.unsplash.com/photo-1505500624-9b7e90e791cb?auto=format&fit=crop&q=80&w=400&h=400"
      }
    ]
  },
  {
    "id": "cold-drinks",
    "title": "المشروبات الباردة",
    "icon": "CupSoda",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400&h=400",
    "items": [
      {
        "id": "c1",
        "name": "إيسكو",
        "description": "مشروب بارد مميز ومنعش",
        "price": 10,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1499961024600-d0f1ebac9ebb?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "c2",
        "name": "إيس امريكانو",
        "description": "الامريكانو المنعش مع قطع الثلج لأيام الصيف",
        "price": 10,
        "image": "https://images.unsplash.com/photo-1517701550927-30cfac07cd47?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "c3",
        "name": "إيس لاتيه",
        "description": "اسبريسو مع الحليب البارد والثلج لمذاق خفيف ونضر",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "c4",
        "name": "إيس مسفلورا",
        "description": "مشروب صيفي بارد بنكهة فاكهة الباشن فروت (المسفلورا)",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1521406159676-47e127916af7?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "c5",
        "name": "إيس جوز هند",
        "description": "برودة الصيف مع نكهة جوز الهند الاستوائية",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1559868739-166258aaad8e?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "c6",
        "name": "إيس خوخ",
        "description": "شاي مثلج بنكهة الخوخ، الانتعاش الحقيقي في رشفة",
        "price": 12,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1524151283-9e45ddb1de57?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "c7",
        "name": "إيس بينا كولادا",
        "description": "المزيج الاستوائي الأشهر من الأناناس وجوز الهند",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1592543322197-28ece9a87d0c?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "c8",
        "name": "إيس أناناس",
        "description": "برودة وعذوبة الأناناس في مشروب منعش ولذيذ",
        "price": 14,
        "image": "https://images.unsplash.com/photo-1503342084534-11f868c2eeff?auto=format&fit=crop&q=80&w=400&h=400"
      }
    ]
  },
  {
    "id": "fresh-drinks",
    "title": "المشروبات الطازجة",
    "icon": "CupSoda",
    "image": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=400&h=400",
    "items": [
      {
        "id": "fd1",
        "name": "ليموناضة",
        "description": "عصير الليمون الطازج بالنعناع لانتعاش مثالي في أي وقت",
        "price": 10,
        "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "fd2",
        "name": "ليمون ونعنع",
        "description": "الخلطة الكلاسيكية لأقصى درجات الانتعاش الصيفي",
        "price": 12,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1536935338-722fb9b2ec51?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "fd3",
        "name": "مانجا",
        "description": "عصير المانجا الاستوائي الكثيف والغني بالطعم",
        "price": 14,
        "image": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=400&h=400"
      }
    ]
  },
  {
    "id": "milkshakes",
    "title": "ملك شيك",
    "icon": "CupSoda",
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400&h=400",
    "items": [
      {
        "id": "ms1",
        "name": "ملك شيك شوكليت",
        "description": "ميلك شيك كلاسيكي لعشاق الشوكولاتة الغنية",
        "price": 16,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "ms2",
        "name": "ملك شيك فانيلا",
        "description": "مزيج الحليب والفانيليا الفاخرة لطعم ناعم وحلو",
        "price": 16,
        "image": "https://images.unsplash.com/photo-1586985223041-38415ce675c9?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "ms3",
        "name": "ملك شيك فراولة",
        "description": "حلاوة الفراولة الطازجة في ميلك شيك لذيذ وبارد",
        "price": 16,
        "image": "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "ms4",
        "name": "ملك شيك اوريو",
        "description": "بسكويت الأوريو المطحون يمتزج مع الحليب للذة مضاعفة",
        "price": 18,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "ms5",
        "name": "ملك شيك لوتوس",
        "description": "صوص اللوتس وبسكويته يذوبان في مشروب غني وحالي",
        "price": 18,
        "image": "https://images.unsplash.com/photo-1586985223041-38415ce675c9?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "ms6",
        "name": "ملك شيك كورنيتو",
        "description": "نكهة ايسكريم الكورنيتو الشهيرة على شكل مشروب بارد",
        "price": 18,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "ms7",
        "name": "ملك شيك فوريرو",
        "description": "شوكولاتة البندق الفاخرة ممزوجة في مشروب ملكي",
        "price": 20,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "ms8",
        "name": "ملك شيك جيلاتو لاب",
        "description": "وصفة جيلاتولاب الخاصة والسرية للميلك شيك",
        "price": 22,
        "image": "https://images.unsplash.com/photo-1586985223041-38415ce675c9?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "ms10",
        "name": "ملك شيك ديتوكس",
        "description": "مزيج مبتكر ومفيد",
        "price": 22,
        "image": "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "ms9",
        "name": "ملك شيك بالفستق الحلبي",
        "description": "نكهة الشوكولاتة الشهيرة دبي مع الفستق الحلبي الأصيل",
        "price": 22,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "ms11",
        "name": "اكس ال إضافة",
        "description": "اضافة مشروب طاقة",
        "price": 4,
        "image": "https://images.unsplash.com/photo-1558066606-d7b1d6184fed?auto=format&fit=crop&q=80&w=400&h=400"
      }
    ]
  },
  {
    "id": "mojito",
    "title": "الموهيتو",
    "icon": "CupSoda",
    "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=400&h=400",
    "items": [
      {
        "id": "mo1",
        "name": "ديتوكس صودا وخيار",
        "description": "مشروب نقي ومنعش لتصفية الجسم والمزاج",
        "price": 10,
        "image": "https://kitchen.sayidaty.net/uploads/small/27/27c72c0206369f49ed381634376a6c76_w750_h750.jpg"
      },
      {
        "id": "mo2",
        "name": "موهيتو ليمون",
        "description": "موهيتو كلاسيكي لا غنى عنه، ليمون ونعناع منعش",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "mo3",
        "name": "موهيتو بطيخ",
        "description": "حلاوة البطيخ الصيفي ممزوجة بالموهيتو المنعش",
        "price": 12,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1563227443-4cc0fba7541d?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "mo4",
        "name": "موهيتو رمان",
        "description": "نكهة الرمان الغنية تضفي لوناً وطعماً مميزاً",
        "price": 12,
        "isPopular": true,
        "image": "https://images.unsplash.com/photo-1546816578-83b6329cbfd4?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "mo5",
        "name": "موهيتو كيوي",
        "description": "الكيوي الحامض الحلو يندمج ببراعة في مشروبك",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1591901844002-363eeea1a774?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "mo6",
        "name": "موهيتو بيل جام كاندي",
        "description": "طعم الحلوى الساحر الذي سيذكرك بأيام الطفولة",
        "price": 13,
        "image": "https://images.unsplash.com/photo-1600271886742-f049cd451b06?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "mo7",
        "name": "موهيتو بلو اناناس",
        "description": "مزيج منعش من أناناس استوائي بلمسة بلوبيري رائعة",
        "price": 13,
        "image": "https://images.unsplash.com/photo-1536935338-722fb9b2ec51?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "mo8",
        "name": "موهيتو فواكه استوائية",
        "description": "تشكيلة من فواكه الصيف الاستوائية في كوب واحد",
        "price": 13,
        "image": "https://images.unsplash.com/photo-1521406159676-47e127916af7?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "mo9",
        "name": "موهيتو تفاح اخضر",
        "description": "حموضة التفاح الأخضر اللذيذة تنعش حواسك",
        "price": 13,
        "image": "https://images.unsplash.com/photo-1515982855194-e3db7c5417ab?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "mo12",
        "name": "موهيتو فراولة",
        "description": "نكهة الفراولة اللذيذة في موهيتو منعش",
        "price": 13,
        "image": "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "mo10",
        "name": "موهيتو جيلاتو لاب",
        "description": "الموهيتو الخاص بالمكان بمكونات فريدة",
        "price": 14,
        "image": "https://images.unsplash.com/photo-1600271886742-f049cd451b06?auto=format&fit=crop&q=80&w=400&h=400"
      }
    ]
  },
  {
    "id": "soft-drinks",
    "title": "سوفت درنكس",
    "icon": "CupSoda",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400&h=400",
    "items": [
      {
        "id": "sd1",
        "name": "كولا / سبرايت",
        "description": "المشروبات الغازية الكلاسيكية والمنعشة",
        "price": 5,
        "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "sd2",
        "name": "اكس ال",
        "description": "مشروب طاقة لزيادة حيويتك ونشاطك",
        "price": 8,
        "image": "https://images.unsplash.com/photo-1558066606-d7b1d6184fed?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "sd3",
        "name": "بلو. داي/ نعنع / سك",
        "description": "مشروب بلو المنعش بنكهات متعددة",
        "price": 7,
        "image": "https://images.unsplash.com/photo-1536935338-722fb9b2ec51?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "sd4",
        "name": "فيروز اناناس",
        "description": "مشروب شعير خالي من الكحول بنكهة الأناناس",
        "price": 7,
        "image": "https://images.unsplash.com/photo-1503342084534-11f868c2eeff?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "sd5",
        "name": "بافاريا تفاح",
        "description": "مشروب التفاح الغازي الخالي من الكحول",
        "price": 7,
        "image": "https://images.unsplash.com/photo-1515982855194-e3db7c5417ab?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "sd6",
        "name": "صودا سك",
        "description": "مياه غازية سادة لمزيد من الانتعاش",
        "price": 7,
        "image": "https://images.unsplash.com/photo-1565557768-3e5e43fd19dc?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "sd7",
        "name": "مياه معدنية صغير",
        "description": "الخيار الصحي والأساسي، حجم مناسب",
        "price": 3,
        "image": "https://images.unsplash.com/photo-1523362628428-5e4bb1d55655?auto=format&fit=crop&q=80&w=400&h=400"
      },
      {
        "id": "sd8",
        "name": "مياه معدنية كبير",
        "description": "مياه نقية منعشة حجم عائلي",
        "price": 6,
        "image": "https://images.unsplash.com/photo-1523362628428-5e4bb1d55655?auto=format&fit=crop&q=80&w=400&h=400"
      }
    ]
  }
];
