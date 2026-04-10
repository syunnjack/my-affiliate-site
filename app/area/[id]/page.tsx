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

            <header style={{ marginBottom: "30px", textAlign: "left" }}>
                <span
                    style={{
                        color: "#0052cc",
                        fontWeight: "bold",
                        fontSize: "14px",
                    }}
                >
                    東京都 {city.name}
                </span>
                <h1
                    style={{
                        fontSize: "28px",
                        marginTop: "5px",
                        borderBottom: "3px solid #0052cc",
                        paddingBottom: "10px",
                    }}
                >
                    {city.name}の蓄電池補助金「完全ガイド」【2026年最新】
                </h1>
            </header>

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

            {/* 地図のすぐ上あたりに追加 */}
            <section style={{ marginBottom: "30px" }}>
                <h2
                    style={{
                        fontSize: "20px",
                        color: "#333",
                        borderLeft: "5px solid #ff8c00",
                        paddingLeft: "10px",
                    }}
                >
                    {city.name}の蓄電池設置業者の口コミ・評判を確認するには？
                </h2>
                <p
                    style={{
                        fontSize: "15px",
                        color: "#555",
                        lineHeight: "1.6",
                    }}
                >
                    {city.name}
                    で蓄電池を設置する際、重要になるのが業者の「地元の口コミ」です。
                    当サイトが提携する一括見積もりサービスでは、{city.name}
                    での施工実績が豊富な業者の評判を比較し、
                    最も信頼できるパートナーを簡単に見つけることができます。
                </p>
            </section>

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

            {/* 地図のすぐ下あたりに追加 */}
            <section
                style={{
                    marginBottom: "30px",
                    padding: "20px",
                    backgroundColor: "#fff5e6",
                    borderRadius: "10px",
                }}
            >
                <h2
                    style={{ fontSize: "20px", color: "#d35400", marginTop: 0 }}
                >
                    {city.name}でV2H補助金と蓄電池を併用してさらにお得に
                </h2>
                <p style={{ fontSize: "15px", color: "#555" }}>
                    電気自動車（EV）をお持ちなら、
                    <strong>V2H補助金との併用</strong>が非常におすすめです。
                    {city.name}
                    の自治体補助金と国の補助金を組み合わせることで、自己負担額を大幅に抑えて
                    最新のエネルギーシステムを導入できるケースがあります。
                </p>
            </section>

            {/* 地図の下に追加 */}
            <div
                style={{
                    marginTop: "20px",
                    padding: "15px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                    borderLeft: "5px solid #0052cc",
                }}
            >
                <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
                    💡 失敗しないためにチェック！
                </p>
                <Link
                    href="/guide"
                    style={{
                        color: "#0052cc",
                        textDecoration: "underline",
                        fontSize: "15px",
                    }}
                >
                    蓄電池補助金の申請手順と、絶対にやってはいけない注意点
                </Link>
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
