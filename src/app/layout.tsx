import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { kanit, inter } from "./ui/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from '@/data/siteDetails';
import "./globals.css";
import DisableInspect from '@/components/DisableInspect';

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  keywords: siteDetails.metadata.keywords, 
  authors: [
    { name: siteDetails.authorName, url: siteDetails.authorUrl }
  ],
  creator: siteDetails.authorName,
  publisher: siteDetails.siteName,
  metadataBase: new URL(siteDetails.siteUrl),
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    siteName: siteDetails.siteName,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/hero-mockup.webp'],
    site: siteDetails.twitterHandle, // e.g. '@yourhandle'
    creator: siteDetails.twitterHandle,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/apple-touch-icon.svg',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: siteDetails.siteUrl,
    languages: {
      'th-TH': `${siteDetails.siteUrl}/th`,
      'en-US': `${siteDetails.siteUrl}/en`,
    },
  },
};

export const viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <DisableInspect />
      </head>
      <body
        className={`${inter.className} ${kanit.className} antialiased`}
      >
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <SpeedInsights />

        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
