export default function LandingContent() {
  return (
    <main style={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 1.5rem",
    }}>
      <div style={{
        maxWidth: "800px",
        textAlign: "center",
      }}>
        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: "bold",
          color: "var(--color-text-primary)",
          marginBottom: "1.5rem",
          lineHeight: "1.2",
        }}>
          Template Content
        </h1>

        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          color: "var(--color-text-secondary)",
          marginBottom: "3rem",
          lineHeight: "1.6",
        }}>
          This is a placeholder landing page. Replace this content with your amazing product description, features, and call-to-action.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          marginTop: "4rem",
        }}>
          {/* Feature Card 1 */}
          <div style={{
            backgroundColor: "var(--color-bg-card)",
            padding: "2rem",
            borderRadius: "var(--border-radius-lg)",
            border: "1px solid var(--color-border-primary)",
            boxShadow: "var(--shadow-md)",
          }}>
            <h3 style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "var(--color-text-primary)",
              marginBottom: "0.75rem",
            }}>
              Feature One
            </h3>
            <p style={{
              color: "var(--color-text-secondary)",
              fontSize: "0.875rem",
              lineHeight: "1.5",
            }}>
              Template content describing an amazing feature that your product offers.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div style={{
            backgroundColor: "var(--color-bg-card)",
            padding: "2rem",
            borderRadius: "var(--border-radius-lg)",
            border: "1px solid var(--color-border-primary)",
            boxShadow: "var(--shadow-md)",
          }}>
            <h3 style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "var(--color-text-primary)",
              marginBottom: "0.75rem",
            }}>
              Feature Two
            </h3>
            <p style={{
              color: "var(--color-text-secondary)",
              fontSize: "0.875rem",
              lineHeight: "1.5",
            }}>
              Template content describing another incredible feature.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div style={{
            backgroundColor: "var(--color-bg-card)",
            padding: "2rem",
            borderRadius: "var(--border-radius-lg)",
            border: "1px solid var(--color-border-primary)",
            boxShadow: "var(--shadow-md)",
          }}>
            <h3 style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "var(--color-text-primary)",
              marginBottom: "0.75rem",
            }}>
              Feature Three
            </h3>
            <p style={{
              color: "var(--color-text-secondary)",
              fontSize: "0.875rem",
              lineHeight: "1.5",
            }}>
              Template content showcasing a third amazing feature.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
