import type { Metadata } from "next";
import styles from "@/styles/global.module.css";
import Script from "next/script";

const title = "💌 정빈 & 정화 결혼식에 초대합니다!";
const description = `5월 18일 토요일 오후 5시\n아펠가모 공덕 7층 라로브홀`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: process.env.NEXT_PUBLIC_PUBLIC_URL + "/OG.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={styles.screenContainer}>
      <body>{children}</body>
      <Script
        strategy="beforeInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`}
      />
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
