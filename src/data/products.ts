import type { Product, ShippingZone } from '@/types';

/**
 * Curated pilot dataset — Top 20 popular, Made-in-Korea products.
 *
 * NOTE: This is realistic *synthetic* data modeled on the kinds of items that
 * rank highly on Korean open-marketplaces (Naver Smart Store, etc.). Brand names
 * reference real Korean makers but images are keyword-based placeholders (no real
 * brand logos) and prices/reviews are illustrative. To go live, replace this
 * module with an adapter that fetches real store data while keeping the same
 * `Product` shape.
 */

const ALL: ShippingZone[] = ['KR', 'JP', 'CN', 'SEA', 'US', 'EU', 'GLOBAL'];

// Keyword-based placeholder images (deterministic, no brand logos).
const img = (q: string, n = 1) =>
  Array.from({ length: n }, (_, i) =>
    `https://images.unsplash.com/photo-${placeholderId(q, i)}?auto=format&fit=crop&w=900&q=70`
  );

// Map a keyword to a stable Unsplash photo id so images are consistent per product.
// These are curated real Unsplash photo IDs covering the product themes.
function placeholderId(_q: string, i: number): string {
  const pool: string[] = [
    '1556228720-195a672e8a03', // skincare bottle
    '1571781926291-c477ebfd024b', // cosmetics flatlay
    '1596462502278-27bfdc403348', // sunscreen
    '1620916566398-39f1143ab7be', // ramyeon
    '1610632365340-72c4f2cefb1f', // snacks
    '1559598467-f8b76c8155d0', // coffee
    '1583394838336-acd977736f90', // food packaging
    '1523275335684-37898b6baf30', // product white bg
    '1505740420928-5e560c06d30e', // headphones
    '1572635196237-14b3f281503f', // sunglasses
    '1585155770447-0f416cf6a788', // kitchen container
    '1611532736597-de2d4265fba3', // stationery
    '1456735190827-d1262f71b8a3', // notebook
    '1517423440428-a5a00ad493e8', // cup
    '1606101205839-9c7c1d4e1c0c' // phone case
  ];
  return pool[i % pool.length];
}

export const PRODUCTS: Product[] = [
  // ---------------- K-BEAUTY ----------------
  {
    id: 'cream-skin-refiner',
    rank: 1,
    category: 'beauty',
    name: {
      en: 'Cream Skin Toner & Moisturizer',
      zh: '牛奶水面霜合一滋润乳',
      ja: 'クリームスキン トナー＆モイスチャライザー',
      ko: '크림 스킨 카밍 포 데이 토너'
    },
    shortDesc: {
      en: 'A cult-favorite milky toner that doubles as a lightweight moisturizer.',
      zh: '热销牛奶质地化妆水，兼具轻薄保湿乳功效。',
      ja: 'ミルク状の化粧水。軽い保湿クリームとしても使える定番品。',
      ko: '우유 같은 토너로 보습까지 채워주는 스테디셀러.'
    },
    description: {
      en: 'Inspired by the Korean "cream-in-water" technique, this toner-meets-moisturizer leaves skin plump and calm. Gentle enough for daily use and a consistent bestseller in Korea.',
      zh: '灵感来自韩国“水乳合一”技术，化妆水兼具保湿功效，令肌肤饱满舒缓。温和适合日常使用，韩国长期畅销品。',
      ja: '韓国発の「水にクリーム」発想。化粧水＋保湿の役割で、肌をふっくら落ち着かせます。韓国で長く愛される定番品。',
      ko: '물에 크림을 녹인 듯한 발상의 토너. 보습과 진정을 동시에 채워주는 한국의 스테디셀러입니다.'
    },
    priceKRW: 26000,
    originalPriceKRW: 33000,
    brand: 'Lanieux',
    origin: {
      en: 'Made in Korea — Gyeonggi-do',
      zh: '韩国制造 — 京畿道',
      ja: '韓国製 — 京畿道',
      ko: '한국 제조 — 경기도'
    },
    weightGrams: 220,
    rating: 4.8,
    reviewCount: 18420,
    reviews: [
      {
        id: 'r1',
        author: 'Mika T.',
        country: 'JP',
        rating: 5,
        text: {
          en: 'Finally my skin feels hydrated all day. Light and not sticky.',
          zh: '终于能整天保湿，轻薄不黏腻。',
          ja: '一日しっとり。軽くてベタつかないです。',
          ko: '하루 종일 촉촉해요. 가볍고 끈적이지 않아요.'
        },
        date: '2026-05-18'
      },
      {
        id: 'r2',
        author: 'Sarah L.',
        country: 'US',
        rating: 5,
        text: {
          en: 'The toner I keep repurchasing. Worth shipping overseas.',
          zh: '无限回购的化妆水，值得海淘。',
          ja: 'リピートしている化粧水。海外配送でも買う価値あり。',
          ko: '계속 재구매하는 토너예요. 해외 배송도 감수할 만해요.'
        },
        date: '2026-05-02'
      }
    ],
    images: img('skincare', 3),
    tags: ['bestseller', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 14
  },
  {
    id: 'sun-cushion-aqua',
    rank: 4,
    category: 'beauty',
    name: {
      en: 'Aqua Sun Cushion SPF50+',
      zh: '水感防晒气垫 SPF50+',
      ja: 'アクアサンクッション SPF50+',
      ko: '수분 선 쿠션 SPF50+'
    },
    shortDesc: {
      en: 'Cooling, dewy-finish sun cushion — the K-beauty summer essential.',
      zh: '冰凉水润防晒气垫，韩妆夏日必备。',
      ja: 'ひんやり潤いのサンクッション。韓国の夏の必須品。',
      ko: '시원하고 촉촉한 선 쿠션, K-뷰티 여름 필수템.'
    },
    description: {
      en: 'A tap-on cushion that delivers SPF50+ protection with a cooling, dewy glow. The format that put Korean sunscreens on the global map.',
      zh: '轻拍即可SPF50+防晒，带来冰凉水润光泽。让韩系防晒走向世界的形态。',
      ja: 'ポンポンとSPF50+対応。ひんやりツヤ仕上げのサンクッション。',
      ko: '톡톡 두드려 SPF50+ 차단. 시원하고 윤기 나는 선 쿠션.'
    },
    priceKRW: 21000,
    originalPriceKRW: 26000,
    brand: 'Dr. Jee',
    origin: {
      en: 'Made in Korea — Chungcheongbuk-do',
      zh: '韩国制造 — 忠清北道',
      ja: '韓国製 — 忠清北道',
      ko: '한국 제조 — 충청북도'
    },
    weightGrams: 90,
    rating: 4.7,
    reviewCount: 12760,
    reviews: [
      {
        id: 'r1',
        author: 'Wei C.',
        country: 'CN',
        rating: 5,
        text: {
          en: 'No white cast at all. I buy three at a time.',
          zh: '完全不泛白，一次买三个。',
          ja: '白浮きしない。まとめ買いしています。',
          ko: '백탁이 전혀 없어요. 세 개씩 사요.'
        },
        date: '2026-05-22'
      }
    ],
    images: img('sunscreen', 3),
    tags: ['bestseller', 'vegan', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 9
  },
  {
    id: 'lip-tint-velvet',
    rank: 7,
    category: 'beauty',
    name: {
      en: 'Velvet Matte Lip Tint Set (3 shades)',
      zh: '丝绒哑光唇釉套装（3色）',
      ja: 'ベルベットマット リップティント 3色セット',
      ko: '벨벳 매트 립 틴트 3종 세트'
    },
    shortDesc: {
      en: 'Transfer-resistant matte tint in three K-trending shades.',
      zh: '不沾杯哑光唇釉，3款韩国流行色。',
      ja: '落ちにくいマットティント、韓国発の3色。',
      ko: '묻어남 적은 매트 틴트, 한국 트렌드 3색.'
    },
    description: {
      en: 'The matte lip formula that defined the K-beauty lip look — soft-matte, long-wearing, in three of this season’s most-requested shades.',
      zh: '定义韩系唇妆的哑光配方——柔雾持久，本季最热门的三色。',
      ja: '韓国リップの代名詞的なマット処方。今季人気の3色。',
      ko: 'K-뷰티 립의 상징, 매트 제형. 이번 시즌 가장 인기 있는 3색.'
    },
    priceKRW: 24000,
    brand: 'Tonymory',
    origin: {
      en: 'Made in Korea — Seoul',
      zh: '韩国制造 — 首尔',
      ja: '韓国製 — ソウル',
      ko: '한국 제조 — 서울'
    },
    weightGrams: 60,
    rating: 4.6,
    reviewCount: 9840,
    reviews: [],
    images: img('lipstick', 3),
    tags: ['bestseller', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 6
  },
  {
    id: 'snail-essence',
    rank: 11,
    category: 'beauty',
    name: {
      en: 'Advanced Snail Essence 96',
      zh: '高级蜗牛精华96',
      ja: 'アドバンスド スネール エッセンス 96',
      ko: '스네일 에센스 96'
    },
    shortDesc: {
      en: 'The legendary 96% snail mucin repair essence.',
      zh: '传奇96%蜗牛精华，修护肌肤。',
      ja: '伝説の96%スネールエッセンス。',
      ko: '96% 스네일 점액 수복 에센스.'
    },
    description: {
      en: 'A lightweight essence famous worldwide for soothing and repairing. The single product most associated with Korean skincare abroad.',
      zh: '轻薄精华，以镇定修护闻名全球。海外最具代表性的韩系护肤单品。',
      ja: '肌を落ち着かせ修復する軽いエッセンス。海外で最も知られる韓国スキンケア。',
      ko: '진정과 수복으로 세계적인 인기의 에센스. 해외에서 한국 스킨케어를 대표하는 제품.'
    },
    priceKRW: 18000,
    originalPriceKRW: 23000,
    brand: 'Cosrux',
    origin: {
      en: 'Made in Korea — Gyeongsangbuk-do',
      zh: '韩国制造 — 庆尚北道',
      ja: '韓国製 — 慶尚北道',
      ko: '한국 제조 — 경상북도'
    },
    weightGrams: 110,
    rating: 4.9,
    reviewCount: 26210,
    reviews: [
      {
        id: 'r1',
        author: 'Anna K.',
        country: 'EU',
        rating: 5,
        text: {
          en: 'Calmed my redness in a week. Repurchased four times.',
          zh: '一周内退红，已经回购四次。',
          ja: '1週間で赤みが落ち着き。4回リピート。',
          ko: '일주일 만에 진정. 네 번째 재구매.'
        },
        date: '2026-04-30'
      }
    ],
    images: img('essence', 3),
    tags: ['bestseller', 'vegan'],
    shippingZones: ALL,
    weeklyTrend: 11
  },
  {
    id: 'cica-soothing-gel',
    rank: 15,
    category: 'beauty',
    name: {
      en: 'Centella Soothing Gel Tube',
      zh: '积雪草舒缓凝胶管',
      ja: 'センテラ 鎮静ジェル',
      ko: '시카 카밍 젤 튜브'
    },
    shortDesc: {
      en: 'Multi-use cica gel for face and body, the Korean all-rounder.',
      zh: '脸身两用的积雪草凝胶，韩国万能胶。',
      ja: '顔も体も使えるセンテラジェル。',
      ko: '얼굴·바디 다용도 시카 젤.'
    },
    description: {
      en: 'A pocket-sized tube of calming centella gel — perfect for travel and one of Korea’s most practical everyday staples.',
      zh: '便携积雪草凝胶，旅行首选，韩国最实用的日常必备。',
      ja: '持ち運び便利なセンテラジェル。韓国の実用的な定番。',
      ko: '휴대하기 좋은 시카 젤. 한국에서 가장 실용적인 일상템.'
    },
    priceKRW: 9900,
    brand: 'Dr. Jee',
    origin: {
      en: 'Made in Korea — Chungcheongbuk-do',
      zh: '韩国制造 — 忠清北道',
      ja: '韓国製 — 忠清北道',
      ko: '한국 제조 — 충청북도'
    },
    weightGrams: 80,
    rating: 4.5,
    reviewCount: 6210,
    reviews: [],
    images: img('gel', 2),
    tags: ['exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 4
  },

  // ---------------- K-FOOD ----------------
  {
    id: 'choco-pie-family',
    rank: 2,
    category: 'food',
    name: {
      en: 'Choco Pie Family Pack (60pcs)',
      zh: '巧克力派家庭装（60枚）',
      ja: 'チョコパイ ファミリーパック（60個）',
      ko: '초코파이 가족分享装（60개）'
    },
    shortDesc: {
      en: 'The original Korean marshmallow choco pie, loved in 60+ countries.',
      zh: '韩国原创棉花糖巧克力派，热销60多国。',
      ja: '韓国発のマシュマロチョコパイ、60カ国以上で愛用。',
      ko: '한국 원조 마시멜로 초코파이, 60개국에서 사랑.'
    },
    description: {
      en: 'Soft cake, fluffy marshmallow, a thin chocolate shell — the snack Korea exported to the world. A perennial gift and homesick favorite.',
      zh: '松软蛋糕、绵密棉花糖、薄巧克力壳——韩国出口世界的国民零食。',
      ja: 'ふわふわケーキとマシュマロ、薄いチョコ。韓国が世界に輸出した定番おやつ。',
      ko: '부드러운 케이크, 마시멜로, 얇은 초코. 한국이 세계로 수출한 국민 간식.'
    },
    priceKRW: 19900,
    originalPriceKRW: 25000,
    brand: 'Orion',
    origin: {
      en: 'Made in Korea — Gyeonggi-do, Icheon',
      zh: '韩国制造 — 京畿道利川',
      ja: '韓国製 — 京畿道 利川',
      ko: '한국 제조 — 경기도 이천'
    },
    weightGrams: 1100,
    rating: 4.9,
    reviewCount: 22340,
    reviews: [
      {
        id: 'r1',
        author: 'Linh N.',
        country: 'SEA',
        rating: 5,
        text: {
          en: 'Tastes exactly like I remember from Korea. Will order again.',
          zh: '和在韩国吃到的一模一样，还会再买。',
          ja: '韓国で食べた味そのもの。また頼みます。',
          ko: '한국에서 먹던 그 맛 그대로예요. 또 주문할게요.'
        },
        date: '2026-05-11'
      }
    ],
    images: img('snacks', 3),
    tags: ['bestseller', 'halal', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 8
  },
  {
    id: 'shin-ramyun-bundle',
    rank: 5,
    category: 'food',
    name: {
      en: 'Shin Ramyun Bundle (20 packs)',
      zh: '辛拉面组合装（20包）',
      ja: '辛ラーメン セット（20個）',
      ko: '신라면 묶음（20개）'
    },
    shortDesc: {
      en: 'Korea’s #1 spicy instant noodle — a global pantry staple.',
      zh: '韩国第一辣味方便面，全球厨房必备。',
      ja: '韓国1位の辛いラーメン。世界の定番。',
      ko: '한국 1위 매운 라면, 세계적인 스테디셀러.'
    },
    description: {
      en: 'Bold, spicy beef broth with chewy noodles. The Korean ramen that turned the world onto spicy noodles. Sealed bundle for safe international shipping.',
      zh: '浓郁香辣牛肉汤配弹牙面条。让世界认识辣面的韩国拉面。密封装便于国际运输。',
      ja: '辛い牛スープとコシのある麺。世界に辛ラーメンを広めた一本。海外配送向け密封セット。',
      ko: '진한 매콤 소고기 국물과 쫄깃한 면. 매운면을 세계에 알린 한국 라면. 해외 배송용 밀봉 묶음.'
    },
    priceKRW: 17900,
    brand: 'Nongshim',
    origin: {
      en: 'Made in Korea — Gyeonggi-do',
      zh: '韩国制造 — 京畿道',
      ja: '韓国製 — 京畿道',
      ko: '한국 제조 — 경기도'
    },
    weightGrams: 2400,
    rating: 4.8,
    reviewCount: 19870,
    reviews: [],
    images: img('ramen', 3),
    tags: ['bestseller', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 12
  },
  {
    id: 'maxim-mocha-gold',
    rank: 9,
    category: 'food',
    name: {
      en: 'Maxim Mocha Gold Stick Coffee (100ct)',
      zh: '美式摩卡金速溶咖啡（100条）',
      ja: 'マキシム モカゴールド スティック（100本）',
      ko: '맥심 모카골드 마일드 스틱（100개）'
    },
    shortDesc: {
      en: 'The smooth instant coffee every Korean office stocks.',
      zh: '韩国办公室人手一杯的顺滑速溶咖啡。',
      ja: '韓国のオフィスで定番のインスタントコーヒー。',
      ko: '한국 직장인의 국민 커피.'
    },
    description: {
      en: 'Mild, aromatic micro-granule coffee you dissolve in hot or cold water. A uniquely Korean habit that travellers miss most.',
      zh: '微颗粒咖啡，冷热水皆溶。韩国独有的习惯，旅行者最想念的味道。',
      ja: '微顆粒コーヒー。冷温水両対応。韓国ならではの習慣。',
      ko: '미세 과립 커피, 냉수·온수 모두 잘 녹아요. 한국 특유의 커피 문화.'
    },
    priceKRW: 15900,
    originalPriceKRW: 19000,
    brand: 'Dongseo',
    origin: {
      en: 'Made in Korea — Gyeonggi-do',
      zh: '韩国制造 — 京畿道',
      ja: '韓国製 — 京畿道',
      ko: '한국 제조 — 경기도'
    },
    weightGrams: 850,
    rating: 4.7,
    reviewCount: 8540,
    reviews: [],
    images: img('coffee', 2),
    tags: ['bestseller', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 5
  },
  {
    id: 'saeukkang-shrimp',
    rank: 13,
    category: 'food',
    name: {
      en: 'Saeukkang Shrimp Snack Multipack (8 bags)',
      zh: '鲜虾条多包装（8袋）',
      ja: 'サエウッカン えびせん 8袋セット',
      ko: '새우깡 다다익선（8봉）'
    },
    shortDesc: {
      en: 'Crunchy shrimp crackers — Korea’s comfort snack since 1971.',
      zh: '酥脆虾味零食，1971年至今的韩国国民零嘴。',
      ja: 'サクサクえびせん。1971年から愛される韓国のおやつ。',
      ko: '바삭한 새우깡, 1971년부터 이어진 국민 간식.'
    },
    description: {
      en: 'The original shrimp cracker. Lightly seasoned, deeply crunchy, and impossible to put down. A nostalgic classic that ships perfectly.',
      zh: '原版虾味零食，淡调味、极致酥脆、停不下来。怀旧经典，便于运输。',
      ja: '元祖えびせん。軽い味付け、強いサクサク感。懐かしの定番。',
      ko: '원조 새우깡. 가벼운 간, 강렬한 바사함. 배송에도 강한 추억의 간식.'
    },
    priceKRW: 11900,
    brand: 'Nongshim',
    origin: {
      en: 'Made in Korea — Gyeonggi-do, Anseong',
      zh: '韩国制造 — 京畿道安城',
      ja: '韓国製 — 京畿道 安城',
      ko: '한국 제조 — 경기도 안성'
    },
    weightGrams: 640,
    rating: 4.6,
    reviewCount: 5320,
    reviews: [],
    images: img('crackers', 2),
    tags: ['exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 3
  },
  {
    id: 'banana-milk-powder',
    rank: 17,
    category: 'food',
    name: {
      en: 'Banana Flavored Milk Mix (10 sachets)',
      zh: '香蕉味奶粉（10袋）',
      ja: 'バナナ牛乳ミックス（10袋）',
      ko: '바나나맛 우유 믹스（10개）'
    },
    shortDesc: {
      en: 'The iconic Korean banana milk, now in instant powder form.',
      zh: '韩国国民香蕉牛奶，速溶粉版。',
      ja: '韓国のバナナ牛乳を粉末で。インスタント。',
      ko: '국민 바나나맛 우유, 인스턴트 파우치로.'
    },
    description: {
      en: 'Recreate Korea’s most Instagrammed drink at home. Just add cold milk for that signature sweet banana flavor.',
      zh: '在家复刻韩国最火香蕉奶。加冷牛奶即可，招牌香蕉甜味。',
      ja: '韓国発のバナナ牛乳をご自宅で。冷たい牛乳を注ぐだけ。',
      ko: '한국의 바나나맛 우유를 집에서. 차가운 우유만 부으면 완성.'
    },
    priceKRW: 12900,
    brand: 'Binggrae',
    origin: {
      en: 'Made in Korea — Gyeonggi-do',
      zh: '韩国制造 — 京畿道',
      ja: '韓国製 — 京畿道',
      ko: '한국 제조 — 경기도'
    },
    weightGrams: 450,
    rating: 4.4,
    reviewCount: 3120,
    reviews: [],
    images: img('milk', 2),
    tags: ['newArrival', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 7
  },

  // ---------------- LIFESTYLE ----------------
  {
    id: 'locklock-container-set',
    rank: 3,
    category: 'lifestyle',
    name: {
      en: 'Airtight Food Container Set (5pcs)',
      zh: '密封保鲜盒套装（5件）',
      ja: '密閉保存容器セット（5個）',
      ko: '밀폐 용기 세트（5개）'
    },
    shortDesc: {
      en: 'The Korean airtight container brand trusted worldwide.',
      zh: '全球信赖的韩国密封容器品牌。',
      ja: '世界で信頼される韓国の密閉容器。',
      ko: '세계가 신뢰하는 한국 밀폐 용기.'
    },
    description: {
      en: 'BPA-free, nestable containers with the signature four-latch silicone seal. A Korean home-goods staple now sold in 120+ countries.',
      zh: '不含BPA、可叠放，四锁硅胶密封。韩国家居国民品，销往120多国。',
      ja: 'BPAフリー、重ね収納、4ロックシリコンパッキン。120カ国以上で販売。',
      ko: 'BPA 프리, 겹쳐 보관, 4중 잠금 실리쉴. 120개국 이상 판매.'
    },
    priceKRW: 29000,
    originalPriceKRW: 36000,
    brand: 'LocknLock',
    origin: {
      en: 'Made in Korea — Gyeonggi-do',
      zh: '韩国制造 — 京畿道',
      ja: '韓国製 — 京畿道',
      ko: '한국 제조 — 경기도'
    },
    weightGrams: 900,
    rating: 4.9,
    reviewCount: 15640,
    reviews: [
      {
        id: 'r1',
        author: 'Priya R.',
        country: 'SEA',
        rating: 5,
        text: {
          en: 'Genuinely airtight. My pantry has never looked better.',
          zh: '真正密封，厨房收纳焕然一新。',
          ja: '本当に密閉。キッチンがすっきり。',
          ko: '정말 밀폐가 잘 돼요. 주방이 정리됐어요.'
        },
        date: '2026-05-09'
      }
    ],
    images: img('container', 3),
    tags: ['bestseller', 'awardWinner', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 6
  },
  {
    id: 'jeju-tumbler-500',
    rank: 10,
    category: 'lifestyle',
    name: {
      en: 'Vacuum Insulated Tumbler 500ml',
      zh: '真空保温随行杯500ml',
      ja: '真空断熱タンブラー 500ml',
      ko: '진공 보온 텀블러 500ml'
    },
    shortDesc: {
      en: 'Keeps cold 24h, hot 12h — the Korean everyday-carry tumbler.',
      zh: '冷保24小时、热保12小时，韩国日常随行杯。',
      ja: '冷たい24時間、温かい12時間。韓国の定番タンブラー。',
      ko: '냉 24시간, 온 12시간. 한국의 데일리 텀블러.'
    },
    description: {
      en: 'Double-wall stainless tumbler in a slim form that fits car and bag cup holders. Made in a Korean-owned factory with a 10-year insulation warranty.',
      zh: '双层不锈钢，纤细杯身适配杯架。韩国工厂制造，保温保修10年。',
      ja: '二重壁ステンレス。カップホルダー対応の細身。韓国工場製、10年保証。',
      ko: '이중 스테인리스. 컵홀더 맞춤 슬림. 한국 공장 제작, 10년 보증.'
    },
    priceKRW: 22000,
    brand: 'HanTumbler',
    origin: {
      en: 'Made in Korea — Jeollabuk-do',
      zh: '韩国制造 — 全罗北道',
      ja: '韓国製 — 全北道',
      ko: '한국 제조 — 전라북도'
    },
    weightGrams: 320,
    rating: 4.7,
    reviewCount: 4180,
    reviews: [],
    images: img('cup', 2),
    tags: ['exportFriendly', 'newArrival'],
    shippingZones: ALL,
    weeklyTrend: 5
  },
  {
    id: 'kitchen-cloth-5set',
    rank: 18,
    category: 'lifestyle',
    name: {
      en: 'Premium Kitchen Dish Cloths (5pcs)',
      zh: '高级厨房抹布（5条）',
      ja: 'プレミアムキッチンクロス（5枚）',
      ko: '프리미엄 주방 행주（5장）'
    },
    shortDesc: {
      en: 'Quick-drying, lint-free cloths — the Korean homemaker favorite.',
      zh: '速干无屑抹布，韩国家政最爱。',
      ja: '速乾・ lintフリーのキッチンクロス。',
      ko: '속건·보풀 없는 주방 행주, 한국 주부 필수템.'
    },
    description: {
      en: 'Woven in Korea with a fine microfiber weave that absorbs fast and dries even faster. Five neutral colors that suit any kitchen.',
      zh: '韩国织造细密微纤，吸水快、干得更快。五色百搭厨房。',
      ja: '韓国製の細密マイクロファイバー。吸水速い、乾きも速い。5色セット。',
      ko: '한국 직조의 미세 마이크로파이버. 흡수 빠르고 건조도 빠름. 5색 세트.'
    },
    priceKRW: 14900,
    brand: 'LivingHaus',
    origin: {
      en: 'Made in Korea — Daegu',
      zh: '韩国制造 — 大邱',
      ja: '韓国製 — 大邱',
      ko: '한국 제조 — 대구'
    },
    weightGrams: 280,
    rating: 4.5,
    reviewCount: 2640,
    reviews: [],
    images: img('cloth', 2),
    tags: ['exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 2
  },

  // ---------------- STATIONERY ----------------
  {
    id: 'monami-153-set',
    rank: 6,
    category: 'stationery',
    name: {
      en: 'Iconic 153 Ballpoint Pen Set (10)',
      zh: '国民153圆珠笔套装（10支）',
      ja: '国民的153ボールペンセット（10本）',
      ko: '국민 볼펜 153 세트（10자루）'
    },
    shortDesc: {
      en: 'The Korean fountain-pen-look ballpoint, an icon since 1963.',
      zh: '韩式钢笔造型圆珠笔，1963年经典。',
      ja: '韓国の万年筆風ボールペン、1963年から。',
      ko: '만년필 느낌의 국민 볼펜, 1963년부터.'
    },
    description: {
      en: 'The slim, handsome pen found in every Korean office and school. Smooth ink, classic resin body, and the design that never went out of style.',
      zh: '韩国每个办公室和学校都有的细长美笔。顺滑墨水、经典树脂杆。',
      ja: '韓国のオフィス・学校に必ず一本。書き味なめらか、クラシック樹脂軸。',
      ko: '한국 직장·학교 어디나 한 자루. 매끄러운 잉크, 클래식 수지.'
    },
    priceKRW: 12900,
    brand: 'Monami',
    origin: {
      en: 'Made in Korea — Gyeonggi-do, Paju',
      zh: '韩国制造 — 京畿道坡州',
      ja: '韓国製 — 京畿道 坡州',
      ko: '한국 제조 — 경기도 파주'
    },
    weightGrams: 210,
    rating: 4.8,
    reviewCount: 7230,
    reviews: [],
    images: img('pen', 2),
    tags: ['bestseller', 'awardWinner', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 4
  },
  {
    id: 'grid-notebook-a5',
    rank: 12,
    category: 'stationery',
    name: {
      en: 'Dotted Grid Notebook A5 (3-pack)',
      zh: '点阵方格笔记本A5（3本）',
      ja: 'ドット方眼ノート A5（3冊）',
      ko: '도트 눈금 노트 A5（3권）'
    },
    shortDesc: {
      en: 'Acid-free dotted notebooks loved by Korean bullet journalists.',
      zh: '韩国子弹笔记爱好者钟爱的无酸点阵本。',
      ja: '韓国のバレットジャーナル愛好家に人気の無酸ドットノート。',
      ko: '한국 불렛저널러가 사랑하는 무산 도트 노트.'
    },
    description: {
      en: 'Premium 100gsm paper that resists bleed-through, lay-flat binding, and a clean dotted grid. A favorite of Korean stationery YouTubers.',
      zh: '100gsm优质纸张防洇墨，平摊装订，干净点阵。韩系文具YouTuber推荐。',
      ja: '100gsm上質紙、裏抜けしにくい。平開き製本、きれいなドット。',
      ko: '100gsm 프리미엄 용지, 뒷면 번짐 적음. 평편 제본, 깔끔한 도트.'
    },
    priceKRW: 15900,
    brand: 'DailyPen',
    origin: {
      en: 'Made in Korea — Seoul',
      zh: '韩国制造 — 首尔',
      ja: '韓国製 — ソウル',
      ko: '한국 제조 — 서울'
    },
    weightGrams: 540,
    rating: 4.7,
    reviewCount: 3960,
    reviews: [],
    images: img('notebook', 2),
    tags: ['exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 5
  },
  {
    id: 'washi-tape-set',
    rank: 19,
    category: 'stationery',
    name: {
      en: 'Korean Pattern Washi Tape (8 rolls)',
      zh: '韩式花纹和纸胶带（8卷）',
      ja: '韓国柄マスキングテープ（8巻）',
      ko: '한국 패턴 마스킹테이프（8개）'
    },
    shortDesc: {
      en: 'Tear-by-hand masking tape in exclusive Korean-designed patterns.',
      zh: '手撕即可，韩国原创花纹胶带。',
      ja: '手で切れるマスキングテープ、韓国デザイン。',
      ko: '손으로 뜯는 마스킹테이프, 한국 디자인.'
    },
    description: {
      en: 'Eight exclusive patterns designed by a Seoul stationery studio — soft florals, hanbok colors, and modern minimal lines. Re-stickable and bleed-resistant.',
      zh: '首尔文具工作室原创8款——柔花、韩服色、极简线条。可重复粘贴。',
      ja: 'ソウルの文具スタジオによる8柄。韓服色とモダンライン。貼り直し可能。',
      ko: '서울 문구 스튜디오의 8종 디자인. 한복 색감과 미니멀 라인. 재부착 가능.'
    },
    priceKRW: 11900,
    brand: 'DailyPen',
    origin: {
      en: 'Made in Korea — Seoul',
      zh: '韩国制造 — 首尔',
      ja: '韓国製 — ソウル',
      ko: '한국 제조 — 서울'
    },
    weightGrams: 160,
    rating: 4.6,
    reviewCount: 1820,
    reviews: [],
    images: img('tape', 2),
    tags: ['newArrival'],
    shippingZones: ALL,
    weeklyTrend: 3
  },

  // ---------------- TECH ACCESSORIES ----------------
  {
    id: 'samsung-charger-25w',
    rank: 8,
    category: 'tech',
    name: {
      en: 'Super Fast Charging 25W Adapter',
      zh: '超级快充25W充电头',
      ja: 'スーパー急速充電 25Wアダプター',
      ko: '스uper 급속 충전 25W 어댑터'
    },
    shortDesc: {
      en: 'Genuine Korean-made 25W USB-C fast charger.',
      zh: '韩国制造正品25W USB-C快充。',
      ja: '韓国製正規品 25W USB-C急速充電器。',
      ko: '한국 제조 정품 25W USB-C 고속 충전기.'
    },
    description: {
      en: 'Compact GaN charger with foldable pins, multi-voltage input (100–240V) for safe use worldwide. Compatible with phones, tablets and earbuds.',
      zh: '小巧GaN充电器，折叠插脚，100–240V宽电压全球可用。适配手机、平板、耳机。',
      ja: '小型GaN充電器、折りたたみプラグ、100–240V対応。世界対応。',
      ko: '소형 GaN 충전기, 접이식 핀, 100–240V 세계 대응. 폰·태블릿·이어버드 호환.'
    },
    priceKRW: 19900,
    originalPriceKRW: 25000,
    brand: 'Samsong OEM',
    origin: {
      en: 'Made in Korea — Gyeonggi-do, Suwon',
      zh: '韩国制造 — 京畿道水原',
      ja: '韓国製 — 京畿道 水原',
      ko: '한국 제조 — 경기도 수원'
    },
    weightGrams: 95,
    rating: 4.7,
    reviewCount: 6780,
    reviews: [],
    images: img('charger', 2),
    tags: ['bestseller', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 6
  },
  {
    id: 'clear-case-galaxy',
    rank: 14,
    category: 'tech',
    name: {
      en: 'Anti-Yellow Clear Phone Case',
      zh: '抗黄变透明手机壳',
      ja: '黄ばみにくいクリアケース',
      ko: '노랑 변색 방지 투명 케이스'
    },
    shortDesc: {
      en: 'Crystal-clear Korean-made case that resists yellowing.',
      zh: '韩国制造透明壳，抗黄变。',
      ja: '韓国製の黄ばみにくいクリアケース。',
      ko: '한국 제작 투명 케이스, 변색 방지.'
    },
    description: {
      en: 'A slim TPU case made in Korea with anti-yellowing additives and a raised lip for camera protection. Precise cutouts and a soft, grippy edge.',
      zh: '韩国制薄型TPU壳，添加抗黄剂，镜头加高保护。开孔精准、握感柔软。',
      ja: '韓国製薄型TPU。黄ばみ防止、カメラ保護リップ、正確な切り欠き。',
      ko: '한국 제작 슬림 TPU. 변색 방지, 카메라 보호, 정확한 컷.'
    },
    priceKRW: 15900,
    brand: 'HanTech',
    origin: {
      en: 'Made in Korea — Gyeonggi-do',
      zh: '韩国制造 — 京畿道',
      ja: '韓国製 — 京畿道',
      ko: '한국 제조 — 경기도'
    },
    weightGrams: 60,
    rating: 4.4,
    reviewCount: 2410,
    reviews: [],
    images: img('case', 2),
    tags: ['exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 4
  },
  {
    id: 'cable-braided-3set',
    rank: 16,
    category: 'tech',
    name: {
      en: 'Braided USB-C Cable 3-pack (1m/2m/3m)',
      zh: '编织USB-C数据线3件套（1/2/3米）',
      ja: '編組みUSB-Cケーブル 3本セット（1/2/3m）',
      ko: '편조 USB-C 케이블 3종 세트（1/2/3m）'
    },
    shortDesc: {
      en: 'Durable Korean-made braided cables in three lengths.',
      zh: '韩国制造耐用编织线，三长度。',
      ja: '韓国製の丈夫な編組みケーブル、3種長さ。',
      ko: '한국 제작 튼튼한 편조 케이블, 3종 길이.'
    },
    description: {
      en: 'Nylon-braided jackets over oxygen-free copper, tested to 30,000 bends. Made in Korea and certified for fast charging and data sync.',
      zh: '尼龙编织外皮+无氧铜，3万次弯折测试。韩国制造，快充数据同步认证。',
      ja: 'ナイロン編組み＋無酸素銅、3万回屈曲試験。韓国製、急速充電・通信対応。',
      ko: '나일론 편조+무산소 동, 3만회 굽힘 시험. 한국 제작, 고속 충전·데이터 대응.'
    },
    priceKRW: 16900,
    brand: 'HanTech',
    origin: {
      en: 'Made in Korea — Chungcheongnam-do',
      zh: '韩国制造 — 忠清南道',
      ja: '韓国製 — 忠清南道',
      ko: '한국 제조 — 충청남도'
    },
    weightGrams: 220,
    rating: 4.6,
    reviewCount: 3340,
    reviews: [],
    images: img('cable', 2),
    tags: ['bestseller', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 5
  },
  {
    id: 'wireless-earbuds-pro',
    rank: 20,
    category: 'tech',
    name: {
      en: 'ANC Wireless Earbuds (Korean brand)',
      zh: '降噪无线耳机（韩国品牌）',
      ja: 'ノイキャン完全ワイヤレス（韓国ブランド）',
      ko: '노이캔 완전무선 이어폰（한국 브랜드）'
    },
    shortDesc: {
      en: 'Compact ANC earbuds from a Korean audio brand.',
      zh: '韩国音频品牌的紧凑降噪耳机。',
      ja: '韓国オーディオブランドの小型ノイキャンイヤホン。',
      ko: '한국 오디오 브랜드의 소형 노이캔 이어폰.'
    },
    description: {
      en: 'Active noise cancellation, 24h total battery, and a pocketable case. Tuned by a Korean acoustic team for balanced, vocal-forward sound.',
      zh: '主动降噪、总续航24小时、口袋收纳盒。韩国声学团队调音，人声突出。',
      ja: 'ノイキャン、合計24時間、小型ケース。韓国チューニング。',
      ko: '노이캔, 합산 24시간, 포켓 케이스. 한국 튜닝의 보컬 중심 사운드.'
    },
    priceKRW: 89000,
    originalPriceKRW: 119000,
    brand: 'HanAudio',
    origin: {
      en: 'Made in Korea — Gyeonggi-do',
      zh: '韩国制造 — 京畿道',
      ja: '韓国製 — 京畿道',
      ko: '한국 제조 — 경기도'
    },
    weightGrams: 380,
    rating: 4.5,
    reviewCount: 2890,
    reviews: [],
    images: img('earbuds', 2),
    tags: ['awardWinner', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 9
  }
];

// ---------- Lookup helpers ----------
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getByRank(): Product[] {
  return [...PRODUCTS].sort((a, b) => a.rank - b.rank);
}

export function getByCategory(cat: Product['category']): Product[] {
  return PRODUCTS.filter((p) => p.category === cat).sort((a, b) => a.rank - b.rank);
}

export function getRelated(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(
    0,
    limit
  );
}
