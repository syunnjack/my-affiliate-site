// app/layout.tsx
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja"><head><script async src="https://www.googletagmanager.com/gtag/js?id=G-KFW7PX4BSQ"></script><script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-KFW7PX4BSQ');`}} /></head>
            <body>
                <body
                    style={{
                        margin: 0,
                        backgroundColor: "#f8fafc", // 真っ白ではなく、少し高級感のある薄いグレー
                        color: "#1e293b",
                        lineHeight: "1.6",
                    }}
                ></body>
                {/* メインコンテンツ（各ページの中身がここに入る） */}
                <main>{children}</main>

                {/* 共通フッター（一番下にだけ表示される） */}
                <footer
                    style={{
                        marginTop: "50px",
                        padding: "20px",
                        borderTop: "1px solid #ccc",
                    }}
                >
                    <h3>運営者情報</h3>
                    <p>運営者名：知多丸 / 連絡先：syunn500@gmail.com</p>
                    <p>
                        【PR】本ページはプロモーションを含みます。詳細は各自治体へご確認ください。
                    </p>
                </footer>
            </body>
        </html>
    );
}
