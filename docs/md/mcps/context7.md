---
template: deep
---

# [Context7](https://context7.com/) MCP Guide

## About Context7

Context7 is a repository of LLM-accessible documentation libraries for your coding agent to read.

The *hope* is that by reading the documentation, there'll be less hallucinations.

Sadly, LLMs tend to be a bit arrogant and pompous, so they don't read the f*cking manual even if you beg them to.

Context7 gives you the ability to beg them to.

### Finding & Using Libraries (docs)

The [context7 homepage](https://context7.com/) is a small app that enables searching for libraries.

**Using** libraries (docs) is triggered by the command:

`use library /author/project`

Where `author` and `project` are variables for routing to the correct resources.

When you open a library, you go to a page like this: [SolidJS's Context7 Listing](https://context7.com/solidjs/solid-docs)

This page doesn't include the `author` or `project` keys you need to indicate the resource.

:::info
**Fact check:** This was true on 11:36 UTC-8 on November 23rd, 2025.
:::

Those keys are available on the `logs` tab: [SolidJS's Context7 Logs Tab](https://context7.com/solidjs/solid-docs?tab=logs)

They're kinda hidden *inside* the logs:
```bash{3-4}
# Benchmark completed for /solidjs/solid-docs with average score: 83.50
# Benchmark completed
# Cleaning up existing folders for project /solidjs/solid-docs
# Cleanup completed for project /solidjs/solid-docs
```

## Complete Crush Example

Just copy the keys you need from this to your own `crush.json` file.

```json
{
  "$schema": "https://charm.land/crush.json",
  "mcp": {
    "context7": {
      "type": "http",
      "url": "https://mcp.context7.com/mcp",
      "timeout": 120,
      "disabled": false,
      "headers": {
        "CONTEXT7_API_KEY": "key go here"
      }
    }
  },
  "tools": {
    "ls": { "max_items": 1000 }
  },
  "permissions": {
    "allowed_tools": [
      "view",
      "ls",
      "grep",
      "mcp_context7_get-library-doc",
      "mcp_context7_resolve-library-id"
    ]
  }
}
```
