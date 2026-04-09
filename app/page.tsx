// app/page.tsx
import Link from "next/link";
import cities from "@/data/cities.json";

export default function Home() {
    return (
        <div style={{ padding: "40px" }}>
            <h1>東京都 蓄電池補助金ナビ</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(150px, 1fr))",
                    gap: "10px",
                }}
            >
                {cities.map((city) => (
                    <Link
                        key={city.id}
                        href={`/area/${city.id}`}
                        style={{
                            padding: "15px",
                            border: "1px solid #ddd",
                            textAlign: "center",
                            textDecoration: "none",
                            color: "#333",
                            borderRadius: "5px",
                        }}
                    >
                        {city.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
