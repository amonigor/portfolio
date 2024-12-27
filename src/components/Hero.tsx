import { ChevronDown, Mouse } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-[95vh] flex flex-col items-center justify-center">
      <p className="text-sm sm:text-lg md:text-xl text-center font-[poppins] pb-2 sm:pb-4 md:pb-6 opacity-70">
        {t("welcome")}
      </p>
      <div className="flex flex-wrap text-4xl sm:text-7xl md:text-8xl pb-4 sm:pb-7 md:pb-8">
        <h1 className="text-center font-bold font-[poppins]">
          {t("introduction")}
        </h1>
        <div className="motion-preset-seesaw-lg motion-rotate-loop-12 motion-preset-float -motion-translate-y-loop-[5%]">
          👋
        </div>
      </div>
      <p className="text-sm sm:text-lg md:text-xl text-center font-[poppins] opacity-70">
        {t("description")}
      </p>

      <div className="flex flex-col items-center justify-center pt-16">
        <Mouse className="motion-preset-oscillate motion-delay-100 motion-duration-1500" />
        <ChevronDown className="motion-preset-oscillate motion-duration-1500" />
      </div>
    </section>
  );
}
