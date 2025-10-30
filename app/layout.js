import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "BitlINKS - Your trusted URL shortener",
  description: "bitlinks helps you shorten your urls easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
          <script src="https://cdn.lordicon.com/lordicon.js"></script>
          <Navbar />
        {children}
          <Footer />
      </body>
    </html>
  );
}
