import { createJiti } from "jiti";
import { fileURLToPath } from "url";

const jiti = createJiti(fileURLToPath(import.meta.url));

await jiti.import("./t3-env/server");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
