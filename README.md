Ultra refined ESLint shareable config 📜
---
This package provides all-purpose, extensible **[ESLint](https://eslint.org/)** config for `ESNext` syntax.  
Optimized for performance 🚀, readability 📖 and resilience 🛡️ against implicit code 🧬 flaws.

## Installation

```bash
npm install eslint-config-ultra-refined --save-dev
```

### Usage

In `eslint.config.js` file:

```javascript
import ultraRefined from 'eslint-config-ultra-refined';
import {
  defineConfig,
  globalIgnores,
} from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    extends: [ultraRefined],
    // Your modifications
    rules: {
      // Your modifications
    },
  },
]);
```
