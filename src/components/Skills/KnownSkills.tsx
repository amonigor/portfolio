import { useTranslations } from "next-intl";

import Chip from "@/components/Chip";
import Card from "@/components/Skills/Card";

export default function KnownSkills() {
  const t = useTranslations("Skills");

  return (
    <Card title={t("known")} subtitle={t("knownSubtitle")}>
      <Chip icon="nextjs" label="Next.js" />
      <Chip icon="react" label="React Native" />
      <Chip icon="flutter" label="Flutter" />
      <Chip icon="nestjs" label="NestJS" />
      <Chip icon="prisma" label="Prisma" />
      <Chip icon="postgresql" label="PostgreSQL" />
      <Chip icon="supabase" label="Supabase" />
    </Card>
  );
}
