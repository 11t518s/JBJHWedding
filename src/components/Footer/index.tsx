"use client";

import { P, colors } from "@/design-system";
import Toast, { ToastHandler } from "@/design-system/Toast";
import Icons from "@/design-system/icons";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export const Footer = () => {
  const urlShareRef = useRef<ToastHandler>(null);
  const searchParams = useSearchParams();

  const getTitle = () => {
    const name = searchParams.get("name");
    const title = searchParams.get("title");
    if (title) {
      return title;
    }

    if (name) {
      return `💌${name} 정빈 & 정화 결혼식에 초대합니다!`;
    }
    return "💌정빈 & 정화 결혼식에 초대합니다!";
  };

  const handleShareKakao = () => {
    window.Kakao?.Share?.sendDefault({
      objectType: "feed",
      content: {
        title: getTitle(),
        description: `5월 18일 토요일 오후 5시\n아펠가모 공덕 7층 라로브홀`,
        imageUrl: process.env.NEXT_PUBLIC_PUBLIC_URL + `/OG.png`,
        imageWidth: 400,
        imageHeight: 200,
        link: {
          mobileWebUrl: "https://jbjh-wedding.vercel.app/",
          webUrl: "https://jbjh-wedding.vercel.app/",
        },
      },
      buttons: [
        {
          title: "자세히 보기",
          link: {
            mobileWebUrl: "https://jbjh-wedding.vercel.app/",
            webUrl: "https://jbjh-wedding.vercel.app/",
          },
        },
      ],
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const kakaoInit = setInterval(() => {
        if (!window?.Kakao) return;
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
          clearInterval(kakaoInit);
        }
      }, 300);
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors.dark,
        width: "100vw",
        maxWidth: "720px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "32px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 32,
        }}
      >
        <div onClick={handleShareKakao}>
          <Icons iconName="kakaotalk" />
        </div>
        <CopyToClipboard
          text={process.env.NEXT_PUBLIC_PUBLIC_URL || ""}
          onCopy={() => urlShareRef.current?.showToast()}
        >
          <button
            style={{
              background: "transparent",
              border: 0,
            }}
          >
            <Icons iconName="link" />
          </button>
        </CopyToClipboard>
      </div>
      <P variant="regular" color="medium" size={12}>
        © 2024, Derrick Choi. ALL RIGHTS RESERVED.
      </P>
      <Toast
        message="URL 링크가 복사되었어요"
        ref={urlShareRef}
        timeout={2000}
      />
    </div>
  );
};
