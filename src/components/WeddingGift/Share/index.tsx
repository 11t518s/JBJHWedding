"use client";

import { P } from "@/design-system";
import Toast, { ToastHandler } from "@/design-system/Toast";
import Icons from "@/design-system/icons";
import { useEffect, useRef } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

declare global {
  interface Window {
    Kakao: any;
  }
}

const kakaoApiKey = "63224f109e789587a0d204e886f416c5";

export const Share = () => {
  const urlShareRef = useRef<ToastHandler>(null);

  const handleShareKakao = () => {
    window.Kakao?.Share?.sendDefault({
      sendDefault: {
        objectType: "feed",
        content: {
          title: "💌 정빈 & 정화 결혼식에 초대합니다!",
          description: "5월 18일 토요일 오후 5시 아펠가모 공덕 7층 라로브홀",
          imageUrl: `/Invitation_WebOGimg.png`,
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
      },
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const kakaoInit = setInterval(() => {
        if (!window?.Kakao) return;
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(kakaoApiKey);
          clearInterval(kakaoInit);
        }
      }, 300);
    }
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 12,
        }}
      >
        <div onClick={handleShareKakao}>
          <Icons iconName="kakaotalk" />
        </div>
        <CopyToClipboard
          text="https://jbjh-wedding.vercel.app"
          onCopy={urlShareRef.current?.showToast}
        >
          <Icons iconName="link" />
        </CopyToClipboard>
      </div>
      <P variant="regular" color="medium" size={12}>
        © 2024, Derrick Choi. ALL RIGHTS RESERVED.
      </P>

      <Toast message="URL 링크가 복사되었어요" ref={urlShareRef} />
    </>
  );
};
