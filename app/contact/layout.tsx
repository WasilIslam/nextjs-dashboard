import type { Metadata } from "next";
import { appName, appDescription } from "@/app/config";

export const metadata: Metadata = {
  title: `Contact Us - ${appName}`,
  description:
    "Get in touch with us. Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  keywords: "contact, support, help, get in touch, customer service",
  openGraph: {
    title: `Contact Us - ${appName}`,
    description:
      "Get in touch with us. Have questions? We'd love to hear from you.",
    url: "https://template-app.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Contact Us - ${appName}`,
    description:
      "Get in touch with us. Have questions? We'd love to hear from you.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
