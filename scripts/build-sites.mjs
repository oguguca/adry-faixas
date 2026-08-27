import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const exportDirectory = path.join(projectRoot, "out");
const distDirectory = path.join(projectRoot, "dist");
const serverDirectory = path.join(distDirectory, "server");
const clientDirectory = path.join(distDirectory, "client");

await rm(distDirectory, { recursive: true, force: true });
await mkdir(serverDirectory, { recursive: true });
await cp(exportDirectory, clientDirectory, { recursive: true });

const worker = `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return response;
    }

    const url = new URL(request.url);

    if (!url.pathname.includes(".")) {
      url.pathname = url.pathname.endsWith("/")
        ? url.pathname + "index.html"
        : url.pathname + "/index.html";
      return env.ASSETS.fetch(new Request(url, request));
    }

    return response;
  },
};
`;

await writeFile(path.join(serverDirectory, "index.js"), worker, "utf8");

console.log("Sites bundle created in dist/");
