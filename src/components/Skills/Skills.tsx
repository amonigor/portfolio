import { Terminal } from "lucide-react";
import { useTranslations } from "next-intl";

import EverydaySkills from "@/components/Skills/EverydaySkills";
import WorkedWithSkills from "@/components/Skills/WorkedWithSkills";
import KnownSkills from "@/components/Skills/KnownSkills";
import SoftSkills from "@/components/Skills/SoftSkills";

export default function Skills() {
  const t = useTranslations();

  return (
    <section id="skills" className="pt-32">
      <div className="flex items-center justify-center pb-6 gap-2">
        <Terminal size={24} />
        <h2 className="text-2xl font-semibold font-[poppins]">
          {t("Navbar.skills")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <EverydaySkills />
        <WorkedWithSkills />
        <KnownSkills />
        <SoftSkills />
      </div>
    </section>
  );
}
