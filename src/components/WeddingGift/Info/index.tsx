"use client";

import { P, colors } from "@/design-system";
import Toast, { ToastHandler } from "@/design-system/Toast";
import Icons from "@/design-system/icons";
import { useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type InfoProps = {
  name: string;
  role: string;
  account: string;
};
export const Info = ({ name, role, account }: InfoProps) => {
  const toastRef = useRef<ToastHandler>(null);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "20px",
          paddingTop: "20px",
          gap: "4px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <P variant="medium" color="black" size={18}>
            {name}
          </P>
          <P variant="regular" color="medium" size={18}>
            {role}
          </P>
        </div>
        <P variant="regular" color="black" size={18}>
          {account}
        </P>

        <CopyToClipboard
          text={`${account} ${name}`}
          onCopy={() => toastRef.current?.showToast()}
        >
          <button
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: colors.black,
              border: 0,
              borderRadius: "100px",
              padding: "10px 20px",
              marginTop: "8px",
            }}
          >
            <P variant="regular" color="white" size={16}>
              계좌번호 복사하기
            </P>
            <Icons iconName="copy" />
          </button>
        </CopyToClipboard>
      </div>
      <Toast ref={toastRef} message="계좌번호가 복사되었어요" timeout={2000} />
    </>
  );
};
