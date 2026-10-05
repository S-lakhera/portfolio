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
  title: "Shashank Lakhera — Full-Stack Developer | MERN Stack Specialist",
  description:
    "Full-Stack Developer and Computer Science graduate specializing in the MERN stack. Experienced in building scalable web applications using React.js, Node.js, Express.js, and MongoDB, with expertise in RESTful APIs, authentication systems, payment integration, and responsive frontend development.",
  keywords: [
    "Shashank Lakhera",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.io",
    "Redux Toolkit",
    "TanStack Query",
    "Docker",
    "Software Engineer",
    "Bhopal",
  ],
  authors: [{ name: "Shashank Lakhera" }],
  creator: "Shashank Lakhera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/S-lakhera",
    title: "Shashank Lakhera — Full-Stack Developer | MERN Stack Specialist",
    description:
      "Full-Stack Developer and Computer Science graduate specializing in building scalable web applications using React.js, Node.js, Express.js, and MongoDB.",
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
