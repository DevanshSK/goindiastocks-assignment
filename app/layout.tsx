import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go India Stocks Assignment",
  description: "This assignment was completed by Devansh Singh Kushwah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full">
          <div className="hidden lg:flex h-full w-56 flex-col fixed inset-y-0 z-50">
            <Sidebar isSheet={false} />
          </div>
          <main className="lg:pl-56 pt-[60px] lg:pt-0 h-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
