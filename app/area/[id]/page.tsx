// app/area/[id]/page.tsx
import cities from "@/data/cities.json";
import MapWrapper from "@/components/MapWrapper";

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
    if (!city) return <div>見つかりません</div>;

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            {/* ...上のタイトルや地図部分はそのまま... */}

            {/* アフィリエイトアクションエリア */}
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

                {/* グリエネのアフィリエイトリンクボタン */}
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

                    {/* 計測用ピクセル（afbの成果計測に必要） */}
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
