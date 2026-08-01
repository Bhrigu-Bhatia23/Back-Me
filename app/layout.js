import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Sora } from "next/font/google";
import { Nabla } from "next/font/google";
import { Michroma } from "next/font/google";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "react-hot-toast";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BackMe",
  description: "BackMe is a platform that empowers creators to monetize their content and connect with their audience. Join us to turn your passion into a sustainable income.",
};

const nabla = Nabla({
  subsets: ["latin"],
  variable: "--font-nabla",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable}  ${nabla.variable} ${michroma.variable} h-full antialiased`}
    >

      <body className="min-h-screen">
        <SessionWrapper>
          <AnimatedBackground />

          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
              {children}
              <Toaster position="top-right" />
            </main>

            <Footer />
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}

