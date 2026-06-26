import type { LocalizedString, Product, ShippingZone } from '@/types';

const ALL: ShippingZone[] = ['KR', 'JP', 'CN', 'SEA', 'US', 'EU', 'GLOBAL'];

const text = (en: string, ko = en): LocalizedString => ({
  en,
  ko
});

const reviewText = text;

export const PRODUCTS: Product[] = [
  {
    id: 'cream-skin-refiner',
    rank: 1,
    category: 'beauty',
    name: text('LANEIGE Cream Skin Cerapeptide Refiner 170ml', '라네즈 크림 스킨 세라펩타이드 리파이너 170ml'),
    shortDesc: text(
      'A milky barrier toner with a cream-in-skin finish.',
      '크림을 녹인 듯한 보습감의 장벽 토너.'
    ),
    description: text(
      'A lightweight toner-refiner built around ceramide and peptide care. It is a recognizable K-beauty staple for shoppers who want a calm, hydrated finish without a heavy cream layer.',
      '세라마이드와 펩타이드 케어를 담은 가벼운 토너 리파이너입니다. 무겁지 않은 보습감과 편안한 마무리로 해외 K-뷰티 고객에게 익숙한 대표 상품입니다.'
    ),
    priceKRW: 26000,
    originalPriceKRW: 33000,
    brand: 'LANEIGE',
    origin: text('Made in Korea - Gyeonggi-do', '한국 제조 - 경기도'),
    weightGrams: 220,
    rating: 4.8,
    reviewCount: 18420,
    reviews: [
      {
        id: 'r1',
        author: 'Mika T.',
        country: 'JP',
        rating: 5,
        text: reviewText(
          'My skin feels hydrated all day. Light and not sticky.',
          '하루 종일 피부가 촉촉해요. 가볍고 끈적이지 않습니다.'
        ),
        date: '2026-05-18'
      },
      {
        id: 'r2',
        author: 'Sarah L.',
        country: 'US',
        rating: 5,
        text: reviewText(
          'The toner I keep repurchasing. Worth shipping overseas.',
          '계속 재구매하는 토너예요. 해외 배송비를 내도 만족합니다.'
        ),
        date: '2026-05-02'
      }
    ],
    images: [
      'https://us.laneige.com/cdn/shop/files/1080x10800_Thumbnail_Product.jpg?v=1739393277',
      'https://www.kiseki.ca/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/l/a/laneige_cream_skin_cerapeptide_refiner0.jpg',
      'https://www.kiseki.ca/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/l/a/laneige_cream_skin_cerapeptide_refiner1.jpg'
    ],
    tags: ['bestseller', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 14
  },
  {
    id: 'choco-pie-family',
    rank: 2,
    category: 'food',
    name: text('Orion Choco Pie Original Family Pack', '오리온 초코파이 오리지널 패밀리팩'),
    shortDesc: text(
      'The Korean marshmallow cake snack loved worldwide.',
      '전 세계에서 사랑받는 한국식 마시멜로 케이크 스낵.'
    ),
    description: text(
      'Soft cake, marshmallow center and a thin chocolate coating. This family-size pack is light enough for international shipping and familiar enough to become an easy gift.',
      '부드러운 케이크와 마시멜로, 얇은 초콜릿 코팅이 어우러진 한국 대표 간식입니다. 가족팩 구성으로 선물용과 간식용 모두에 잘 맞습니다.'
    ),
    priceKRW: 19900,
    originalPriceKRW: 25000,
    brand: 'Orion',
    origin: text('Made in Korea - Gyeonggi-do, Icheon', '한국 제조 - 경기도 이천'),
    weightGrams: 1100,
    rating: 4.9,
    reviewCount: 22340,
    reviews: [
      {
        id: 'r1',
        author: 'Linh N.',
        country: 'SEA',
        rating: 5,
        text: reviewText(
          'Tastes exactly like I remember from Korea. Will order again.',
          '한국에서 먹던 그 맛이에요. 다시 주문할게요.'
        ),
        date: '2026-05-11'
      }
    ],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/ORION_-_Choco_Pie.jpg/960px-ORION_-_Choco_Pie.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Orion-Choco-Pie-1.jpg/500px-Orion-Choco-Pie-1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/ORION_CHOCO_PIE_CHINA_VERSION_%283%29.jpg/960px-ORION_CHOCO_PIE_CHINA_VERSION_%283%29.jpg'
    ],
    tags: ['bestseller', 'halal', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 8
  },
  {
    id: 'locklock-container-set',
    rank: 3,
    category: 'lifestyle',
    name: text('LocknLock Classic Airtight Container Set', '락앤락 클래식 밀폐용기 세트'),
    shortDesc: text(
      'Clear stackable containers with LocknLock latch lids.',
      '락앤락 잠금 뚜껑을 갖춘 투명 적층형 밀폐용기.'
    ),
    description: text(
      'A practical Korean kitchen staple: stackable clear containers with blue latch lids for pantry storage, leftovers and meal prep. The set photographs like a real shipped product rather than a lifestyle placeholder.',
      '한국 주방에서 익숙한 실용적인 밀폐용기 세트입니다. 투명한 용기와 파란 잠금 뚜껑으로 식재료 보관, 남은 음식, 밀프렙에 잘 맞습니다.'
    ),
    priceKRW: 29000,
    originalPriceKRW: 36000,
    brand: 'LocknLock',
    origin: text('Designed in Korea', '한국 브랜드 기획'),
    weightGrams: 900,
    rating: 4.9,
    reviewCount: 15640,
    reviews: [
      {
        id: 'r1',
        author: 'Priya R.',
        country: 'SEA',
        rating: 5,
        text: reviewText(
          'Genuinely airtight. My pantry has never looked better.',
          '정말 밀폐가 잘 돼요. 팬트리가 훨씬 깔끔해졌습니다.'
        ),
        date: '2026-05-09'
      }
    ],
    images: [
      'https://cdn11.bigcommerce.com/s-sp9oc95xrw/images/stencil/1280x1280/products/14516/62726/8382287_731df55f-261f-40cb-be66-5e66e2867425_1024_1024__50642.1688635382.jpg?c=2',
      'https://cdn11.bigcommerce.com/s-sp9oc95xrw/products/14516/images/62726/8382287_731df55f-261f-40cb-be66-5e66e2867425_1024_1024__50642.1688635382.386.513.jpg?c=2'
    ],
    tags: ['bestseller', 'awardWinner', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 6
  },
  {
    id: 'sun-cushion-aqua',
    rank: 4,
    category: 'beauty',
    name: text('Dr.G Green Mild Up Sun+ SPF50+', '닥터지 그린 마일드 업 선 플러스 SPF50+'),
    shortDesc: text(
      'A mineral sunscreen known for sensitive-skin daily use.',
      '민감 피부 데일리 선크림으로 잘 알려진 무기자차.'
    ),
    description: text(
      'A Korean mineral sunscreen with SPF50+ protection and a mild daily-wear positioning. Compact and export-friendly, it is an easier real-product match than the earlier generic sun-cushion placeholder.',
      'SPF50+ 보호와 순한 사용감을 내세운 한국 무기자차 선크림입니다. 기존 선쿠션 합성 상품보다 실제 구매 상품에 가깝게 정리했습니다.'
    ),
    priceKRW: 21000,
    originalPriceKRW: 26000,
    brand: 'Dr.G',
    origin: text('Made in Korea - Chungcheongbuk-do', '한국 제조 - 충청북도'),
    weightGrams: 90,
    rating: 4.7,
    reviewCount: 12760,
    reviews: [
      {
        id: 'r1',
        author: 'Wei C.',
        country: 'CN',
        rating: 5,
        text: reviewText(
          'No heavy feeling. I buy two tubes at a time.',
          '무겁지 않아서 좋아요. 한 번에 두 개씩 구매합니다.'
        ),
        date: '2026-05-22'
      }
    ],
    images: [
      'https://upload.skin-seoul.com/wp-content/uploads/2024/05/4415-represent.webp',
      'https://upload.skin-seoul.com/wp-content/uploads/2024/05/4415-add1.webp'
    ],
    tags: ['bestseller', 'vegan', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 9
  },
  {
    id: 'shin-ramyun-bundle',
    rank: 5,
    category: 'food',
    name: text('Nongshim Shin Ramyun Bundle', '농심 신라면 번들'),
    shortDesc: text(
      'Korea’s iconic spicy instant noodle in a shipping-safe bundle.',
      '해외 배송에 맞춘 한국 대표 매운 라면 번들.'
    ),
    description: text(
      'Bold beef-style broth, springy noodles and the unmistakable red pack. A pantry essential for K-food shoppers and one of the easiest products to recognize from the photo alone.',
      '진한 매운 국물과 쫄깃한 면, 강렬한 빨간 패키지가 특징인 대표 K-라면입니다. 사진만으로도 바로 알아볼 수 있는 인기 식품입니다.'
    ),
    priceKRW: 17900,
    brand: 'Nongshim',
    origin: text('Made in Korea - Gyeonggi-do', '한국 제조 - 경기도'),
    weightGrams: 2400,
    rating: 4.8,
    reviewCount: 19870,
    reviews: [],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/%EC%8B%A0%EB%9D%BC%EB%A9%B4%28%EB%B4%89%EC%A7%80%EB%A9%B4%29_%EA%B5%AC%EC%84%B1%ED%92%88.jpg/1280px-%EC%8B%A0%EB%9D%BC%EB%A9%B4%28%EB%B4%89%EC%A7%80%EB%A9%B4%29_%EA%B5%AC%EC%84%B1%ED%92%88.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/2014_%EB%86%8D%EC%8B%AC_%EC%8B%A0%EB%9D%BC%EB%A9%B4.jpg/250px-2014_%EB%86%8D%EC%8B%AC_%EC%8B%A0%EB%9D%BC%EB%A9%B4.jpg'
    ],
    tags: ['bestseller', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 12
  },
  {
    id: 'monami-153-set',
    rank: 6,
    category: 'stationery',
    name: text('Monami 153 Ballpoint Pen Set', '모나미 153 볼펜 세트'),
    shortDesc: text(
      'The classic Korean office-and-school ballpoint pen.',
      '한국 사무실과 학교에서 익숙한 클래식 볼펜.'
    ),
    description: text(
      'The slim black-and-white Monami 153 is one of Korea’s most recognizable stationery designs. Lightweight, inexpensive and perfect for a small overseas parcel.',
      '흑백의 슬림한 모나미 153은 한국 문구를 대표하는 디자인 중 하나입니다. 가볍고 부담 없는 가격이라 해외 소포 상품으로도 잘 맞습니다.'
    ),
    priceKRW: 12900,
    brand: 'Monami',
    origin: text('Made in Korea - Gyeonggi-do, Paju', '한국 제조 - 경기도 파주'),
    weightGrams: 210,
    rating: 4.8,
    reviewCount: 7230,
    reviews: [],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Monami_153.jpg/960px-Monami_153.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Monami_153_ball_pen.jpg/960px-Monami_153_ball_pen.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Korea_Monami_09_%2815452773099%29.jpg/960px-Korea_Monami_09_%2815452773099%29.jpg'
    ],
    tags: ['bestseller', 'awardWinner', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 4
  },
  {
    id: 'lip-tint-velvet',
    rank: 7,
    category: 'beauty',
    name: text('rom&nd Juicy Lasting Tint', '롬앤 쥬시 래스팅 틴트'),
    shortDesc: text(
      'Glossy K-beauty lip tint with a vivid stain finish.',
      '생기 있는 착색감의 글로시 K-뷰티 립틴트.'
    ),
    description: text(
      'A Korean lip tint with a glassy finish and a compact tube format. The product photography now matches what a shopper expects from a cosmetics listing.',
      '맑고 글로시한 마무리와 휴대하기 쉬운 튜브형 패키지가 특징인 한국 립틴트입니다. 화장품 쇼핑 화면에 어울리는 실제 상품컷으로 교체했습니다.'
    ),
    priceKRW: 24000,
    brand: 'rom&nd',
    origin: text('Made in Korea - Seoul', '한국 제조 - 서울'),
    weightGrams: 60,
    rating: 4.6,
    reviewCount: 9840,
    reviews: [],
    images: [
      'https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/96/884/g0101788496.jpg',
      'https://d1flfk77wl2xk4.cloudfront.net/Assets/95/884/L_p0101788495.jpg',
      'https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/97/884/g0101788497.jpg'
    ],
    tags: ['bestseller', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 6
  },
  {
    id: 'samsung-charger-25w',
    rank: 8,
    category: 'tech',
    name: text('Samsung 25W USB-C Fast Charger', '삼성 25W USB-C 고속 충전기'),
    shortDesc: text(
      'Compact USB-C wall adapter for fast everyday charging.',
      '일상 고속 충전에 적합한 컴팩트 USB-C 어댑터.'
    ),
    description: text(
      'A simple 25W USB-C charger listing with clean packshot photography. It replaces the previous generic charger card with a real accessory-style product image.',
      '깔끔한 제품컷을 갖춘 25W USB-C 충전기 상품입니다. 기존의 일반 이미지 대신 실제 액세서리 판매 화면에 가까운 사진을 사용했습니다.'
    ),
    priceKRW: 19900,
    originalPriceKRW: 25000,
    brand: 'Samsung',
    origin: text('Korean brand accessory', '한국 브랜드 액세서리'),
    weightGrams: 95,
    rating: 4.7,
    reviewCount: 6780,
    reviews: [],
    images: [
      'https://i.hinnavaatlus.ee/p/1200/30/66/8720287033400menhd1.jpg',
      'https://i.hinnavaatlus.ee/p/1200/7f/ac/8720287033400aenhd1.jpg',
      'https://i.hinnavaatlus.ee/p/1200/3f/dd/8720287033400genhd1.jpg'
    ],
    tags: ['bestseller', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 6
  },
  {
    id: 'maxim-mocha-gold',
    rank: 9,
    category: 'food',
    name: text('Maxim Mocha Gold Mild Coffee Mix 100 Sticks', '맥심 모카골드 마일드 커피믹스 100개입'),
    shortDesc: text(
      'The yellow-box instant coffee found in Korean offices.',
      '한국 사무실에서 익숙한 노란 박스 커피믹스.'
    ),
    description: text(
      'A 100-stick instant coffee box with the recognizable Maxim yellow packaging. It adds an everyday Korean grocery cue to the marketplace.',
      '맥심 특유의 노란 패키지가 눈에 띄는 100개입 커피믹스입니다. 한국 장보기 앱에서 볼 법한 일상 상품감을 더합니다.'
    ),
    priceKRW: 15900,
    originalPriceKRW: 19000,
    brand: 'Dongsuh Maxim',
    origin: text('Made in Korea - Gyeonggi-do', '한국 제조 - 경기도'),
    weightGrams: 850,
    rating: 4.7,
    reviewCount: 8540,
    reviews: [],
    images: [
      'https://chegourmet.co.za/cdn/shop/files/Product-248.jpg?v=1749218343',
      'https://chegourmet.co.za/cdn/shop/files/Product-248.jpg?v=1749218343&width=990'
    ],
    tags: ['bestseller', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 5
  },
  {
    id: 'jeju-tumbler-500',
    rank: 10,
    category: 'lifestyle',
    name: text('LocknLock Metro Cafe Ceramic Tumbler 500ml', '락앤락 메트로 카페 세라믹 텀블러 500ml'),
    shortDesc: text(
      'A minimal insulated tumbler for commute coffee.',
      '출근길 커피에 어울리는 미니멀 보온 텀블러.'
    ),
    description: text(
      'A clean, cafe-style tumbler product that fits the lifestyle shelf better than a generic cup image. The warm neutral photo adds a real home-goods feel.',
      '카페 스타일의 미니멀 텀블러 상품입니다. 일반 컵 이미지보다 실제 라이프스타일 상품 진열에 가까운 인상을 줍니다.'
    ),
    priceKRW: 22000,
    brand: 'LocknLock',
    origin: text('Korean brand accessory', '한국 브랜드 액세서리'),
    weightGrams: 320,
    rating: 4.7,
    reviewCount: 4180,
    reviews: [],
    images: [
      'https://bizweb.dktcdn.net/100/416/657/products/lhc4357.jpg?v=1727235159043',
      'https://bizweb.dktcdn.net/100/416/657/products/vn-11134207-7r98o-lv1dc6lhx05571-1715150991506.jpg?v=1727235159043',
      'https://bizweb.dktcdn.net/100/416/657/products/vn-11134207-7r98o-lv1btvhdawey96-1715150991506.jpg?v=1727235159043'
    ],
    tags: ['exportFriendly', 'newArrival'],
    shippingZones: ALL,
    weeklyTrend: 5
  },
  {
    id: 'snail-essence',
    rank: 11,
    category: 'beauty',
    name: text('COSRX Advanced Snail 96 Mucin Power Essence', '코스알엑스 어드밴스드 스네일 96 뮤신 파워 에센스'),
    shortDesc: text(
      'A viral snail mucin essence for hydrated glass-skin routines.',
      '촉촉한 글라스 스킨 루틴으로 유명한 스네일 뮤신 에센스.'
    ),
    description: text(
      'A global K-beauty staple built around snail secretion filtrate. The bottle is highly recognizable, so using the real product photo makes the detail page feel much more credible.',
      '스네일 뮤신 성분으로 널리 알려진 글로벌 K-뷰티 대표 상품입니다. 병 형태가 잘 알려져 있어 실제 사진을 넣었을 때 상세 페이지의 신뢰감이 크게 올라갑니다.'
    ),
    priceKRW: 18000,
    originalPriceKRW: 23000,
    brand: 'COSRX',
    origin: text('Made in Korea - Gyeonggi-do', '한국 제조 - 경기도'),
    weightGrams: 110,
    rating: 4.9,
    reviewCount: 26210,
    reviews: [
      {
        id: 'r1',
        author: 'Anna K.',
        country: 'EU',
        rating: 5,
        text: reviewText(
          'Calmed my redness in a week. Repurchased four times.',
          '일주일 만에 붉은기가 진정됐어요. 네 번째 재구매입니다.'
        ),
        date: '2026-04-30'
      }
    ],
    images: [
      'https://www.cosrx.com/cdn/shop/files/james_800x1067_1_1_4e9750cc-2cd6-4817-ace5-be2305a85806_1200x1200.jpg?v=1763111577',
      'https://www.cosrx.com/cdn/shop/files/Advanced_Snail_96_Mucin_Power_Essence_100ml_1_1200x1200.jpg?v=1763111577'
    ],
    tags: ['bestseller', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 11
  },
  {
    id: 'grid-notebook-a5',
    rank: 12,
    category: 'stationery',
    name: text('ICONIC A5 Grid Wire Notebook', '아이코닉 A5 그리드 와이어 노트'),
    shortDesc: text(
      'A neat Korean grid notebook for planning and study.',
      '기획과 공부에 쓰기 좋은 한국 감성 그리드 노트.'
    ),
    description: text(
      'A real Korean stationery product with a distinct green-wire grid notebook look. It gives the stationery shelf a more specific visual language than a generic notebook photo.',
      '초록 와이어와 그리드 내지가 특징인 실제 한국 문구 상품입니다. 일반 노트 사진보다 문구 카테고리의 성격이 더 또렷하게 보입니다.'
    ),
    priceKRW: 15900,
    brand: 'ICONIC',
    origin: text('Made in Korea - Seoul', '한국 제조 - 서울'),
    weightGrams: 540,
    rating: 4.7,
    reviewCount: 3960,
    reviews: [],
    images: [
      'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/11606/191242/ICONIC-Vertically-half-divided-wire-bound-A5-grid-notebook-10__39948.1613209152.jpg?c=2',
      'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/11606/191252/ICONIC-Vertically-half-divided-wire-bound-A5-grid-notebook-01__78928.1613209151.jpg?c=2',
      'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/11606/191246/ICONIC-Vertically-half-divided-wire-bound-A5-grid-notebook-04__66227.1613209112.jpg?c=2'
    ],
    tags: ['exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 5
  },
  {
    id: 'saeukkang-shrimp',
    rank: 13,
    category: 'food',
    name: text('Nongshim Saewookkang Shrimp Snack', '농심 새우깡'),
    shortDesc: text(
      'Crunchy shrimp crackers, Korea’s classic comfort snack.',
      '바삭한 새우맛 스낵, 한국의 클래식 간식.'
    ),
    description: text(
      'A red-and-gold pack that is instantly recognizable in Korean snack aisles. The product image now shows both the bag and the actual crackers.',
      '한국 과자 코너에서 바로 알아볼 수 있는 빨강·금색 패키지의 대표 스낵입니다. 봉지와 실제 과자 모양이 함께 보이는 사진을 사용했습니다.'
    ),
    priceKRW: 11900,
    brand: 'Nongshim',
    origin: text('Made in Korea - Gyeonggi-do, Anseong', '한국 제조 - 경기도 안성'),
    weightGrams: 640,
    rating: 4.6,
    reviewCount: 5320,
    reviews: [],
    images: [
      'https://image.wiselycompany.co.kr/prod/products/3976/image_0.jpg?w=1200&h=630&q=80&f=webp'
    ],
    tags: ['exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 3
  },
  {
    id: 'clear-case-galaxy',
    rank: 14,
    category: 'tech',
    name: text('Ringke Fusion Clear Phone Case', '링케 퓨전 클리어 폰 케이스'),
    shortDesc: text(
      'A transparent protective case that keeps the phone color visible.',
      '기기 색상을 살려주는 투명 보호 케이스.'
    ),
    description: text(
      'A real Korean accessory brand listing with multiple detail photos. The clear case image is specific enough to make the tech shelf feel like an actual catalog.',
      '실제 한국 액세서리 브랜드의 상세 사진을 사용했습니다. 투명 케이스의 디테일이 보여 테크 카테고리가 실제 카탈로그처럼 느껴집니다.'
    ),
    priceKRW: 15900,
    brand: 'Ringke',
    origin: text('Korean brand accessory', '한국 브랜드 액세서리'),
    weightGrams: 60,
    rating: 4.4,
    reviewCount: 2410,
    reviews: [],
    images: [
      'https://ringke.co.kr/web/product/big/202407/ab469be311c32ec00302e5b2ce7ff6a3.jpg',
      'https://ringke.co.kr/web/product/extra/big/202407/603874be698f1345c29b64b1dba8d643.jpg',
      'https://ringke.co.kr/web/product/extra/big/202407/f04cfd14a48459b3ad2e9ff97a4d7165.jpg'
    ],
    tags: ['exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 4
  },
  {
    id: 'cica-soothing-gel',
    rank: 15,
    category: 'beauty',
    name: text('Dr.Jart+ Cicapair Tiger Grass Calming Gel Cream', '닥터자르트 시카페어 타이거 그래스 카밍 젤 크림'),
    shortDesc: text(
      'Centella-focused gel cream for stressed, sensitive skin.',
      '민감하고 지친 피부를 위한 센텔라 젤 크림.'
    ),
    description: text(
      'A recognizable Dr.Jart+ Cicapair product with a clean clinical tube-and-box photo. It makes the beauty shelf feel more like a curated retailer than a mock dataset.',
      '닥터자르트 시카페어 라인의 튜브와 박스가 함께 보이는 깔끔한 제품컷입니다. 뷰티 카테고리를 더 실제 편집숍처럼 보이게 합니다.'
    ),
    priceKRW: 9900,
    brand: 'Dr.Jart+',
    origin: text('Made in Korea - Chungcheongbuk-do', '한국 제조 - 충청북도'),
    weightGrams: 80,
    rating: 4.5,
    reviewCount: 6210,
    reviews: [],
    images: [
      'https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw46aea353/products/DR_JART/UK200032628_DR_JART.jpg',
      'https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw1f6e45b4/products/DR_JART/UK200032628_DR_JART_1.jpg',
      'https://www.keoji.com.au/cdn/shop/products/DrJartCicapairCalmingGelCream_80ml_1_1024x.jpg?v=1621408021'
    ],
    tags: ['exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 4
  },
  {
    id: 'cable-braided-3set',
    rank: 16,
    category: 'tech',
    name: text('Samsung USB-C to USB-C Cable', '삼성 USB-C to USB-C 케이블'),
    shortDesc: text(
      'A practical USB-C cable for charging and data sync.',
      '충전과 데이터 전송에 쓰기 좋은 USB-C 케이블.'
    ),
    description: text(
      'A simple cable accessory listing with packaging-style photography. It pairs naturally with the charger in cart recommendations.',
      '패키지형 사진을 사용한 기본 케이블 액세서리 상품입니다. 충전기와 함께 장바구니 추천에 자연스럽게 어울립니다.'
    ),
    priceKRW: 16900,
    brand: 'Samsung',
    origin: text('Korean brand accessory', '한국 브랜드 액세서리'),
    weightGrams: 220,
    rating: 4.6,
    reviewCount: 3340,
    reviews: [],
    images: [
      'https://i.hinnavaatlus.ee/p/1200/84/a1/66731p1.jpg',
      'https://i.hinnavaatlus.ee/p/1200x630f/84/a1/66731p1.jpg'
    ],
    tags: ['bestseller', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 5
  },
  {
    id: 'banana-milk-powder',
    rank: 17,
    category: 'food',
    name: text('Binggrae Banana Flavored Milk', '빙그레 바나나맛 우유'),
    shortDesc: text(
      'The iconic Korean banana milk bottle.',
      '한국을 대표하는 단지 모양 바나나맛 우유.'
    ),
    description: text(
      'The rounded yellow bottle is one of Korea’s most recognizable convenience-store drinks. This real product photo makes the grocery shelf immediately more familiar.',
      '둥근 노란 단지 모양 병으로 유명한 한국 편의점 대표 음료입니다. 실제 제품 사진이 들어가 식품 카테고리의 현실감이 높아졌습니다.'
    ),
    priceKRW: 12900,
    brand: 'Binggrae',
    origin: text('Made in Korea - Gyeonggi-do', '한국 제조 - 경기도'),
    weightGrams: 450,
    rating: 4.4,
    reviewCount: 3120,
    reviews: [],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/e/e7/Bananamilk.jpg'
    ],
    tags: ['newArrival', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 7
  },
  {
    id: 'kitchen-cloth-5set',
    rank: 18,
    category: 'lifestyle',
    name: text('Premium Microfiber Dish Cloth Set', '프리미엄 극세사 행주 세트'),
    shortDesc: text(
      'Pastel microfiber cloths for a cleaner Korean kitchen shelf.',
      '주방 진열에 잘 어울리는 파스텔 극세사 행주.'
    ),
    description: text(
      'A compact home-goods item with visible texture and color. The photo feels like a small Korean marketplace listing rather than a generic fabric placeholder.',
      '질감과 색상이 잘 보이는 소형 생활용품입니다. 일반 천 이미지가 아니라 한국 마켓 상품 리스트처럼 보이도록 사진을 교체했습니다.'
    ),
    priceKRW: 14900,
    brand: 'LivingHaus',
    origin: text('Made in Korea - Daegu', '한국 제조 - 대구'),
    weightGrams: 280,
    rating: 4.5,
    reviewCount: 2640,
    reviews: [],
    images: [
      'https://contents.lotteon.com/itemimage/20251230133913/LO/25/98/11/72/48/_2/59/81/17/24/9/LO2598117248_2598117249_1.png',
      'https://contents.lotteon.com/itemimage/20260519111220/LO/25/50/91/37/16/_2/55/09/13/71/7/LO2550913716_2550913717_1.jpg'
    ],
    tags: ['exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 2
  },
  {
    id: 'washi-tape-set',
    rank: 19,
    category: 'stationery',
    name: text('Korean Palace Pattern Masking Tape Set', '궁 패턴 마스킹 테이프 세트'),
    shortDesc: text(
      'Decorative tape with traditional Korean palace motifs.',
      '한국 궁중 문양을 담은 장식용 마스킹 테이프.'
    ),
    description: text(
      'A stationery product with a clear Korean visual identity: palace pattern tape, strong color and craft-friendly product photography.',
      '궁중 문양과 선명한 색감이 살아 있는 문구 상품입니다. 한국적인 시각 요소가 뚜렷해 앱의 상품 큐레이션 성격을 강화합니다.'
    ),
    priceKRW: 11900,
    brand: 'Nessmom',
    origin: text('Made in Korea - Seoul', '한국 제조 - 서울'),
    weightGrams: 160,
    rating: 4.6,
    reviewCount: 1820,
    reviews: [],
    images: [
      'https://cdn.imweb.me/thumbnail/20250609/728f6251f0580.jpg',
      'https://cdn.imweb.me/thumbnail/20250609/1d34994a3403b.jpg',
      'https://cdn.imweb.me/thumbnail/20250610/a60afc487f3fc.jpg'
    ],
    tags: ['newArrival'],
    shippingZones: ALL,
    weeklyTrend: 3
  },
  {
    id: 'wireless-earbuds-pro',
    rank: 20,
    category: 'tech',
    name: text('Samsung Galaxy Buds FE White', '삼성 갤럭시 버즈 FE 화이트'),
    shortDesc: text(
      'Compact wireless earbuds with active noise cancelling.',
      '액티브 노이즈 캔슬링을 지원하는 컴팩트 무선 이어버드.'
    ),
    description: text(
      'A white Galaxy Buds product photo with clear case-and-earbud detail. It makes the tech accessory shelf feel current and recognizable.',
      '화이트 갤럭시 버즈의 이어버드와 케이스 디테일이 보이는 제품 사진입니다. 테크 액세서리 카테고리에 익숙하고 현재적인 느낌을 줍니다.'
    ),
    priceKRW: 89000,
    originalPriceKRW: 119000,
    brand: 'Samsung',
    origin: text('Korean brand accessory', '한국 브랜드 액세서리'),
    weightGrams: 380,
    rating: 4.5,
    reviewCount: 2890,
    reviews: [],
    images: [
      'https://bestmart.cl/cdn/shop/files/audifonos-samsung-galaxy-buds-fe-blanco-6407795_600x.jpg?v=1758551210',
      'https://bestmart.cl/cdn/shop/files/audifonos-samsung-galaxy-buds-fe-blanco-4579955_600x.jpg?v=1758551210',
      'https://smadshop.md/image/cache/data/nauwniki/casti-fara-fir-samsung-galaxy-buds-pro-sm-r190-white-ya85-5--750x750.jpg'
    ],
    tags: ['awardWinner', 'exportFriendly'],
    shippingZones: ALL,
    weeklyTrend: 9
  }
];

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
