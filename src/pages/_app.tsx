import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

import ThemeProvider from "@/providers/theme-provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Head>
          <title>Igor Amon</title>
        </Head>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
