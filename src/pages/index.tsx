import type { GetStaticPropsContext } from "next";
import Head from "next/head";

import { useTranslations } from "next-intl";

import Topbar from "@/components/Topbar/Topbar";
import Hero from "@/components/Hero";

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${context.locale}.json`)).default,
    },
  };
}

export default function Home() {
  const t = useTranslations("Head");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <Topbar />
      <main className="container mx-auto px-4 md:py-80 py-40">
        <Hero />
      </main>
    </>
  );
}
