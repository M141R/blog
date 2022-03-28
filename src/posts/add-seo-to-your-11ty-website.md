---
title: Add SEO to your 11ty website
description: SEO is important. So today I am sharing how to add it to your 11ty website
date: 2022-03-27T14:59:09.757Z
image: /assets/4.webp
tags:
  - post
  - featured
  - webdev
---
## Add Front Matter in all pages

```html
---
title: Page Title
metatitle: Page Meta Title
metadescription: Page Meta Description
image: Image Address
---
```

## Add Site Url in data

Make a `site.json` file in `_data`

```json
{
"url": "https://yoursiteurl.com"
}
```

## Primary Tags

Add these in your `base.njk` or your main `njk` in which you have added `<head>`

```html
<title>{{ title }}</title>
<meta name="title" content="{{ metatitle }}">
<meta name="description" content="{{ metadescription }}">
```

## Open Graph / Facebook

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com{{page.url}}">
<meta property="og:title" content="{{ metatitle }}">
<meta property="og:description" content="{{ metadescription }}">
<meta property="og:image" content="{{ site.url + image }}">
```

If you want to automatically generate open graph images you can read this [post ](https://bnijenhuis.nl/notes/2021-05-10-automatically-generate-open-graph-images-in-eleventy/).

## Twitter

```html
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://example.com{{page.url}}">
<meta property="twitter:title" content="{{ metatitle }}">
<meta property="twitter:description" content="{{ metadescription }}">
<meta property="twitter:image" content="{{ site.url + image }}">
```

## SiteMap

Make `sitemap.njk` in your root directory. It will automatically become `sitemap.xml.`

```xml
---
permalink: /sitemap.xml
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {% for page in collections.all %}
        <url>
            <loc>{{ site.url }}{{ page.url | url }}</loc>
            <lastmod>{{ page.date.toISOString() }}</lastmod>
        </url>
    {% endfor %}
</urlset>
```

## Robots

Make `robots.txt`

```txt
Sitemap: https://www.yoursitename.com/sitemap.xml
User-agent: *
Disallow:
```