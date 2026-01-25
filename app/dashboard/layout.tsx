"use client";

import { useState, useEffect, useMemo } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import CommandK from "@/components/CommandK";
import { sidebarConfig } from "@/config/sidebar.config";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push("/");
  }, [user, loading, router]);

  // Convert sidebar items to CommandK format
  const commandItems = useMemo(() => {
    const items: Array<{ id: string; label: string; description?: string; icon?: React.ReactNode; onSelect: () => void }> = [];

    sidebarConfig.items.forEach((item) => {
      if (item.href) {
        items.push({
          id: item.id,
          label: item.label,
          icon: item.icon,
          onSelect: () => router.push(item.href!),
        });
      }

      if (item.subItems) {
        item.subItems.forEach((subItem) => {
          items.push({
            id: subItem.id,
            label: subItem.label,
            description: item.label,
            onSelect: () => router.push(subItem.href),
          });
        });
      }
    });

    return items;
  }, [router]);

  if (loading || !user) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "var(--color-bg-body)",
        }}
      >
        <p style={{ color: "var(--color-text-primary)" }}>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-body)" }}>
      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

      <main
        style={{
          marginLeft: "0",
          padding: "2rem 1.5rem",
          transition: "margin-left 0.3s ease",
          display: "flex",
          justifyContent: "center",
        }}
        className="dashboard-content"
      >
        <div style={{ width: "100%", maxWidth: "1000px" }}>{children}</div>
      </main>

      {/* Global CommandK */}
      <CommandK items={commandItems} />

      <style jsx>{`
        @media (min-width: 768px) {
          .dashboard-content {
            margin-left: 280px !important;
          }
        }
      `}</style>
    </div>
  );
}
