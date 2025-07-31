// packages/nextjs/hooks/scaffold-eth/useLoadingState.ts
import { useCallback, useEffect, useRef, useState } from "react";

export type LoadingState = "idle" | "loading" | "success" | "error";

interface UseLoadingStateOptions {
  initialState?: LoadingState;
  timeout?: number; // Auto-reset after timeout (ms)
  onStateChange?: (state: LoadingState) => void;
}

export const useLoadingState = (options: UseLoadingStateOptions = {}) => {
  const { initialState = "idle", timeout, onStateChange } = options;

  const [state, setState] = useState<LoadingState>(initialState);
  const [error, setError] = useState<Error | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const setLoading = useCallback(() => {
    setState("loading");
    setError(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const setSuccess = useCallback(() => {
    setState("success");
    setError(null);

    if (timeout) {
      timeoutRef.current = setTimeout(() => {
        setState("idle");
      }, timeout);
    }
  }, [timeout]);

  const setErrorState = useCallback(
    (err: Error | string) => {
      setState("error");
      setError(err instanceof Error ? err : new Error(err));

      if (timeout) {
        timeoutRef.current = setTimeout(() => {
          setState("idle");
          setError(null);
        }, timeout);
      }
    },
    [timeout],
  );

  const reset = useCallback(() => {
    setState("idle");
    setError(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  // Execute async operation with automatic state management
  const execute = useCallback(
    async <T>(operation: () => Promise<T>): Promise<T | null> => {
      try {
        setLoading();
        const result = await operation();
        setSuccess();
        return result;
      } catch (err) {
        setErrorState(err as Error);
        return null;
      }
    },
    [setLoading, setSuccess, setErrorState],
  );

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Call state change callback
  useEffect(() => {
    onStateChange?.(state);
  }, [state, onStateChange]);

  return {
    state,
    error,
    isIdle: state === "idle",
    isLoading: state === "loading",
    isSuccess: state === "success",
    isError: state === "error",
    setLoading,
    setSuccess,
    setError: setErrorState,
    reset,
    execute,
  };
};
