import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GetSeenGetResults | Get Seen. Get Recruited.",
  description:
    "GetSeenGetResults helps youth and high school athletes turn athletic ability into real college opportunities — training, film evaluation, athlete branding, and college recruiting guidance from former and current college athletes in Massachusetts, New Hampshire, and North Carolina.",
  keywords: [
    "college athletic recruiting",
    "athlete recruiting",
    "recruiting help for athletes",
    "college recruiting",
    "athlete development",
    "recruiting training",
  ],
  icons: {
    icon: "/gsgr-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-cream">
        <div className="w-full overflow-x-hidden">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
