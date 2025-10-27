import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ToastContainer } from "react-toastify";
import ViewCounter from "@/components/ViewCounter/ViewCounter";

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
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digital Aura",
              url: "https://carteroilusa.com",
              logo: "https://carteroilusa.com/favicon.svg",
              // sameAs: [
              //   "https://linkedin.com/company/thedigitalaura",
              //   "https://youtube.com/@DigitalAura-h2o",
              //   "https://facebook.com/share/1CdEhnbb42",
              //   "https://instagram.com/digitalaura8",
              // ],
            }),
          }}
        />
      </head>
      <body className={poppins.variable}>
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
