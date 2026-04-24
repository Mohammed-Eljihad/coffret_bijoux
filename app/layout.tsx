import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/ui/PageLoader";
import ScrollProgress from "@/components/ui/ScrollProgress";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "BijouxÉclat — L'élégance qui protège vos trésors",
  description:
    "Coffrets à bijoux de luxe, conçus pour préserver vos trésors avec raffinement. Design exclusif, matériaux premium. Livraison offerte en France.",
  openGraph: {
    title: "BijouxÉclat — Coffrets à Bijoux Premium",
    description: "L'élégance qui protège vos trésors.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col grain"
        suppressHydrationWarning
      >
        <PageLoader />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
