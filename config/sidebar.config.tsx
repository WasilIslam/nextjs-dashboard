"use client";

import { FiHome, FiUsers, FiSettings, FiBarChart2, FiFileText, FiShoppingCart } from "react-icons/fi";
import type { SidebarConfig } from "@/types/sidebar";

export const sidebarConfig: SidebarConfig = {
  title: "Dashboard",
  footer: "Dashboard v1.1",
  items: [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <FiHome size={20} />,
      href: "/dashboard",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: <FiBarChart2 size={20} />,
      subItems: [
        { id: "overview", label: "Overview", href: "/dashboard/analytics/overview" },
        { id: "reports", label: "Reports", href: "/dashboard/analytics/reports" },
        { id: "insights", label: "Insights", href: "/dashboard/analytics/insights" },
      ],
    },
    {
      id: "users",
      label: "Users",
      icon: <FiUsers size={20} />,
      subItems: [
        { id: "all-users", label: "All Users", href: "/dashboard/users" },
        { id: "roles", label: "Roles", href: "/dashboard/users/roles" },
        { id: "permissions", label: "Permissions", href: "/dashboard/users/permissions" },
      ],
    },
    {
      id: "products",
      label: "Products",
      icon: <FiShoppingCart size={20} />,
      subItems: [
        { id: "all-products", label: "All Products", href: "/dashboard/products" },
        { id: "categories", label: "Categories", href: "/dashboard/products/categories" },
        { id: "inventory", label: "Inventory", href: "/dashboard/products/inventory" },
      ],
    },
    {
      id: "content",
      label: "Content",
      icon: <FiFileText size={20} />,
      href: "/dashboard/content",
    },
    {
      id: "settings",
      label: "Settings",
      icon: <FiSettings size={20} />,
      href: "/dashboard/settings",
    },
  ],
};
