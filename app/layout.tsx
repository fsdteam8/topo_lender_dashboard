import AuthProvider from "@/components/Providers/AuthProvider";
import QueryProvider from "@/components/Providers/query-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type React from "react";
import { Toaster } from "sonner";
import "./globals.css";

export const avenirBold = localFont({
  src: "./fonts/avenir/avenir-arabic-black.otf",
  variable: "--font-avenir",
  weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
  display: "swap",
});
export const avenirNormal = localFont({
  src: "./fonts/avenir/Avenir Regular.ttf",
  variable: "--font-avenir",
  weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dress Rental Dashboard",
  description: "A dashboard for managing dress rentals",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.className, "font-light")}>
      <body>
        <Toaster position="bottom-right" richColors closeButton />
        <AuthProvider>
          <QueryProvider>{children}</QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
