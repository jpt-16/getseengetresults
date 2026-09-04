import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";
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
  title: "GetSeenGetResults | Get Noticed. Get Recruited.",
  description:
    "Train with former D1 football and wrestling athletes. Real film breakdowns, real workouts, and real exposure to college coaches for youth and high school athletes in Massachusetts, New Hampshire, and North Carolina.",
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
        {children}
      </body>
    </html>
  );
}
