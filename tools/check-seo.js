#!/usr/bin/env node
"use strict";
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const origin = "https://blackjack.yuchunlab.com";
const langs = ["en", "zh-Hant", "ja"];
const files = new Map([["/", "index.html"]]);
for (const lang of langs) {
  files.set("/" + lang + "/", lang + "/index.html");
  for (const group of ["app", "cardcounting", "pc"]) {
    const dir = path.join(root, lang, "content", group);
    for (const filename of fs.readdirSync(dir).filter(name => name.endsWith(".html"))) {
      const clean = "/"+lang+"/content/"+group+"/"+filename.slice(0,-5);
      files.set(clean, lang+"/content/"+group+"/"+filename);
    }
  }
}
const get = (file) => fs.readFileSync(path.join(root, file), "utf8");
const err = [];
function check(value, why) { if (!value) err.push(why); }
const xml = get("sitemap.xml");
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
check(locs.length === files.size, "Sitemap count expected "+files.size+" found "+locs.length);
check(new Set(locs).size === locs.length, "Duplicate URLs in sitemap");
const urlSet = new Set(locs);
for (const [route, filename] of files) {
  const html = get(filename);
  const canonical = origin+route;
  check(urlSet.has(canonical), "Missing sitemap URL: "+route);
  check(/<title>[^<]+<\/title>/.test(html), "No title: "+filename);
  check(/<meta name="description" content="[^"]+"/.test(html), "No description: "+filename);
  check(html.includes('rel="canonical" href="'+canonical+'"'), "Canonical mismatch: "+filename);
  check(!/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html), "Unwanted noindex: "+filename);
  check(!/http-equiv="refresh"|window\.location\.replace\s*\(/.test(html), "Redirecting indexable page: "+filename);
  for (const l of langs) check(html.includes('hreflang="'+l+'"'), "Missing "+l+" hreflang: "+filename);
  const links = [...html.matchAll(/<a\b[^>]*\bhref="(\/[^"#?]*)"/g)].map(m => m[1]);
  for (const target of links) {
    const exists = files.has(target) || fs.existsSync(path.join(root, target.slice(1))) || fs.existsSync(path.join(root, target.slice(1)+".html"));
    check(exists, "Broken internal link: "+filename+" -> "+target);
  }
}
check(xml.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'), "Missing sitemap xhtml namespace");
check(get("robots.txt").includes("Sitemap: "+origin+"/sitemap.xml"), "robots.txt sitemap reference missing");
if (err.length) {
  console.error("SEO validation failed ("+err.length+"):\n"+err.map(e => "- "+e).join("\n"));
  process.exit(1);
}
console.log("SEO validation passed: "+files.size+" canonical pages, sitemap entries and local links.");
