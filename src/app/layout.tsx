import type { Metadata } from "next";
import styles from "@/styles/global.module.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "",
  description: "Generated by create next app",
};

const kakaoApiKey = "63224f109e789587a0d204e886f416c5";

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
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoApiKey}&autoload=false`}
      />
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
