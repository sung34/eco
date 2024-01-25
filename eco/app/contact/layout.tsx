import SideSubNav from "@/components/sideSubNav";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="inner-x lg:grid lg:grid-cols-6">
      <section className="relative lg:col-span-1">
        <SideSubNav
          className=""
          subNavs={[
            { title: "오시는 길", href: "/contact" },
            // { title: "문의", href: "/contact" },
          ]}
        />
      </section>
      <section className="lg:col-span-5 lg:col-start-2">{children}</section>
    </div>
  );
}
