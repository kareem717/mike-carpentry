import { Loader2 } from "lucide-react";
import React from "react";

export default function LoadingRoot() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader2 className="animate-spin size-12 text-muted-foreground/60" />
    </div>
  );
}
