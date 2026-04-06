// app/layout.tsx
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body
                style={{
                    margin: 0,
                    backgroundColor: "#fcfcfc",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >
                {/* 各ページの中身（メインコンテンツ） */}
                <main style={{ flex: 1 }}>{children}</main>

                {/* 審査用：フッター（一番下に固定） */}
                <footer
                    style={{
                        marginTop: "auto",
                        padding: "40px 20px",
                        backgroundColor: "#fff",
                        borderTop: "1px solid #eee",
                        color: "#444",
                        fontFamily: "sans-serif",
                    }}
                >
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit, minmax(250px, 1fr))",
                                gap: "30px",
                                marginBottom: "20px",
                            }}
                        >
                            <div>
                                <h3
                                    style={{
                                        fontSize: "16px",
                                        borderLeft: "4px solid #0052cc",
                                        paddingLeft: "10px",
                                    }}
                                >
                                    運営者情報
                                </h3>
                                <p style={{ fontSize: "14px" }}>
                                    運営者名：知多丸
                                </p>
                                <p style={{ fontSize: "14px" }}>
                                    連絡先：syunn500@gmail.com
                                </p>
                            </div>
                            <div>
                                <h3
                                    style={{
                                        fontSize: "16px",
                                        borderLeft: "4px solid #0052cc",
                                        paddingLeft: "10px",
                                    }}
                                >
                                    免責事項
                                </h3>
                                <p style={{ fontSize: "12px", color: "#666" }}>
                                    【広告】当サイトはアフィリエイトプログラムに参加しています。掲載情報は最新のものを心がけておりますが、必ず各自治体の公式サイトをご確認ください。
                                </p>
                            </div>
                        </div>
                        <p
                            style={{
                                textAlign: "center",
                                fontSize: "12px",
                                color: "#aaa",
                                borderTop: "1px solid #f0f0f0",
                                paddingTop: "20px",
                            }}
                        >
                            &copy; 2026 全国市区町村 蓄電池・V2H補助金ナビ
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
