import Link from "next/link";

export default function GuidePage() {
    return (
        <div
            style={{
                maxWidth: "800px",
                margin: "0 auto",
                padding: "40px 20px",
                fontFamily: "sans-serif",
                lineHeight: "1.8",
                color: "#333",
            }}
        >
            <Link href="/" style={{ color: "#0052cc", textDecoration: "none" }}>
                ← トップページへ戻る
            </Link>

            <h1
                style={{
                    fontSize: "28px",
                    borderBottom: "4px solid #0052cc",
                    paddingBottom: "10px",
                    marginTop: "20px",
                }}
            >
                蓄電池・V2H補助金の申請手順と注意点
            </h1>

            <section style={{ marginTop: "30px" }}>
                <h2 style={{ fontSize: "20px", color: "#0052cc" }}>
                    1. 工事前の申請が必須です
                </h2>
                <p>
                    ほとんどの自治体において、
                    <strong>「工事着工前」の申請</strong>
                    が義務付けられています。
                    工事が終わってから申請しても、補助金は1円も受け取れませんのでご注意ください。
                </p>
            </section>

            <section
                style={{
                    marginTop: "30px",
                    padding: "20px",
                    background: "#fdf2f2",
                    borderRadius: "10px",
                    border: "1px solid #feb2b2",
                }}
            >
                <h2
                    style={{ fontSize: "20px", color: "#c53030", marginTop: 0 }}
                >
                    2. 予算には上限があります
                </h2>
                <p>
                    補助金は各自治体の予算枠が決まっており、
                    <strong>先着順</strong>で終了することがほとんどです。
                    検討されている方は、早めに見積もりを取り、申請枠を確保することをおすすめします。
                </p>
            </section>

            <section style={{ marginTop: "30px" }}>
                <h2 style={{ fontSize: "20px", color: "#0052cc" }}>
                    3. 業者選びが成功の鍵
                </h2>
                <p>
                    補助金の申請は複雑な書類作成が伴います。代行申請に慣れている実績豊富な業者を選ぶことで、
                    スムーズに受給まで進めることができます。
                </p>
            </section>

            <div
                style={{
                    marginTop: "50px",
                    textAlign: "center",
                    padding: "30px",
                    background: "#f0f7ff",
                    borderRadius: "15px",
                }}
            >
                <h3 style={{ marginTop: 0 }}>
                    お住まいの地域の最新情報を確認する
                </h3>
                <Link
                    href="/"
                    style={{
                        display: "inline-block",
                        background: "#0052cc",
                        color: "#fff",
                        padding: "15px 30px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                >
                    市区町村一覧から探す
                </Link>
            </div>
        </div>
    );
}
