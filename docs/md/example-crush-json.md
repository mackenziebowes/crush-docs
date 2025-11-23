# Example crush.json

Here is an example of a working crush.json - add this to new projects with your actual key to enable Context7.


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
