import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

// import Footer from "@/components/footer";
// import { Nav } from "@/components/nav";
// import { MobileNav } from "@/components/nav/mobileNav";


const inter = Inter({ subsets: ["latin"] });
const pretendardFont = localFont({
  src: [{
    path: './PretendardVariable.ttf',
  }],
  variable: '--font-pretendard'
})
export const metadata: Metadata = {
  title: "자인그린바이오",
  description:
    "자인그린바이오는 친환경 농업제품 전문으로, 특허 받은 친환경 생분해종이멀칭지 솔루션을 제안합니다.",

  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={ `${pretendardFont.variable} ` + 
          inter.className +
          "relative font-pretendard"
        }
      >
        {/* <div className="sticky top-0 z-40 flex items-center justify-between w-full h-12 p-10 bg-white box">
          <a href="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-12 h-12 group-hover:animate-[pulse_1s_ease-in-out_forwards] bg-emerald-600"></div>
            <span className="md:text-md lg:text-lg font-semibold text-nowrap group-hover:animate-[pulse_1s_ease-in-out_forwards]">
              자인그린바이오
            </span>
          </a>
          <nav className="hidden pl-8 md:flex">
            <Nav />
          </nav>
          <nav className="block md:hidden">
            <MobileNav />
          </nav>
        </div>
        {children}
        <Footer /> */}
        {children}
        
      </body>
    </html>
  );
}
