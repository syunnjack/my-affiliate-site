// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "蓄電池・V2H補助金ナビ｜自治体別の補助金情報をかんたん検索",
    description: "家庭用蓄電池・V2H(電気自動車給電システム)の導入で使える国・自治体の補助金情報を、都道府県・市区町村別にまとめたガイドです。",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja"><head>
  <meta name="google-site-verification" content="Qdq_AmPN64rfe-QOJRz5qtvM-lFMfBTCfM-KxOLLSvY" /><script async src="https://www.googletagmanager.com/gtag/js?id=G-KFW7PX4BSQ"></script><script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-KFW7PX4BSQ');`}} /></head>
            <body
                style={{
                    margin: 0,
                    backgroundColor: "#f8fafc", // 真っ白ではなく、少し高級感のある薄いグレー
                    color: "#1e293b",
                    lineHeight: "1.6",
                }}
            >
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
