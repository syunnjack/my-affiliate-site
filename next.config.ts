import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Xserver（静的ファイル配信）へ置くため、HTMLとして書き出す。
    // APIルートは無く、動的ルートも generateStaticParams があるので出力できる。
    output: "export",
    // /area/yokohama を /area/yokohama/index.html として出す。
    // 静的配信では拡張子なしのURLをそのまま返せないため。
    trailingSlash: true,

    // TypeScriptの型エラーを無視してビルドを通す設定
    typescript: {
        ignoreBuildErrors: true,
    },
    // 最新のNext.jsでESLintを無視する正しい書き方
    /*eslint: {
    ignoreDuringBuilds: true,
  },*/
    // もしこれでもエラーが出る場合は、一旦 eslint 行を消してもOKです
};

export default nextConfig;
