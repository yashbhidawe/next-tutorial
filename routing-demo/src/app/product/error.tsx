"use client";
import { startTransition } from "react";

import { useRouter } from "next/navigation";
const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reload()}>Try Again</button>
    </div>
  );
};

export default ErrorBoundary;
