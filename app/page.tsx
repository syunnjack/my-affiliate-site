// app/page.tsx
import Link from "next/link";
import cities from "@/data/cities.json";

export default function Home() {
    const prefs = [...new Set(cities.map((c) => c.pref))];

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
                    <h2
                        style={{
                            fontSize: "18px",
                            borderLeft: "6px solid #0052cc",
                            paddingLeft: "15px",
                            marginBottom: "15px",
                            backgroundColor: "#f1f5f9",
                            padding: "12px",
                            borderRadius: "4px",
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
                                    // クラス名を付けて CSS で制御（エラー回避）
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
