import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
  title: "CarooFix - Premium Car Valuation & Instant Buying in UAE",
  description: "Sell your car in UAE with CarooFix. Get instant, accurate valuations and fast, secure transactions. Premium car buying service with white-glove experience.",
  keywords: "car valuation UAE, sell car Dubai, car buying service, instant car valuation, UAE car market",
  authors: [{ name: "CarooFix" }],
  creator: "CarooFix",
  publisher: "CarooFix",
  openGraph: {
    title: "CarooFix - Premium Car Valuation & Instant Buying in UAE",
    description: "Sell your car in UAE with CarooFix. Get instant, accurate valuations and fast, secure transactions.",
    url: "https://caroofix.com",
    siteName: "CarooFix",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CarooFix - Premium Car Valuation & Instant Buying in UAE",
    description: "Sell your car in UAE with CarooFix. Get instant, accurate valuations and fast, secure transactions.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
