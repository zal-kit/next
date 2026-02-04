# @zal-kit/next

A collection of useful React hooks for Next.js applications.

## Requirements

This package requires the following peer dependencies:

- `next` >= 13.0.0
- `react` >= 16.8.0
- `react-dom` >= 16.8.0

## Installation

```bash
npm install @zal-kit/next
# or
yarn add @zal-kit/next
# or
pnpm add @zal-kit/next
```

## Hooks

### `useRouteFilter`

A hook for managing URL query parameters and navigation in Next.js applications.

```typescript
import { useRouteFilter } from '@zal-kit/next';

function ProductList() {
  const { params, pushWithParam } = useRouteFilter();
  
  // Read query params
  const currentSearch = params.search;
  const currentPage = params.page;
  
  // Update URL with new params
  const handleSearch = (query: string) => {
    pushWithParam('/products', { search: query, page: '1' });
  };
  
  // Preserve existing params and add new ones
  const handleFilter = (category: string) => {
    pushWithParam('/products', { category }, { withPreviousParams: true });
  };
  
  return (
    <div>
      <input onChange={(e) => handleSearch(e.target.value)} />
      <div>Current search: {currentSearch}</div>
    </div>
  );
}
```

**API:**
- Returns object with:
  - `params`: Record of all URL query parameters as strings
  - `searchParams`: URLSearchParams instance
  - `pushWithParam(pageUrl, params, options)`: Update URL with new parameters
    - `pageUrl`: Target pathname
    - `params`: Object of key-value pairs (null/undefined/empty values are removed)
    - `options.withPreviousParams`: Boolean to preserve existing params (default: `false`)

## TypeScript

This package is written in TypeScript and includes type definitions.

## License

MIT
```