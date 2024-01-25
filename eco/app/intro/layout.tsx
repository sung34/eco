import SideSubNav from "@/components/sideSubNav";

export default function IntroductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="inner-x lg:grid lg:grid-cols-6">
      <SideSubNav
        className=""
        subNavs={[
          { title: "회사 소개", href: "/intro" },
          { title: "특허", href: "/intro/certification" },
        ]}
      />
      <section className="lg:col-span-5 lg:col-start-2">{children}</section>
    </div>
  );
}
