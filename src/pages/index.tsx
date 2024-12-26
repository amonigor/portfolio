import type { GetStaticPropsContext } from "next";
import Head from "next/head";

import Topbar from "@/components/Topbar/Topbar";
import { useTranslations } from "next-intl";

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
      <main className="container mx-auto relative">
        <Topbar />
      </main>
    </>
  );
}
