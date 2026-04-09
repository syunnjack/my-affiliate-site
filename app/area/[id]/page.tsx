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
        <div style={{ padding: "20px" }}>
            <h1>{city.name}の蓄電池補助金</h1>
            <p>最大補助額：{city.subsidy.toLocaleString()}円</p>
            <div style={{ height: "400px", marginTop: "20px" }}>
                <MapWrapper lat={city.lat} lng={city.lng} city={city.name} />
            </div>
            <div
                style={{
                    marginTop: "30px",
                    padding: "20px",
                    border: "2px solid orange",
                    textAlign: "center",
                }}
            >
                <a
                    href="ここにafbのURL"
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                    無料で一括見積もりする
                </a>
            </div>
        </div>
    );
}
