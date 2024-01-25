import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Navigation from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "자인그린바이오",
  description:
    "자인그린바이오는 친환경 농업제품 전문으로, 특허 받은 친환경 미생물 생분해 펄프 멀칭지 솔루션을 제안합니다.",
  category: "친환경, 농업",
  keywords:
    "친환경, 멀칭지, 종이멀칭지, 펄프멀칭지, 미생물, 미생물 생분해 펄프 멀칭지, 생분해, 생분해 멀칭지, 생분해 종이 멀칭지, 자인, 자인그린, 자인그린바이오,자인바이오그린",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className + "relative"}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
