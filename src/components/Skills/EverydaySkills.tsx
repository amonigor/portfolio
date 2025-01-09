import { useTranslations } from "next-intl";

import Chip from "@/components/Chip";
import Card from "@/components/Skills/Card";

export default function EverydaySkills() {
  const t = useTranslations("Skills");

  return (
    <Card title={t("everyday")} subtitle={t("everydaySubtitle")}>
      <Chip icon="vue" label="Vue.JS" />
      <Chip icon="vueuse" label="VueUse" />
      <Chip icon="tailwindcss" label="Tailwind CSS" />
      <Chip icon="typescript" label="TypeScript" />
      <Chip icon="javascript" label="JavaScript" />
      <Chip icon="reactquery" label="TanStack Query" />
      <Chip icon="git" label="Git" />
      <Chip icon="pnpm" label="pnpm" />
    </Card>
  );
}
