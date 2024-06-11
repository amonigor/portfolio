import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import ThemeProvider from "@/providers/theme-provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen bg-background font-sans antialiased container">
          <Head>
            <title>Igor Amon</title>
          </Head>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
