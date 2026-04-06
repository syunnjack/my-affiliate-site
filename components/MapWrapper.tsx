// components/MapWrapper.tsx
"use client"; // ここに client 宣言を書くのがポイントです

import dynamic from "next/dynamic";

// 地図コンポーネントを、ここで ssr: false にして読み込む
const Map = dynamic(() => import("./Map"), {
    ssr: false,
    loading: () => (
        <div style={{ height: "300px", background: "#eee" }}>
            地図を読み込み中...
        </div>
    ),
});

export default function MapWrapper({
    lat,
    lng,
    city,
}: {
    lat: number;
    lng: number;
    city: string;
}) {
    return <Map lat={lat} lng={lng} city={city} />;
}
