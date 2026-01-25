"use client";

import { FiTrendingUp, FiUsers, FiShoppingCart, FiDollarSign } from "react-icons/fi";

const stats = [
  {
    id: 1,
    label: "Total Revenue",
    value: "$45,231",
    change: "+20.1%",
    icon: <FiDollarSign size={24} />,
    color: "var(--color-accent-success)",
  },
  {
    id: 2,
    label: "Total Users",
    value: "2,345",
    change: "+12.5%",
    icon: <FiUsers size={24} />,
    color: "var(--color-accent-primary)",
  },
  {
    id: 3,
    label: "Total Orders",
    value: "1,234",
    change: "+8.3%",
    icon: <FiShoppingCart size={24} />,
    color: "var(--color-accent-secondary)",
  },
  {
    id: 4,
    label: "Growth Rate",
    value: "23.5%",
    change: "+5.2%",
    icon: <FiTrendingUp size={24} />,
    color: "var(--color-accent-warning)",
  },
];

export default function DashboardPage() {
  return (
    <>
      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
        {stats.map((stat) => (
          <div key={stat.id} style={{ backgroundColor: "var(--color-bg-card)", padding: "1.5rem", borderRadius: "var(--border-radius-lg)", boxShadow: "var(--shadow-md)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <div>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "0.5rem" }}>{stat.label}</p>
                <h3 style={{ fontSize: "1.75rem", fontWeight: "bold", color: "var(--color-text-primary)" }}>{stat.value}</h3>
              </div>
              <div style={{ padding: "0.75rem", borderRadius: "var(--border-radius-md)", backgroundColor: "var(--color-bg-surface)", color: stat.color }}>{stat.icon}</div>
            </div>
            <p style={{ fontSize: "0.875rem", color: stat.color, fontWeight: "500" }}>{stat.change} from last month</p>
          </div>
        ))}
      </div>

      {/* Content Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        {/* Recent Activity */}
        <div style={{ backgroundColor: "var(--color-bg-card)", padding: "1.5rem", borderRadius: "var(--border-radius-lg)", boxShadow: "var(--shadow-md)" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "var(--color-text-primary)", marginBottom: "1rem" }}>Recent Activity</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[1, 2, 3].map((item) => (
              <div key={item} style={{ padding: "1rem", backgroundColor: "var(--color-bg-surface)", borderRadius: "var(--border-radius-md)" }}>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-primary)", marginBottom: "0.25rem" }}>Activity Item {item}</p>
                <p style={{ fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}>Template content describing activity</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ backgroundColor: "var(--color-bg-card)", padding: "1.5rem", borderRadius: "var(--border-radius-lg)", boxShadow: "var(--shadow-md)" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "var(--color-text-primary)", marginBottom: "1rem" }}>Quick Actions</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {["Create New Item", "Generate Report", "Invite User"].map((action) => (
              <button
                key={action}
                style={{
                  padding: "0.75rem 1rem",
                  backgroundColor: "var(--color-bg-surface)",
                  borderRadius: "var(--border-radius-md)",
                  color: "var(--color-text-primary)",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  transition: "all 0.2s",
                  border: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-bg-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--color-bg-surface)")}
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div style={{ marginTop: "2rem", padding: "2rem", backgroundColor: "var(--color-bg-card)", borderRadius: "var(--border-radius-lg)", boxShadow: "var(--shadow-md)", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>Template Dashboard</h2>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "1rem" }}>This is placeholder content. Replace with your actual dashboard data and components.</p>
      </div>
    </>
  );
}
