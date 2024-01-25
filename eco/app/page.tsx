import { BannerCarousel } from "@/components/carousel/bannerCarousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section>
        <BannerCarousel />
      </section>
      <section className="py-20 inner-x">
        <article>
          <h2 className="pb-10 text-4xl font-extrabold tracking-tight border-b scroll-m-20 lg:text-5xl">
            품종별 멀칭지 정보
          </h2>
          <p className="py-10 text-2xl font-extrabold tracking-tight scroll-m-20 lg:text-3xl">
            상품 정보 준비중
          </p>
        </article>
      </section>
    </main>
  );
}
