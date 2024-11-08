import { Providers } from "@/components/Providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={cn("min-h-screen antialiased")}>
        <Providers>
          <main className="text-foreground bg-background dark h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
