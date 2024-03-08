"use client";

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
    const lat = 37.5427222;
    const lon = 126.9516389;
    window.kakao.maps.load(() => {
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
        level: 4, //지도의 레벨(확대, 축소 정도)
      };

      const map = new window.kakao.maps.Map(kakaoMapRef.current, options); //지도 생성 및 객체 리턴

      const markerPosition = new window.kakao.maps.LatLng(lat, lon);
      // const marker = new window.kakao.maps.Marker({
      //   position: markerPosition,
      // });
      // marker.setMap(map);

      // const infoWidnwoContent = <div>행님 결혼 축하드립니당</div>;

      // const infowindow = new window.kakao.maps.InfoWindow({
      //   position: markerPosition,
      //   content: ReactDOMServer.renderToString(infoWidnwoContent),
      // });

      const imageSrc = "/info.png"; // 마커이미지의 주소입니다
      const imageSize = new window.kakao.maps.Size(135, 72); // 마커이미지의 크기입니다
      const imageOption = {}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage, // 마커이미지 설정
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      // infowindow.open(map, marker);
      marker.setMap(map);
    });
  }, []);
  return (
    <div
      ref={kakaoMapRef}
      style={{ width: "100%", height: 300, borderRadius: 8, zIndex: 1 }}
    />
  );
};
