#!/usr/bin/env node
"use strict";
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const origin = "https://blackjack.yuchunlab.com";
const langs = ["en", "zh-Hant", "ja"];
const groups = ["app", "cardcounting", "pc"];
const routes = groups.flatMap(group =>
  fs.readdirSync(path.join(root, "en", "content", group))
    .filter(name => name.endsWith(".html"))
    .map(name => "content/" + group + "/" + name.slice(0, -5))
).sort();
for (const route of routes) for (const lang of langs) {
  if (!fs.existsSync(path.join(root, lang, route + ".html"))) {
    throw new Error("Missing localized HTML: " + lang + "/" + route);
  }
}
function entry(url, alt) {
  return [
    "  <url>",
    "    <loc>" + origin + url + "</loc>",
    ...alt.map(x => '    <xhtml:link rel="alternate" hreflang="' + x[0] + '" href="' + origin + x[1] + '"/>'),
    "  </url>"
  ].join("\n");
}
const homeAlt = [["en","/en/"],["zh-Hant","/zh-Hant/"],["ja","/ja/"],["x-default","/"]];
const entries = ["/","/en/","/zh-Hant/","/ja/"].map(url => entry(url, homeAlt));
for (const route of routes) {
  const alt = [...langs.map(lang => [lang, "/" + lang + "/" + route]), ["x-default", "/en/" + route]];
  for (const lang of langs) entries.push(entry("/" + lang + "/" + route, alt));
}
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...entries,
  "</urlset>",
  ""
].join("\n");
fs.writeFileSync(path.join(root, "sitemap.xml"), xml, "utf8");
console.log("Generated " + entries.length + " sitemap URLs.");
