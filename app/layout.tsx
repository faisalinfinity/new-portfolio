import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import DeviceOS from "./components/device-os";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Faisal Mujtaba",
    template: "%s | faisalmujtaba.com",
  },
  description:
    "Faisal Mujtaba — Lead Frontend & Full-Stack Developer (Next.js, React). Building screenplay.ink. Expert in real-time collaboration, Tiptap, WebSockets, performance optimization, and scalable MERN architecture.",
  keywords: [
    "Faisal Mujtaba",
    "Full-Stack Developer",
    "Frontend Engineer",
    "Next.js",
    "React",
    "Zustand",
    "Tiptap",
    "WebSockets",
    "MERN",
    "screenplay.ink",
    "portfolio",
    "developer",
    "performance optimization",
  ],
  authors: [
    {
      name: "Faisal Mujtaba",
      url: "https://faisalmujtaba.com",
      // If you want contact shown in some frontends:
      //   email: "hello@faisalmujtaba.com",
    },
  ],
  metadataBase: new URL("https://faisalmujtaba.com"),
  openGraph: {
    title: "Faisal Mujtaba — Full-Stack Web Developer",
    description:
      "Lead Frontend & Full-Stack Developer building screenplay.ink. Specializes in Next.js, real-time collaboration, Tiptap editor integrations, and high-performance web applications.",
    url: "https://faisalmujtaba.com",
    siteName: "faisalmujtaba.com",
    images: [
      {
        url: "https://faisalmujtaba.com/og.png",
        width: 1200,
        height: 630,
        alt: "Faisal Mujtaba — Full-Stack Web Developer",
      },
      {
        url: "https://faisalmujtaba.com/og-card.png",
        width: 1920,
        height: 1080,
        alt: "Faisal Mujtaba — Portfolio & Projects",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    title: "Faisal Mujtaba",
    description:
      "Lead Frontend & Full-Stack Developer — building screenplay.ink. Next.js, real-time features, Tiptap, WebSockets.",
    card: "summary_large_image",
    // your X handle (if you want it shown)
    creator: "@faisal_mujtaba_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // favicon / shortcut
  icons: {
    shortcut: "/favicon.png",
  },
  // Optional: preferred canonical URL for pages that don't specify one
  // canonical: "https://faisalmujtaba.com",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />

      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <header className="...">
          <DeviceOS />
        </header>
        {children}
      </body>
    </html>
  );
}
