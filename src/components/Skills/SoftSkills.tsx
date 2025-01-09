import { useTranslations } from "next-intl";

import Chip from "@/components/Chip";
import Card from "@/components/Skills/Card";

export default function SoftSkills() {
  const t = useTranslations("Skills");

  return (
    <Card
      title={t("softSkills")}
      subtitle={t("softSkillsSubtitle")}
      className="lg:col-span-3"
    >
      <Chip label={t("effectiveCommunication")} />
      <Chip label={t("easyAdaptability")} />
      <Chip label={t("flexibility")} />
      <Chip label={t("proactiveProblemSolving")} />
      <Chip label={t("continuousLearning")} />
      <Chip label={t("agileMethodology")} />
      <Chip label={t("criticalThinking")} />
      <Chip label={t("organization")} />
      <Chip label={t("creative")} />
    </Card>
  );
}
