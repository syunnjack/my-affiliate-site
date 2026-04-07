import cities from "@/data/cities.json";
import MapWrapper from "@/components/MapWrapper";
import Link from "next/link";

// 23区すべてのページを事前に作成するための設定
export async function generateStaticParams() {
    return cities.map((city) => ({
        id: city.id,
    }));
}

export default async function CityPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const city = cities.find((c) => c.id === id);

    if (!city) {
        return <div>市区町村が見つかりません</div>;
    }

    return (
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
            <Link href="/" style={{ color: "#0052cc", fontSize: "14px" }}>
                ← 23区一覧へ戻る
            </Link>

            <h1 style={{ fontSize: "24px", marginTop: "20px" }}>
                {city.pref}
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
                    補助金額目安:{" "}
                    <span style={{ color: "#ff4500", fontSize: "24px" }}>
                        最大 {city.subsidy.toLocaleString()} 円
                    </span>
                </p>
            </div>

            {/* 地図の表示 */}
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

            {/* アフィリエイトボタン（タイナビ等の案件用） */}
            <div
                style={{
                    textAlign: "center",
                    padding: "30px",
                    background: "#fff",
                    border: "2px solid #ff8c00",
                    borderRadius: "12px",
                }}
            >
                <h3 style={{ marginTop: 0 }}>
                    {city.name}で一番安く設置できる業者を探す
                </h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                    ※補助金は予算に限りがあります。早めの見積もりを推奨します。
                </p>
                <a
                    href="ここにafbのURLを入れる"
                    style={{
                        display: "inline-block",
                        background: "#ff8c00",
                        color: "#fff",
                        padding: "18px 40px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "18px",
                    }}
                >
                    無料で一括見積もりを依頼する
                </a>
            </div>
        </main>
    );
}
