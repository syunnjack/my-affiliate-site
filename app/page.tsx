// app/page.tsx
import Link from "next/link";
import cities from "@/data/cities.json";

export default function Home() {
    // 1. 北から順の都道府県リストを定義
    const sortedPrefOrder = [
        "北海道",
        "青森県",
        "岩手県",
        "宮城県",
        "秋田県",
        "山形県",
        "福島県",
        "茨城県",
        "栃木県",
        "群馬県",
        "埼玉県",
        "千葉県",
        "東京都",
        "神奈川県",
        "新潟県",
        "富山県",
        "石川県",
        "福井県",
        "山梨県",
        "長野県",
        "岐阜県",
        "静岡県",
        "愛知県",
        "三重県",
        "滋賀県",
        "京都府",
        "大阪府",
        "兵庫県",
        "奈良県",
        "和歌山県",
        "鳥取県",
        "島根県",
        "岡山県",
        "広島県",
        "山口県",
        "徳島県",
        "香川県",
        "愛媛県",
        "高知県",
        "福岡県",
        "佐賀県",
        "長崎県",
        "熊本県",
        "大分県",
        "宮崎県",
        "鹿児島県",
        "沖縄県",
    ];

    // 2. 存在する都道府県だけを抽出し、上記の順番で並べ替える
    const prefs = sortedPrefOrder.filter((pref) =>
        cities.some((city) => city.pref === pref),
    );

    return (
        <main
            style={{
                maxWidth: "1000px",
                margin: "0 auto",
                padding: "40px 20px",
                fontFamily: "sans-serif",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    color: "#003366",
                    fontSize: "32px",
                    marginBottom: "10px",
                }}
            >
                全国主要都市 蓄電池・V2H補助金ナビ
            </h1>
            <p
                style={{
                    textAlign: "center",
                    color: "#666",
                    marginBottom: "40px",
                }}
            >
                2026年度の最新情報を市区町村ごとにまとめています
            </p>

            {prefs.map((pref) => (
                <section key={pref} style={{ marginBottom: "40px" }}>
                    {/* 見出しのデザインをさらに洗練 */}
                    <h2
                        style={{
                            fontSize: "18px",
                            borderLeft: "6px solid #0052cc",
                            paddingLeft: "15px",
                            marginBottom: "15px",
                            backgroundColor: "#f1f5f9",
                            padding: "12px",
                            borderRadius: "4px",
                            color: "#1e293b",
                        }}
                    >
                        {pref}
                    </h2>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fill, minmax(140px, 1fr))",
                            gap: "12px",
                        }}
                    >
                        {cities
                            .filter((c) => c.pref === pref)
                            .map((city) => (
                                <Link
                                    key={city.id}
                                    href={`/area/${city.id}`}
                                    className="city-button"
                                    style={{
                                        display: "block",
                                        padding: "15px 10px",
                                        border: "1px solid #e2e8f0",
                                        borderRadius: "8px",
                                        textDecoration: "none",
                                        color: "#334155",
                                        textAlign: "center",
                                        fontWeight: "500",
                                        background: "#fff",
                                        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                                    }}
                                >
                                    {city.name}
                                </Link>
                            ))}
                    </div>
                </section>
            ))}
        </main>
    );
}
