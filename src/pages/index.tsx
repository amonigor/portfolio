import type { GetStaticPropsContext } from "next";

import Topbar from "@/components/Topbar/Topbar";

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${context.locale}.json`)).default,
    },
  };
}

export default function Home() {
  return (
    <main className="container mx-auto relative">
      <Topbar />
    </main>
  );
}
