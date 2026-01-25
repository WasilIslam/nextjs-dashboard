"use client";

import { memo } from "react";
import { appLogo, appName } from "@/app/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = memo(() => {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const href = isDashboard ? "/dashboard" : "/";

  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        textDecoration: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      <img
        src={appLogo}
        alt={`${appName} logo`}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "var(--border-radius-md)",
          objectFit: "cover",
          pointerEvents: "none",
        }}
        loading="eager"
        draggable={false}
      />
      <span
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          color: "var(--color-text-primary)",
          pointerEvents: "none",
        }}
      >
        {appName}
      </span>
    </Link>
  );
});

Logo.displayName = "Logo";

export default Logo;
