// Design-freeze guard: the built site must match the live Lovable site
// (scripts/baseline/, captured 2026-09-28 from mind-unwind-journey.lovable.app).
// Run after `npm run build`. Exits 1 on any mismatch. Never "fix" src/ to make this pass.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist/client";
const BASE = "scripts/baseline";
let failed = 0;
const check = (name, ok, detail = "") => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${ok || !detail ? "" : `  — ${detail}`}`);
  if (!ok) failed++;
};

// Same normalization on both sides: drop hashed JS preloads, unhash CSS, map Lovable asset CDN paths.
const norm = (s) =>
  s
    .replace(/\r\n/g, "\n")
    .replace(/<link rel="modulepreload" href="[^"]*"\/>/g, "")
    .replace(/styles-[\w-]+\.css/g, "styles.css")
    .replace(/\/__l5e\/assets-v1\/[0-9a-f-]+\//g, "/images/");
// head: up to Lovable's injected <style> (or </head>); body: up to the first <script>.
const cut = (s, from, ...ends) => {
  const a = s.indexOf(from);
  const b = Math.min(...ends.map((e) => s.indexOf(e, a)).filter((i) => i > a));
  return a < 0 || !isFinite(b) ? null : s.slice(a, b).trimEnd(); // Lovable adds "\n" before its <style>
};
const firstDiff = (a, b) => {
  let i = 0;
  while (i < a.length && a[i] === b[i]) i++;
  return `at char ${i}: live «${a.slice(i, i + 60)}» vs built «${(b ?? "").slice(i, i + 60)}»`;
};

const pages = { index: "index.html", about: "about/index.html", treatment: "treatment/index.html", faq: "faq/index.html", contact: "contact/index.html" };
for (const [name, file] of Object.entries(pages)) {
  const live = norm(readFileSync(join(BASE, `${name}.html`), "utf8"));
  const built = norm(readFileSync(join(DIST, file), "utf8"));
  for (const [part, from, ends] of [["head", "<head>", ["<style", "</head>"]], ["body", "<body>", ["<script"]]]) {
    const l = cut(live, from, ...ends), b = cut(built, from, ...ends);
    check(`${name} ${part}`, l !== null && l === b, l === null ? "baseline cut failed" : firstDiff(l, b));
  }
}

const css = readdirSync(join(DIST, "assets")).filter((f) => f.endsWith(".css"));
check("css byte-identical", css.length === 1 && readFileSync(join(DIST, "assets", css[0])).equals(readFileSync(join(BASE, "styles.css"))), `found ${css.join(", ")}`);

for (const f of readdirSync("src/assets").filter((f) => f.endsWith(".asset.json"))) {
  const { url, size, original_filename: n } = JSON.parse(readFileSync(join("src/assets", f), "utf8"));
  const pub = join("public/images", n), out = join(DIST, "images", n);
  const ok = url === `/images/${n}` && readdirSync("public/images").includes(n) && existsSync(out) &&
    statSync(pub).size === size && readFileSync(pub).equals(readFileSync(out));
  check(`image ${n}`, ok, `url=${url} size=${size}`);
}

const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));
const leaks = walk(DIST).filter((f) => /\.(html|js|css)$/.test(f) && readFileSync(f, "utf8").includes("__l5e"));
check("no __l5e in dist", leaks.length === 0, leaks.join(", "));

console.log(failed ? `\n${failed} check(s) FAILED` : "\nALL PASS");
process.exit(failed ? 1 : 0);
