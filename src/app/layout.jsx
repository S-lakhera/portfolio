import { Inter } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Shashank Lakhera — Designer & Creative Technologist",
  description:
    "Awwwards-level designer portfolio crafting precision digital experiences, architectural typography, and interactive systems.",
  keywords: [
    "Shashank Lakhera",
    "Creative Technologist",
    "Digital Designer",
    "GSAP Developer",
    "Next.js Portfolio",
    "Interaction Design",
  ],
  authors: [{ name: "Shashank Lakhera" }],
  creator: "Shashank Lakhera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shashanklakhera.design",
    title: "Shashank Lakhera — Designer & Creative Technologist",
    description:
      "Awwwards-level designer portfolio crafting precision digital experiences, architectural typography, and interactive systems.",
    siteName: "Shashank Lakhera Portfolio",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased bg-[#090A0C]`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#090A0C] text-[#EFEFEF]">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
