import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
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

  return { response, html: await response.text() };
}

const rendered = render();

test("server-renders the portfolio page", async () => {
  const { response, html } = await rendered;
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  assert.match(html, /<html lang="en"/);
  assert.match(html, /<title>Roman Fedorov — Senior Android Engineer building AI agents<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  assert.match(html, /<meta property="og:image" content="https:\/\/[^"]+\/og\.png"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/[^"]+"/);
  // React separates adjacent text nodes with empty comments.
  const text = html.replaceAll("<!-- -->", "");
  assert.match(text, /<h1[^>]*><span class="hero__name">Roman Fedorov,<\/span> senior Android engineer who builds AI agents\./);
});

test("renders every section, the case studies and their diagrams", async () => {
  const { html } = await rendered;

  for (const id of ["top", "projects", "background", "approach", "contact"]) {
    assert.match(html, new RegExp(`<section[^>]*id="${id}"`), `missing section #${id}`);
  }
  assert.match(html, /id="stack"/);
  for (const id of ["requirements-agent", "ai-assisted-development", "spec-implementation-audit"]) {
    assert.match(html, new RegExp(`<article[^>]*id="${id}"`), `missing case #${id}`);
  }
  assert.match(html, /Requirements &amp; Specification Agent/);
  assert.match(html, /class="review"/);
  assert.match(html, /class="layer-flow"/);
  assert.match(html, /class="lanes"/);
  assert.match(html, /class="crosscheck"/);
});

test("labels the hero sample output as illustrative", async () => {
  const { html } = await rendered;
  assert.match(html, /Illustrative output/);
});

test("contains no placeholders or template leftovers", async () => {
  const { html } = await rendered;

  assert.doesNotMatch(html, /\[(ИМЯ|EMAIL|TELEGRAM|GITHUB|LINKEDIN|ГОРОД|КОМПАНИЯ)[^\]]*\]/);
  assert.doesNotMatch(html, /lorem ipsum|coming soon|placeholder text/i);
  assert.doesNotMatch(html, /href="#"/);
  assert.doesNotMatch(html, /Pulse Finance|Teamline|Atlas Health|crash-free/);
});
