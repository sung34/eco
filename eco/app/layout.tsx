import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Navigation from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "자인그린바이오",
  description:
    "자인그린바이오는 친환경 농업제품 전문으로, 특허 받은 친환경 생분해종이멀칭지 솔루션을 제안합니다.",
  category: "친환경, 농업",
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
