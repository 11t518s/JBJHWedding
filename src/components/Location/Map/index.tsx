"use client";

import ReactDOMServer from "react-dom/server";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
    Kakao: any;
  }
}

export const Map = () => {
  const kakaoMapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const lat = 37.5427105;
    const lon = 126.9516296;
    window.kakao.maps.load(() => {
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };

      const map = new window.kakao.maps.Map(kakaoMapRef.current, options); //지도 생성 및 객체 리턴

      const markerPosition = new window.kakao.maps.LatLng(lat, lon);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);

      const infoWidnwoContent = <div>행님 결혼 축하드립니당</div>;

      const infowindow = new window.kakao.maps.InfoWindow({
        position: markerPosition,
        content: ReactDOMServer.renderToString(infoWidnwoContent),
      });
      infowindow.open(map, marker);
    });
  }, []);
  return <div ref={kakaoMapRef} style={{ width: 300, height: 300 }} />;
};
