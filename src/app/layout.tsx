import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rakesh Reddy Koukuntla | AI Engineer",
  description:
    "AI Engineer with 6+ years building production-grade LLM applications, agentic RAG systems, autonomous agents, and AI infrastructure across AWS, Azure, and GCP.",
  keywords: [
    "Rakesh Reddy Koukuntla",
    "AI Engineer",
    "LLM Applications",
    "Agentic RAG",
    "AI Infrastructure",
    "LLMOps",
    "Claude API",
    "OpenAI",
    "LangChain",
    "FastAPI",
    "Kubernetes",
    "AWS",
    "Wells Fargo",
  ],
  authors: [{ name: "Rakesh Reddy Koukuntla" }],
  openGraph: {
    title: "Rakesh Reddy Koukuntla | AI Engineer",
    description:
      "Building production-grade LLM applications, agentic RAG systems, and AI infrastructure at scale.",
    url: "https://rakeshkoukuntla.vercel.app",
    siteName: "Rakesh Reddy Koukuntla Portfolio",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakesh Reddy Koukuntla | AI Engineer",
    description: "Building production-grade LLM applications and AI infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rakesh Reddy Koukuntla",
              jobTitle: "AI Engineer",
              email: "koukuntlarakesh2@gmail.com",
              url: "https://rakeshkoukuntla.vercel.app",
              sameAs: [
                "https://linkedin.com/in/rakesh-koukuntla2",
              ],
              knowsAbout: [
                "LLM Applications",
                "Agentic RAG",
                "AI Infrastructure",
                "Claude API",
                "OpenAI",
                "LangChain",
                "FastAPI",
                "Kubernetes",
                "AWS",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full bg-[#030303] text-white">{children}</body>
    </html>
  );
}
