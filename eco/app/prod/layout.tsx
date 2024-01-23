import SideSubNav from "@/components/nav/sideSubNav";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full p-4 text-2xl text-center text-white bg-slate-600">
        this is from Product Routes Layout
      </div>
      <SideSubNav
        subNavs={[
          { title: "empty1", href: "/" },
          { title: "empty2", href: "/" },
        ]}
      />
      {children}
    </>
  );
}
