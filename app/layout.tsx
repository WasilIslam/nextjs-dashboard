import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { appName, appDescription, appUrl, appAuthor } from "@/app/config";
import Providers from "@/components/Providers";
import LayoutWrapper from "@/components/LayoutWrapper";

const roboto_font = Lexend({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: appName,
    template: `%s - ${appName}`,
  },
  description: appDescription,
  keywords: [
    "template",
    "app",
    "nextjs",
    "react",
    "dashboard",
    "modern",
    "responsive",
    "contact",
  ],
  authors: [
    {
      name: appAuthor,
    },
  ],
  creator: appAuthor,
  publisher: appName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: appUrl,
    title: appName,
    description: appDescription,
    siteName: appName,
  },
  twitter: {
    card: "summary_large_image",
    title: appName,
    description: appDescription,
    creator: `@${appAuthor}`,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  alternates: {
    canonical: appUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : 'light-mode');
              document.documentElement.className = theme;
            `,
          }}
        />
      </head>
      <body className={`${roboto_font.variable} antialiased`}>
        <Providers>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
