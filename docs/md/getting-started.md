---
template: deep
---

# Getting Started

[Crush](https://github.com/charmbracelet/crush) is awesome! You should use it.

It's by [charm.land](https://charm.land/).

Crush's [installation instructions](https://github.com/charmbracelet/crush?tab=readme-ov-file#installation) are easy to follow.

Do that first.

## Crush's [Configuration](https://github.com/charmbracelet/crush?tab=readme-ov-file#installation) Explained

Charm is great. Sadly, they did not do a good job explaining to me how to configure json.

They said:

```json
{
  "this-setting": { "this": "that" },
  "that-setting": ["ceci", "cela"]
}
```

Many words, few instructions.

The point is that the config is mad flexible, but...
... it doesn't say what the default expectations are.

### LSP

I don't know how the LSPs work, still :3

### MCPs

I played with this a little more.

The example Charm gives is:

```json
{
  "$schema": "https://charm.land/crush.json",
  "mcp": {
    "filesystem": {
      "type": "stdio",
      "command": "node",
      "args": ["/path/to/mcp-server.js"],
      "timeout": 120,
      "disabled": false,
      "env": {
        "NODE_ENV": "production"
      }
    },
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "timeout": 120,
      "disabled": false,
      "headers": {
        "Authorization": "Bearer $GH_PAT"
      }
    },
    "streaming-service": {
      "type": "sse",
      "url": "https://example.com/mcp/sse",
      "timeout": 120,
      "disabled": false,
      "headers": {
        "API-Key": "$(echo $API_KEY)"
      }
    }
  }
}
```

This is a good start, but it doesn't totally explain the big ideas here.

A `crush.json` isn't complete just by adding an `mcp` field - you want to add some others, too.


### Sidebar on ENV

I run NixOS.

Sorry pal, I get that you run Arch, very cool, but *I run NixOS*.

I am not a computer genius so I have no earthly idea how to use environment variables.

Typically, they go onto your `PATH`, a config somewhere on your puter that your terminal consumes.

Nix doesn't do that.

If you know how to deal with ENV vars in NixOS, that's very cool.

I just paste my keys into the `crush.json` files and add them to `.gitignore`.

## Working Example
Here's an example that worked for me:

```json{14-16}
{
  "$schema": "https://charm.land/crush.json",
  "mcp": {
    "context7": {
      "type": "http",
      "url": "https://mcp.context7.com/mcp",
      "timeout": 120,
      "disabled": false,
      "headers": {
        "CONTEXT7_API_KEY": "~"
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

Crush couldn't see the mcp until I added this seemingly unrelated `tools` object.

#### Permissions

The `Permissions` key in the example:

```json{17-25}
{
  "$schema": "https://charm.land/crush.json",
  "mcp": {
    "context7": {
      "type": "http",
      "url": "https://mcp.context7.com/mcp",
      "timeout": 120,
      "disabled": false,
      "headers": {
        "CONTEXT7_API_KEY": "~"
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

Basically turns those specific commands into `yolo-mode`. They run without your input.

In this case, we've enabled:
- view (reading files)
- ls (listing directory children)
- grep (search)
- mcp_context7_get-library-doc (like view but through context7)
- mcp_context7_resolve-library-id (like search but for context7)

:::warning
I **strongly** recommend not including `edit`, `write`, and `bash` in the allowed tools unless you're running a benchmark.
:::

:::info
Why?

I'm not a computer genius, idk if you are or aren't, but for me, agentic coding agents f\*ck up like... all the time.

Every single `edit` or `write` command an AI agent has literally ever written in front of me was broken somehow.

These errors compound.

I notice this when I'm *not even a computer genius*. Maybe I prompt badly. Maybe my architectures are naive. Maybe LLMs just have a sub 100% error rate like any other intelligence ever and aren't perfect.

Maybe agentic coding is just a scam invented by Big AI to sell more tokens.

Regardless - it's way harder to unf\*ck a repo after a half hour of broken writes that to unfuck it as you go.

`bash` lets these commands compound even faster. That's how you get:

```bash
# I need to resolve the failing test. Let's start from fresh.
rm -rf *
```
:::
