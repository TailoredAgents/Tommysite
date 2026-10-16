import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Tommy's finished media homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Tommy Godfrey \| All Heart\. Every Game\.<\/title>/i);
  assert.match(html, /ALL <em>HEART\.<\/em>/);
  assert.match(html, /THE REEL/);
  assert.match(html, /SUPERSTAR/);
  assert.match(html, /AUTISTIC/);
  assert.match(html, /State Games/);
  assert.match(html, /Horizon Sports/);
  assert.match(html, /tommy-hero-campaign\.png/);
  assert.match(html, /tommy-basketball-game\.webp/);
  assert.match(html, /tommy-harry-the-hawk\.webp/);
  assert.match(html, /tommy-half-court-shot\.mp4/);
  assert.match(html, /tommy-half-court-shot-poster\.webp/);
  assert.match(html, /preload="none"/);
  assert.match(html, /Family approved/);
  assert.match(html, /Privacy first/);
  assert.match(html, /Made accessible/);
  assert.match(html, /Family-managed inquiries/);
  assert.match(html, /instagram\.com\/tommygodfreyhoops/);
  assert.doesNotMatch(html, /codex-preview|Starter Project|react-loading-skeleton/i);
  assert.doesNotMatch(html, /EST\. 2009|The motto|Court vision/i);
});

test("keeps the media experience fast, honest, and accessible", async () => {
  const [page, styles, layout, packageJson, renderConfig, videoAsset, posterAsset] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../render.yaml", import.meta.url), "utf8"),
    stat(new URL("../public/media/tommy-half-court-shot.mp4", import.meta.url)),
    stat(new URL("../public/media/tommy-half-court-shot-poster.webp", import.meta.url)),
  ]);

  assert.match(page, /className="skip-link"/);
  assert.match(page, /event\.key === "Escape"/);
  assert.match(page, /The first reel is live/);
  assert.match(page, /preload="none"/);
  assert.match(page, /playsInline/);
  assert.match(page, /aria-label="Tommy taking a half-court basketball shot in a packed gym"/);
  assert.match(page, /alt="Tommy smiling while holding his basketball trophy"/);
  assert.match(page, /Family managed|Family approved/i);
  assert.match(page, /nonverbal autistic athlete/i);
  assert.match(page, /autism community/i);
  assert.doesNotMatch(page, /Video coming soon/);

  assert.ok(videoAsset.size > 20_000_000 && videoAsset.size < 30_000_000);
  assert.ok(posterAsset.size > 50_000 && posterAsset.size < 300_000);

  assert.match(styles, /position:\s*fixed/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /prefers-reduced-motion:\s*reduce/);
  assert.match(styles, /var\(--font-display\)/);
  assert.doesNotMatch(styles, /\bImpact\b/);

  assert.match(layout, /Barlow_Condensed/);
  assert.match(layout, /Manrope/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(renderConfig, /runtime:\s*node/);
  assert.match(renderConfig, /startCommand:\s*npm run start/);
});
