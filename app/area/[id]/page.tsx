import cities from "@/data/cities.json";
import national from "@/data/national-programs.json";
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

            <header
                style={{
                    marginBottom: "30px",
                    textAlign: "left",
                    marginTop: "20px",
                }}
            >
                <span
                    style={{
                        color: "#0052cc",
                        fontWeight: "bold",
                        fontSize: "14px",
                    }}
                >
                    {/* city.pref を使うことで自動的にその都市の県名が入ります */}
                    {city.pref} {city.name}
                </span>
                <h1
                    style={{
                        fontSize: "28px",
                        marginTop: "5px",
                        borderBottom: "3px solid #0052cc",
                        paddingBottom: "10px",
                    }}
                >
                    {city.name}の蓄電池補助金の調べ方
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
                {/*
                  以前はここに「最大補助額 100,000円」と出していたが、その値は
                  144自治体すべてで同じ固定値で、出典も年度も無かった。
                  自治体の補助制度は金額も条件も受付期間もばらばらで、全国を
                  まとめた公開データも存在しない。裏の取れない金額を出すのは
                  やめて、その自治体の公式サイトへ案内する。
                */}
                <p style={{ fontSize: "16px", margin: "0 0 12px", fontWeight: "bold" }}>
                    {city.name}の補助制度は、市区町村の公式サイトでご確認ください
                </p>
                <p style={{ fontSize: "14px", color: "#555", margin: "0 0 16px", lineHeight: 1.7 }}>
                    自治体の蓄電池補助金は、金額・条件・受付期間が自治体ごとに異なり、
                    年度の途中で受付が終わることもあります。当サイトでは金額を独自に
                    掲載せず、一次情報にあたっていただく形にしています。
                </p>
                <a
                    href={city.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-block",
                        background: "#0052cc",
                        color: "#fff",
                        padding: "12px 20px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "15px",
                    }}
                >
                    {city.name}の公式サイトを開く →
                </a>
                <p style={{ fontSize: "12px", color: "#666", margin: "10px 0 0" }}>
                    サイト内で「蓄電池 補助金」と検索すると見つかりやすいです。
                </p>
            </div>

            {/* 国の制度は自治体を問わず共通なので、ここで現状を伝える */}
            <section style={{ marginBottom: "30px" }}>
                <h2
                    style={{
                        fontSize: "20px",
                        color: "#333",
                        borderLeft: "5px solid #0052cc",
                        paddingLeft: "10px",
                    }}
                >
                    国の制度の状況（{national.checkedAt}時点）
                </h2>
                <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
                    {national.programs.map((p) => (
                        <li
                            key={p.id}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                padding: "16px",
                                marginBottom: "12px",
                            }}
                        >
                            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                                <span
                                    style={{
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                        color: "#fff",
                                        background: p.status === "open" ? "#16a34a" : "#6b7280",
                                        borderRadius: "4px",
                                        padding: "3px 8px",
                                    }}
                                >
                                    {p.statusLabel}
                                </span>
                                <strong style={{ fontSize: "15px" }}>{p.name}</strong>
                            </div>
                            <p style={{ fontSize: "14px", color: "#555", margin: "10px 0 0", lineHeight: 1.7 }}>
                                {p.statusDetail}
                            </p>
                            <p style={{ fontSize: "13px", color: "#555", margin: "8px 0 0", lineHeight: 1.7 }}>
                                対象: {p.target}
                            </p>
                            <p style={{ fontSize: "13px", margin: "8px 0 0" }}>
                                <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#0052cc" }}>
                                    出典: {p.sourceLabel} ↗
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </section>

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
                    電気自動車（EV）をお持ちなら、V2H機器も補助の対象になることがあります。
                    国の制度と{city.name}の制度は、併用の可否や上限の扱いがそれぞれ定められて
                    いるため、申請前に双方の要領で条件を確認してください。
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
                    {city.name}に対応する施工業者から、無料で見積もりを取り寄せられます。
                    利用できる補助制度や申請の可否は、業者にも確認してください。
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
