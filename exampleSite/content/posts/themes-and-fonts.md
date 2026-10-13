+++
title = "Three Themes, Two Fonts"
date = 2026-09-29
description = "Why Scribe lets readers choose how a page looks, and how those choices work."
tags = ["scribe", "accessibility", "typography"]
categories = ["Meta"]
+++

A blog is read in bright offices, on phones in bed, and on e-readers in the
garden. No single palette suits all of that, so Scribe ships three and lets
the reader pick.

## Themes

**Light** is off-white paper with a red accent. **Sepia** is warm parchment
with rust-coloured links, easier on the eyes over a long read. **Dark** is a
warm near-black with amber accents rather than the usual cold grey.

Until a reader chooses, Scribe follows their operating system: dark if the
system is in dark mode, light otherwise. To start everyone on a particular
theme instead, set it in your site configuration:

```toml
[params]
  defaultTheme = "sepia"
```

## Fonts

The default body font is [Kalam](https://fonts.google.com/specimen/Kalam), a
handwriting face that gives the theme its character. Handwriting is not easy
for everybody to read, so the gear menu also offers
[Nunito](https://fonts.google.com/specimen/Nunito), a rounded sans-serif that
keeps the friendly tone.

To make the sans-serif the default:

```toml
[params]
  defaultFont = "sans"
```

## Remembering the choice

Both preferences are saved in the browser's local storage and applied before
the page is painted, so there is no flash of the wrong theme when moving from
page to page. Nothing is sent to a server, and no cookies are set.

## Contrast

Text and link colours in all three themes are chosen to meet the WCAG AA
contrast ratio of 4.5:1 against their backgrounds.
