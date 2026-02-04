# @zal/react-hooks

A collection of useful React hooks for modern web applications.

## Installation

```bash
npm install @zal/react-hooks
# or
yarn add @zal/react-hooks
# or
pnpm add @zal/react-hooks
```

## Hooks

### `useToggle`

A simple hook for managing boolean state with a toggle function.

```typescript
import { useToggle } from '@zal/react-hooks';

function MyComponent() {
  const [isOpen, toggle, setIsOpen] = useToggle(false);
  
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && <div>Content</div>}
    </div>
  );
}
```

**API:**
- `initialValue` (boolean, optional): Initial state value (default: `false`)
- Returns: `[state, toggle, setState]`
  - `state`: Current boolean value
  - `toggle`: Function to toggle the state
  - `setState`: Function to set state directly

### `useRouteFilter`

A hook for managing URL query parameters and navigation without a router dependency.

```typescript
import { useRouteFilter } from '@zal/react-hooks';

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Publishing

To publish a new version:

```bash
# Update version
npm version patch  # or minor, major

# Publish to npm
npm publish
```
