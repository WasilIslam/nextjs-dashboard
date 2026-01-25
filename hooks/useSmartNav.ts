"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useSmartNav() {
  const { user } = useAuth();
  const router = useRouter();

  const goHome = useCallback(() => {
    router.push(user ? "/dashboard" : "/");
  }, [user, router]);

  return { goHome };
}
