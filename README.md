# Han:Pick (한:Pick) — Pilot App

> **한국이 사랑하는 제품, 이제 전 세계로.**
> A pilot mobile marketplace for popular **Made-in-Korea** products with international shipping.

한국에서 유행하고 인기 있는 제품을 해외 소비자가 쉽게 찾고 살 수 있도록 만든 모바일 우선 쇼핑 앱(반응형 PWA)입니다. 한국 제조 검증(생산지 표시), 해외 배송 가능 여부, 무게 기반 배송비 계산을 핵심 신뢰 요소로 설계했습니다.

---

## ✨ 핵심 기능

- **큐레이션 Top 20** — 네이버 스마트스토어 구조를 모방한 한국 인기 제품(뷰티·푸드·생활·문구·테크)
- **4개국어 UI** — English / 中文 / 日本語 / 한국어 (브라우저 언어 자동 감지)
- **통화 전환** — KRW ⇄ USD (모든 가격 토글)
- **"Made in Korea" 신뢰 배지** — 모든 상품에 생산지(예: 경기도 파주) 명시
- **해외 배송비 계산기** — 국가/지역 + 총 무게 기반 자동 계산, 예상 배송일
- **장바구니** — 수량 조절, 묶음 배송, 새로고침 후에도 유지(localStorage)
- **PWA** — 홈화면 설치 가능, 오프라인 캐싱

## 🎨 디자인 방향

미니멀 프리미엄 — 따뜻한 오프화이트 배경, 잉크 블랙 본문, 코랄 레드(`#E63946`) 단일 액센트. 템플릿 쇼핑몰의 시각적 노이즈를 빼고 에디토리얼 큐레이션 톤으로 설계했습니다(무신사/오늘의집 참고).

## 🚀 실행

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (http://localhost:5173, 모바일 뷰 375px 권장)
npm run build    # 프로덕션 빌드 + PWA (dist/)
npm run preview  # 빌드 결과 미리보기
```

## 📱 모바일 앱으로 래핑 (선택)

이 PWA는 Capacitor로 네이티브(iOS/Android) 래핑할 수 있습니다:
```bash
npm i @capacitor/core @capacitor/cli
npx cap init Han:Pick com.hanpick.app --web-dir=dist
npm run build && npx cap add android && npx cap sync
```

## 🗂 구조

```
src/
├─ data/products.ts      # Top 20 큐레이션 더미데이터 (typed)
├─ i18n/locales/         # en / zh / ja / ko
├─ lib/pricing.ts        # 통화 변환 · 배송비 계산 · 포맷
├─ store/                # Zustand (cart, settings) — persist
├─ components/           # Header, TabBar, ProductCard, ShippingCalculator ...
├─ pages/                # Home, Products, ProductDetail, Cart
└─ types.ts              # 도메인 타입
```

## 🔌 실데이터 연동 (향후)

현재는 큐레이션 더미데이터입니다. 네이버 스마트스토어 실데이터 연동 시 `src/data/products.ts`만 동일한 `Product` 타입을 구현하는 어댑터로 교체하면 UI 변경 없이 연동 가능합니다.

> **참조한 글로벌 쇼핑앱 장점:** AliExpress(카테고리/다국어 토글), SHEIN(리뷰·랭킹 사회적 증거), Amazon(정보 밀도), 무신사/오늘의집(에디토리얼 톤).

## ⚠️ 파일럿 한계

- 상품 데이터는 **합성 더미**(실제 브랜드명 참조, 이미지는 Unsplash placeholder, 가격/리뷰는 예시)
- 결제는 **mock**(실제 결제·주문 처리 없음)
- 배송비율/환율은 **고정값**(KRW/USD = 1380)
