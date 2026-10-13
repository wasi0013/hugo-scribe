+++
title = "Code Blocks and Syntax Highlighting"
date = 2026-10-02
description = "How Scribe renders fenced code blocks, inline code, and long lines."
tags = ["code", "markdown"]
categories = ["Guides"]
+++

Scribe sets code in Fira Code and highlights it with a Dracula palette that
stays the same across all three reading themes, so snippets always look the
way you expect.

## Fenced code blocks

Name the language after the opening fence to turn on highlighting.

```python
from dataclasses import dataclass


@dataclass
class Post:
    title: str
    words: int

    @property
    def reading_time(self) -> int:
        """Minutes needed at 200 words per minute."""
        return max(1, round(self.words / 200))


print(Post("Hello, Scribe", 640).reading_time)  # 3
```

```go
package main

import "fmt"

func main() {
	themes := []string{"light", "sepia", "dark"}
	for i, name := range themes {
		fmt.Printf("%d: %s\n", i+1, name)
	}
}
```

```bash
hugo new content posts/my-first-post.md
hugo server --buildDrafts
```

## Long lines

Long lines scroll horizontally inside the block instead of wrapping or
breaking the layout.

```js
const summary = posts.filter((post) => !post.draft).map((post) => `${post.date.toISOString().slice(0, 10)}  ${post.title}`).join("\n");
```

## Inline code

Mention a `variable`, a `function()`, or a file such as `hugo.toml` in the
middle of a sentence and it stays on the baseline with the surrounding text.

## Plain blocks

A fence with no language is shown as-is, without highlighting.

```
content/
├── about.md
└── posts/
    └── hello-scribe.md
```
