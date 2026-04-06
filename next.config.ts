/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // ⚠ ビルド時の型エラーがあっても無視してデプロイを続行する
        ignoreBuildErrors: true,
    },
    eslint: {
        // ⚠ コードの書き方のルール（ESLint）エラーも無視する
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
