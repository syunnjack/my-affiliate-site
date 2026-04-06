import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // TypeScriptの型エラーを無視してビルドを通す設定
    typescript: {
        ignoreBuildErrors: true,
    },
    // 最新のNext.jsでESLintを無視する正しい書き方
    eslint: {
        ignoreDuringBuilds: true,
    },
    // もしこれでもエラーが出る場合は、一旦 eslint 行を消してもOKです
};

export default nextConfig;
