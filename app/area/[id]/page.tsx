import cities from "@/data/cities.json";
import MapWrapper from "@/components/MapWrapper";
import Link from "next/link";

export async function generateStaticParams() {
    return cities.map((city) => ({ id: city.id }));
}

export default async function CityPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const city = cities.find((c) => c.id === id);

    if (!city)
        return (
            <div style={{ padding: "50px", textAlign: "center" }}>
                市区町村が見つかりません
            </div>
        );

    return (
        <div
            style={{
                padding: "20px",
                maxWidth: "800px",
                margin: "0 auto",
                fontFamily: "sans-serif",
            }}
        >
            {/* 戻るリンク */}
            <Link
                href="/"
                style={{
                    color: "#0052cc",
                    fontSize: "14px",
                    textDecoration: "none",
                }}
            >
                ← 23区一覧へ戻る
            </Link>

            <h1 style={{ fontSize: "24px", marginTop: "20px", color: "#333" }}>
                {city.name}の蓄電池補助金【2026年最新】
            </h1>

            <div
                style={{
                    background: "#f0f7ff",
                    padding: "20px",
                    borderRadius: "8px",
                    margin: "20px 0",
                }}
            >
                <p style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>
                    最大補助額：
                    <span style={{ color: "#ff4500", fontSize: "24px" }}>
                        {city.subsidy.toLocaleString()}円
                    </span>
                </p>
            </div>

            {/* 地図エリア（ここが消えていたはずです） */}
            <div
                style={{
                    height: "400px",
                    width: "100%",
                    borderRadius: "12px",
                    overflow: "hidden",
                    marginBottom: "30px",
                    border: "1px solid #ddd",
                }}
            >
                <MapWrapper lat={city.lat} lng={city.lng} city={city.name} />
            </div>

            {/* グリエネのアクションエリア */}
            <div
                style={{
                    marginTop: "40px",
                    padding: "30px",
                    textAlign: "center",
                    background: "#f0fdf4",
                    border: "2px solid #22c55e",
                    borderRadius: "15px",
                }}
            >
                <h2
                    style={{ fontSize: "20px", color: "#166534", marginTop: 0 }}
                >
                    {city.name}で蓄電池を安く導入するなら
                </h2>
                <p
                    style={{
                        fontSize: "14px",
                        color: "#4b5563",
                        marginBottom: "25px",
                    }}
                >
                    厳選された優良業者から、{city.name}
                    の補助金に合わせた最適なプランを無料で提案してもらえます。
                </p>

                {/* アフィリエイトボタン */}
                <div>
                    <a
                        href="https://t.afi-b.com/visit.php?a=8105322-w354921d&p=e741001i"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        style={{
                            display: "inline-block",
                            background: "#22c55e",
                            color: "#fff",
                            padding: "20px 40px",
                            borderRadius: "12px",
                            textDecoration: "none",
                            fontWeight: "bold",
                            fontSize: "20px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        【グリエネ】無料で一括見積もりする
                    </a>

                    {/* afb計測用ピクセル */}
                    <img
                        src="https://t.afi-b.com/lead/8105322/e741001i/w354921d"
                        width="1"
                        height="1"
                        style={{
                            border: "none",
                            display: "block",
                            margin: "0 auto",
                        }}
                        alt=""
                    />
                </div>

                <p
                    style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        marginTop: "15px",
                    }}
                >
                    ※安心の「グリエネ」公式サービスへ移動します。
                </p>
            </div>
        </div>
    );
}
