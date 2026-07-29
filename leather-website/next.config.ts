import path from "node:path"

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // A lockfile also lives in the parent folder; pin the root so Turbopack
  // doesn't have to guess.
  turbopack: { root: path.resolve(import.meta.dirname) },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
}

export default nextConfig
