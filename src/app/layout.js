import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ToastContainer } from "react-toastify";
import ViewCounter from "@/components/ViewCounter/ViewCounter";
import Script from "next/script"; // ✅ Add this import

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const title = "Carter Oil | Trusted Oilfield and Industrial Lubrication Solutions";
const description =
  "Carter Oil delivers trusted lubricants and oilfield solutions worldwide, backed by 125 years of expertise, innovation, and a commitment to safety.";

const url = "https://carteroilusa.com";
const image = "/favicon.svg";

export const metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    url,
    type: "article",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  // ✅ Add Google Search Console verification
  other: {
    "google-site-verification": "d3ZpHGSOWYYfirQNoVhab8jghx9xwHZccCBejV0fURQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preloaded Images */}
        <link rel="preload" as="image" href="/home-hero1.webp" />
        <link rel="preload" as="image" href="/home-hero2.webp" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Carter Oil",
              url: "https://carteroilusa.com",
              logo: "https://carteroilusa.com/favicon.svg",
            }),
          }}
        />
      </head>
      <body className={poppins.variable}>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-72FE2JFDL2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-72FE2JFDL2');
          `}
        </Script>

        {/* Toasts, Layout, and Components */}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          pauseOnHover={false}
          newestOnTop
        />
        <ViewCounter />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
