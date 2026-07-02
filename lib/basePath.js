const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path) {
  if (!path || path.startsWith("http") || path.startsWith("mailto:")) {
    return path;
  }

  return `${basePath}${path}`;
}
