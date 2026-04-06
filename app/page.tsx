import Link from "next/link";
import cities from "@/data/cities.json";

export default function Home() {
    return (
        <main
            style={{
                maxWidth: "800px",
                margin: "0 auto",
                padding: "40px 20px",
                fontFamily: "sans-serif",
            }}
        >
            <header style={{ textAlign: "center", marginBottom: "40px" }}>
                <h1 style={{ color: "#0052cc", fontSize: "28px" }}>
                    全国市区町村 蓄電池・V2H補助金ナビ
                </h1>
                <p style={{ color: "#666" }}>
                    2026年度の最新情報を市区町村ごとにまとめています
                </p>
            </header>

            <section>
                <h2
                    style={{
                        borderBottom: "2px solid #0052cc",
                        paddingBottom: "10px",
                        marginBottom: "20px",
                    }}
                >
                    東京都（23区）
                </h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(120px, 1fr))",
                        gap: "10px",
                    }}
                >
                    {cities.map((city) => (
                        <Link
                            key={city.id}
                            href={`/area/${city.id}`}
                            style={{
                                padding: "12px",
                                border: "1px solid #ddd",
                                borderRadius: "6px",
                                textDecoration: "none",
                                color: "#333",
                                textAlign: "center",
                                background: "#f9f9f9",
                                fontSize: "14px",
                            }}
                        >
                            {city.name}
                        </Link>
                    ))}
                </div>
            </section>

            <footer
                style={{
                    marginTop: "60px",
                    textAlign: "center",
                    borderTop: "1px solid #eee",
                    paddingTop: "20px",
                    color: "#999",
                    fontSize: "12px",
                }}
            >
                <p>&copy; 2026 全国市区町村 蓄電池・V2H補助金ナビ</p>
            </footer>
        </main>
    );
}
