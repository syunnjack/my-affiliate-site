import Link from "next/link";
import cities from "@/data/cities.json";

export default function Home() {
    return (
        <main
            style={{
                maxWidth: "800px",
                margin: "0 auto",
                padding: "40px 20px",
            }}
        >
            <h1 style={{ textAlign: "center", color: "#0052cc" }}>
                東京都 蓄電池補助金ナビ
            </h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: "15px",
                    marginTop: "30px",
                }}
            >
                {cities.map((city) => (
                    <Link
                        key={city.id}
                        href={`/area/${city.id}`}
                        style={{
                            display: "block",
                            padding: "20px",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            textDecoration: "none",
                            color: "#333",
                            textAlign: "center",
                            fontWeight: "bold",
                            background: "#fff",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                        }}
                    >
                        {city.name}
                    </Link>
                ))}
            </div>
        </main>
    );
}
