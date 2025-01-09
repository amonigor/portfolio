import { useTranslations } from "next-intl";

import Chip from "@/components/Chip";
import Card from "@/components/Skills/Card";

export default function WorkedWithSkills() {
  const t = useTranslations("Skills");

  return (
    <Card title={t("worked")} subtitle={t("workedSubtitle")}>
      <Chip icon="react" label="React" />
      <Chip icon="nuxt" label="Nuxt" />
      <Chip icon="linux" label="Linux" />
      <Chip icon="vuetify" label="Vuetify" />
      <Chip icon="bootstrap" label="Bootstrap" />
      <Chip icon="php" label="PHP" />
      <Chip icon="laravel" label="Laravel" />
      <Chip icon="mysql" label="MySQL" />
      <Chip icon="wordpress" label="WordPress" />
    </Card>
  );
}
