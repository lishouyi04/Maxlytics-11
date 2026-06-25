import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maxlytics.io"),
  title: {
    default: "Maxlytics — Performance Marketing Agency in Hong Kong",
    template: "%s | Maxlytics",
  },
  description:
    "Full-funnel, ROAS-driven performance marketing in Hong Kong, powered by a 13M-profile first-party data platform. Google, Meta, TikTok and Baidu — measured to the last dollar.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Maxlytics",
    locale: "en_HK",
    url: "/",
    title: "Maxlytics — Performance Marketing Agency in Hong Kong",
    description:
      "Full-funnel, ROAS-driven performance marketing in Hong Kong, powered by a 13M-profile first-party data platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxlytics — Performance Marketing Agency in Hong Kong",
    description: "Full-funnel, ROAS-driven performance marketing in Hong Kong, measured to the last dollar.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <CTASection />
        <Footer />
      </body>
    </html>
  );
}
