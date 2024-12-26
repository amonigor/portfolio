import { User } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutMe() {
  const t = useTranslations();

  return (
    <section id="aboutme" className="glass p-8 md:p-16 rounded-2xl">
      <div className="flex items-center pb-6 gap-2">
        <User size={24} />
        <h2 className="text-2xl font-semibold font-[poppins]">
          {t("Navbar.aboutMe")}
        </h2>
      </div>
      <div className="flex flex-wrap-reverse md:flex-nowrap gap-6 items-center">
        <div className="w-full">
          <p className="text-base pb-4">{t("AboutMe.firstParagraph")}</p>
          <p className="text-base pb-4">{t("AboutMe.secondParagraph")}</p>
          <p className="text-base">{t("AboutMe.thirdParagraph")}</p>
        </div>
        <Image
          src="/images/pic.jpg"
          alt="It's a me!"
          className="rounded-full border-4 border-black/10 dark:border-white/10 mx-auto"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
}
