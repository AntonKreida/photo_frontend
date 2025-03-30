import fs from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";


const url = import.meta.url;

const __filename = fileURLToPath(url);
const __dirname = dirname(__filename);
const pathSrc = resolve(__dirname, "./src");
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, url)));

const { aliases } = loadJSON("./package.json");


/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: ( config, { isServer }) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"));

    // настройка loader-a для svg
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(graphql|gql)$/,
        loader: "webpack-graphql-loader",
        exclude: /node_modules/,
      }
    );

    // настройка путей кастомных
    if (aliases) {
      aliases.forEach((alias) => {
        config.resolve.alias[`@${alias}`] = `${pathSrc}/${alias}`;
      });
    }

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_API_HOST || "localhost"],
  },
  output: "standalone",
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
};

export default nextConfig;
