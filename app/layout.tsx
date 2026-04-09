// app/layout.tsx
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body>
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
