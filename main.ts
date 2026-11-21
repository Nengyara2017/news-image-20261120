import * as fs from "node:fs";
import * as path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryDir = path.dirname(new URL(import.meta.url).pathname);

const b64 = fs.readFileSync(path.join(entryDir, "entry.png.b64"), "utf8").trim();
const png = Buffer.from(b64, "base64");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.png"), png);
