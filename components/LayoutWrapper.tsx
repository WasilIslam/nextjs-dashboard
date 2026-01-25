"use client";

import { memo, useMemo } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginModal from "@/components/auth/LoginModal";
import SignupModal from "@/components/auth/SignupModal";
import ForgotPasswordModal from "@/components/auth/ForgotPasswordModal";
import { useAuthModal } from "@/contexts/AuthModalContext";

const LayoutWrapper = memo(({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDashboard = useMemo(() => pathname.startsWith("/dashboard"), [pathname]);
  const { activeModal, openModal, closeModal } = useAuthModal();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {!isDashboard && <Header />}
      <main style={{ flex: 1 }}>{children}</main>
      {!isDashboard && <Footer />}

      {/* Auth Modals */}
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeModal}
        onSwitchToSignup={() => openModal("signup")}
        onSwitchToForgotPassword={() => openModal("forgot-password")}
      />
      <SignupModal
        isOpen={activeModal === "signup"}
        onClose={closeModal}
        onSwitchToLogin={() => openModal("login")}
      />
      <ForgotPasswordModal
        isOpen={activeModal === "forgot-password"}
        onClose={closeModal}
        onBackToLogin={() => openModal("login")}
      />
    </div>
  );
});

LayoutWrapper.displayName = "LayoutWrapper";
export default LayoutWrapper;
