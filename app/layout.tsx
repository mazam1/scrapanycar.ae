import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import OrganizationSchema from "../components/seo/organization-schema";
import { Toaster } from "sonner";
// ThemeProvider removed to enforce light theme only

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scrap Your Car - Premium Car Valuation & Instant Buying in UAE",
  description: "Sell your car in UAE with Scrap Your Car. Get instant, accurate valuations and fast, secure transactions. Premium car buying service with white-glove experience.",
  keywords: "car valuation UAE, sell car Dubai, scrap car UAE, instant car valuation, UAE car market",
  authors: [{ name: "Scrap Your Car" }],
  creator: "Scrap Your Car",
  publisher: "Scrap Your Car",
  openGraph: {
    title: "Scrap Your Car - Premium Car Valuation & Instant Buying in UAE",
    description: "Sell your car in UAE with Scrap Your Car. Get instant, accurate valuations and fast, secure transactions.",
    url: "https://scrapanycar.ae",
    siteName: "Scrap Your Car",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scrap Your Car - Premium Car Valuation & Instant Buying in UAE",
    description: "Sell your car in UAE with Scrap Your Car. Get instant, accurate valuations and fast, secure transactions.",
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
  alternates: {
    canonical: "https://scrapanycar.ae"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <OrganizationSchema />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased w-full overflow-x-hidden`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
