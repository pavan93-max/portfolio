"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { Suspense } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="min-h-screen bg-base" />}>
        {children}
      </Suspense>
    </ThemeProvider>
  );
}

