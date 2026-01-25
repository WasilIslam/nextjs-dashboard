import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "var(--color-bg-body)",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          width: "100%",
          backgroundColor: "var(--color-bg-card)",
          borderRadius: "var(--border-radius-lg)",
          padding: "2rem",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "var(--color-text-primary)",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Contact Us
        </h1>

        <ContactForm />
      </div>
    </div>
  );
}
