// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "全国市区町村 蓄電池・V2H補助金ナビ",
    description: "2026年度の最新補助金情報を市区町村ごとにまとめています",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body style={{ margin: 0, backgroundColor: "#fcfcfc" }}>
                {children}

                {/* 審査用：必須3点セットフッター */}
                <footer
                    style={{
                        marginTop: "80px",
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
                                marginBottom: "40px",
                            }}
                        >
                            {/* 1. 運営者情報 */}
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
                                <p style={{ fontSize: "12px", color: "#666" }}>
                                    当サイトでは、プログラミングスキルを活用し、全国の自治体が公開している補助金情報を分かりやすく整理して提供しています。
                                </p>
                            </div>

                            {/* 2. プライバシーポリシー & 免責事項 */}
                            <div>
                                <h3
                                    style={{
                                        fontSize: "16px",
                                        borderLeft: "4px solid #0052cc",
                                        paddingLeft: "10px",
                                    }}
                                >
                                    免責事項・広告について
                                </h3>
                                <p
                                    style={{
                                        fontSize: "12px",
                                        lineHeight: "1.6",
                                        color: "#666",
                                    }}
                                >
                                    【広告の配信について】
                                    <br />
                                    当サイトはアフィリエイトプログラムに参加しており、適切なプロモーションを含みます。リンク先の商品・サービスは当サイトが販売しているものではありません。
                                    <br />
                                    <br />
                                    【免責事項】
                                    <br />
                                    掲載情報の正確さには万全を期しておりますが、内容を保証するものではありません。補助金制度は変更される可能性があるため、必ず各自治体の公式サイトをご確認ください。
                                </p>
                            </div>
                        </div>

                        {/* 3. プライバシーポリシー全文 */}
                        <div
                            style={{
                                borderTop: "1px solid #f0f0f0",
                                paddingTop: "20px",
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: "14px",
                                    textAlign: "center",
                                }}
                            >
                                プライバシーポリシー
                            </h3>
                            <p
                                style={{
                                    fontSize: "11px",
                                    color: "#888",
                                    lineHeight: "1.5",
                                }}
                            >
                                個人情報の利用目的：お問い合わせへの回答や情報提供のために利用します。第三者への提供は行いません。
                                クッキー（Cookie）の利用：アクセス解析や広告配信のためにCookieを使用することがあります。ブラウザの設定で無効にすることが可能です。
                            </p>
                            <p
                                style={{
                                    textAlign: "center",
                                    fontSize: "12px",
                                    marginTop: "20px",
                                    color: "#aaa",
                                }}
                            >
                                &copy; 2026 全国市区町村 蓄電池・V2H補助金ナビ
                            </p>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
