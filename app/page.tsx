// app/page.tsx
import Link from "next/link";
import cities from "@/data/cities.json";

export default function Home() {
    // データを都道府県ごとに整理
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
            {/* 1. タイトルを全国版に変更 */}
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

            {/* 2. 都道府県ごとにセクションを分ける */}
            {prefs.map((pref) => (
                <section key={pref} style={{ marginBottom: "40px" }}>
                    <h2
                        style={{
                            fontSize: "20px",
                            borderLeft: "6px solid #0052cc",
                            paddingLeft: "15px",
                            marginBottom: "20px",
                            backgroundColor: "#f0f4f8",
                            padding: "10px",
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
                                        transition: "all 0.2s",
                                        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.borderColor =
                                            "#0052cc")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.borderColor =
                                            "#e2e8f0")
                                    }
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
