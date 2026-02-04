# Publishing Checklist for @zal/react-hooks

## ✅ Fixed Issues

### Critical
1. ✅ Package name corrected from `@posme-id/ui-core` to `@zal/react-hooks`
2. ✅ Changed from GitHub Packages to public npm registry
3. ✅ Added `repository` field with Git URL
4. ✅ Added `keywords` for discoverability
5. ✅ Added `author` field
6. ✅ Added `description` field
7. ✅ Added `prepublishOnly` script to ensure build before publish
8. ✅ Updated README to match actual hooks (removed non-existent utils)

### Moderate
9. ✅ Added `exports` field for better module resolution
10. ✅ Improved TypeScript config with proper lib settings
11. ✅ Added `.npmignore` file
12. ✅ Added `homepage` and `bugs` URLs
13. ✅ Relaxed peer dependency versions (>=16.8.0 instead of ^19.0.0)
14. ✅ Added `engines` field
15. ✅ Added `publishConfig` with public access

## 📝 Before Publishing

### 1. Update Repository URLs
The `package.json` currently has placeholder GitHub URLs. Update these:
```json
"repository": {
  "type": "git",
  "url": "https://github.com/YOUR_USERNAME/react-hooks.git"
},
"homepage": "https://github.com/YOUR_USERNAME/react-hooks#readme",
"bugs": {
  "url": "https://github.com/YOUR_USERNAME/react-hooks/issues"
}
```

### 2. Initialize Git Repository (if not done)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/react-hooks.git
git push -u origin main
```

### 3. Create npm Account
- Visit https://www.npmjs.com/signup
- Verify your email

### 4. Login to npm
```bash
npm login
```

### 5. Test the Package Locally
```bash
npm run build
npm pack
```
This creates a `.tgz` file you can test in another project:
```bash
npm install /path/to/zal-react-hooks-1.0.0.tgz
```

### 6. Publish
```bash
npm publish --access public
```

## 🎯 Recommended Improvements

### Add Tests
```bash
npm install --save-dev @testing-library/react @testing-library/react-hooks jest @types/jest
```

### Add ESLint
```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### Add a CHANGELOG.md
Document version changes for users.

### Add GitHub Actions
Automate publishing with CI/CD:
```yaml
# .github/workflows/publish.yml
name: Publish Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm test
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```

### Add More Hooks
Consider adding popular hooks like:
- `useDebounce`
- `useLocalStorage`
- `useMediaQuery`
- `usePrevious`

## 📊 Package Health

- ✅ TypeScript support
- ✅ Source maps included
- ✅ Declaration maps for better IDE support
- ✅ Proper peer dependencies
- ⚠️ No tests yet
- ⚠️ No linting configured

## 🚀 Publishing Commands

```bash
# Patch version (1.0.0 -> 1.0.1)
npm version patch
npm publish

# Minor version (1.0.0 -> 1.1.0)
npm version minor
npm publish

# Major version (1.0.0 -> 2.0.0)
npm version major
npm publish
```
