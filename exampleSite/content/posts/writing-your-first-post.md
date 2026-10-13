+++
title = "Writing Your First Post"
date = 2026-09-24
description = "Create a post, fill in its front matter, and publish it."
tags = ["scribe", "hugo"]
categories = ["Guides"]
+++

Posts live in `content/posts/`. Create one with Hugo's `new` command and the
theme's archetype fills in the front matter for you.

```bash
hugo new content posts/my-first-post.md
```

## Front matter

```toml
+++
title = 'My First Post'
date = '2026-09-24T09:00:00+00:00'
draft = true
description = ''
tags = []
categories = []
# featured_image = 'images/cover.jpg'
+++
```

| Field            | What it does                                                      |
| ---------------- | ----------------------------------------------------------------- |
| `title`          | Shown as the page heading and in post lists.                      |
| `date`           | Sets the order of posts and the date shown under the title.       |
| `draft`          | Drafts are skipped unless you build with `--buildDrafts`.         |
| `description`    | Used in post lists, search results, and sharing previews.         |
| `tags`           | Listed at the end of the post, each linking to its own page.      |
| `categories`     | Shown above the title.                                            |
| `featured_image` | Displayed above the post and used as its social sharing image.    |

Leave `description` empty and Scribe falls back to the first few lines of the
post. Leave `featured_image` out and the first image in the post is used for
sharing previews instead.

## Preview and publish

Run the development server while you write:

```bash
hugo server --buildDrafts
```

When the post is ready, set `draft = false` and build the site:

```bash
hugo --minify
```

The finished site is in `public/`, ready to upload to any static host.
