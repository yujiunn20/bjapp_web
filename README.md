# Blackjack Card Counting Trainer Website

Static content site at https://blackjack.yuchunlab.com.

## Site architecture
- `index.html`: indexable language gateway (x-default, canonical /).
- `{en,zh-Hant,ja}/index.html`: indexable localized homepages.
- `{en,zh-Hant,ja}/content/{app,cardcounting,pc}/*.html`: 93 localized canonical content pages.
- `content/layout.js`: shared article layout and navigation.
- `assets/css/home.css`: homepage CSS, designed to match the existing style.
- `content/{app,cardcounting,pc}/*.html`: legacy language-less pages; retain their noindex + canonical behavior, exclude them from sitemap.
- `tools/add-seo-links.js`: related article links. Uses the App Overview route rather than an obsolete /home shortcut.

## SEO maintenance

Using Node.js 18+ in the repository root:

```sh
node tools/generate-sitemap.js
node tools/check-seo.js
```

The sitemap must list the 93 content routes plus 4 homepages (97 total). Don't add legacy unprefixed HTML files to the sitemap.

## Critical deployment routing requirement

Public canonical article URLs omit the file extension, for example
`https://blackjack.yuchunlab.com/en/content/cardcounting/rules`.
The actual checked-in file is `en/content/cardcounting/rules.html`.

**The host must serve the extensionless canonical URL with HTTP 200**; if supported, configure server-side 301/308 redirects from old `.html` URLs to canonical URLs. Do NOT use JavaScript or meta refresh as a workaround.

This repository does not establish which hosting platform/routing rules are deployed. Determine the host first (Cloudflare Pages / Workers, GitHub Pages or another platform). Do not assume a host-specific `_redirects` file works everywhere.

After deployment verify the full redirect chain, response status and HTML metadata for:
- `/`, `/en/`, `/zh-Hant/`, `/ja/`
- `/en/content/cardcounting/rules` (should be 200)
- `/en/content/cardcounting/rules.html` (ideally a 301/308 to the above)
- `/robots.txt` and `/sitemap.xml`
- Internal links and mobile language switching, including local `file://` opening.

## Google Search Console baseline (2026-10-09)

0 indexed pages; 20 crawled but not indexed, 78 discovered but not crawled, and 1 redirect error. The previous sitemap of 93 URLs was accepted.

A valid sitemap and successful URL Inspection **do not guarantee Google indexing**. After deployment inspect a few primary pages first, then track coverage over several weeks rather than repeatedly resubmitting everything.

## Store links
- iOS: https://apps.apple.com/app/bj-card-counting-trainer/id6786175631
- Android: https://play.google.com/store/apps/details?id=com.yujiunn.blackjack_mobile
- Windows: https://apps.microsoft.com/detail/9NG595NFHPZK
