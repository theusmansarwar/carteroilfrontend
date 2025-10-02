import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const title = "Carter Oil";
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde impedit saepe mollitia porro odio!";

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
      <body className={poppins.variable}>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          pauseOnHover={false}
          newestOnTop
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
