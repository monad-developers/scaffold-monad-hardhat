# Loading States and Skeleton Components

This directory contains comprehensive loading state components for Scaffold-ETH 2.

## 📦 Components

### LoadingSpinner

Configurable loading spinner with multiple sizes and colors.

```tsx
import { LoadingSpinner } from "~~/components/scaffold-eth";

<LoadingSpinner size="lg" color="primary" />;
```

**Props:**

- `size`: `"xs" | "sm" | "md" | "lg"` (default: `"md"`)
- `color`: `"primary" | "secondary" | "accent" | "neutral"` (default: `"primary"`)
- `className`: Additional CSS classes

### Skeleton

Flexible skeleton component for content placeholders.

```tsx
import { Skeleton } from "~~/components/scaffold-eth";

<Skeleton lines={3} height="1.5rem" width="100%" rounded="md" />;
```

**Props:**

- `lines`: Number of skeleton lines (default: `1`)
- `height`: Height of each line (default: `"1rem"`)
- `width`: Width of skeleton (default: `"100%"`)
- `rounded`: Border radius `"none" | "sm" | "md" | "lg" | "full"` (default: `"md"`)
- `className`: Additional CSS classes

### ContractCardSkeleton

Skeleton for contract information cards.

```tsx
import { ContractCardSkeleton } from "~~/components/scaffold-eth";

<ContractCardSkeleton />;
```

### ContractVariablesSkeleton

Skeleton for contract variables section.

```tsx
import { ContractVariablesSkeleton } from "~~/components/scaffold-eth";

<ContractVariablesSkeleton />;
```

### ContractMethodsSkeleton

Skeleton for contract methods (read/write).

```tsx
import { ContractMethodsSkeleton } from "~~/components/scaffold-eth";

<ContractMethodsSkeleton />;
```

### TableSkeleton

Skeleton for data tables.

```tsx
import { TableSkeleton } from "~~/components/scaffold-eth";

<TableSkeleton rows={5} columns={7} showHeader={true} />;
```

**Props:**

- `rows`: Number of skeleton rows (default: `5`)
- `columns`: Number of skeleton columns (default: `6`)
- `showHeader`: Show table header skeleton (default: `true`)
- `className`: Additional CSS classes

### TransactionTableSkeleton

Pre-configured skeleton for transaction tables.

```tsx
import { TransactionTableSkeleton } from "~~/components/scaffold-eth";

<TransactionTableSkeleton />;
```

## 🎛️ Hooks

### useLoadingState

Hook for managing loading states with automatic error handling.

```tsx
import { useLoadingState } from "~~/hooks/scaffold-eth";

const { state, isLoading, isError, error, execute, reset } = useLoadingState({
  timeout: 3000, // Auto-reset after 3 seconds
  onStateChange: state => console.log("State changed:", state),
});

// Execute async operation with automatic state management
const handleOperation = async () => {
  const result = await execute(async () => {
    return await someAsyncOperation();
  });
};
```

**Options:**

- `initialState`: Initial loading state (default: `"idle"`)
- `timeout`: Auto-reset timeout in milliseconds
- `onStateChange`: Callback when state changes

**Returns:**

- `state`: Current loading state `"idle" | "loading" | "success" | "error"`
- `error`: Current error (if any)
- `isIdle`, `isLoading`, `isSuccess`, `isError`: Boolean state helpers
- `setLoading`, `setSuccess`, `setError`: Manual state setters
- `reset`: Reset to idle state
- `execute`: Execute async operation with automatic state management

## 🎨 Styling

All components integrate with DaisyUI and can be customized:

```tsx
// Custom skeleton with gradient
<Skeleton
  className="bg-gradient-to-r from-base-300 to-base-200"
  lines={2}
  rounded="lg"
/>

// Custom spinner
<LoadingSpinner
  className="scale-150"
  size="md"
  color="accent"
/>
```

## ♿ Accessibility

All components include proper accessibility features:

- `aria-label` attributes
- `role="status"` for loading indicators
- Semantic markup
- Screen reader friendly

## 🎯 Best Practices

1. **Match Content Structure**: Ensure skeleton structure matches actual content
2. **Use Specific Skeletons**: Prefer specialized skeletons over generic ones
3. **Consistent Patterns**: Use same loading patterns throughout your app
4. **Prevent Layout Shift**: Skeletons should maintain exact content dimensions
5. **Accessibility**: Always include proper ARIA labels

## 🧪 Examples

### Basic Loading Pattern

```tsx
const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Skeleton lines={3} />;
  }

  return <div>{data}</div>;
};
```

### Advanced Loading with Hook

```tsx
const MyComponent = () => {
  const { isLoading, execute, error } = useLoadingState();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const result = await execute(async () => {
      return await api.fetchData();
    });

    if (result) {
      setData(result);
    }
  };

  if (isLoading) return <ContractCardSkeleton />;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data}</div>;
};
```

### Table Loading

```tsx
const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <TransactionTableSkeleton />;
  }

  return <table>{/* actual table content */}</table>;
};
```
