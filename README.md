# uri-parse-lib

Small library for parse URI(URL)

[![NPM](https://nodei.co/npm/uri-parse-lib.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/uri-parse-lib/)

# Try it

[DEMO](https://pxyup.github.io/uri-parse-lib)

# What the difference with new URL(url)?

1. It is deeply parse search params like a object(check examples)

# Install

    npm install uri-parse-lib
    
# Usage   
    
```typescript
import { parseURI } from "uri-parse-lib"`

parseURI("http://user:pass@example.com:8080/directory/file.ext?query[nan][0][nan]=1&query[nan][1][sed]=4&sed[tatat][rqwr]=5&query[nan][2][sed]=4#anchor");`
```

```json
{
  "hash": "#anchor",
  "host": "example.com",
  "origin": "http://example.com:8080",
  "password": "pass",
  "pathname": "/directory/file.ext",
  "port": "8080",
  "protocol": "http",
  "query": {
    "query": {
      "nan": [
        {
          "nan": "1"
        },
        {
          "sed": "4"
        },
        {
          "sed": "4"
        }
      ]
    },
    "sed": {
      "tatat": {
        "rqwr": "5"
      }
    }
  },
  "user": "user"
}
```
