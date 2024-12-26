import { ChevronDown, Mouse } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-[95vh] flex flex-col items-center justify-center">
      <p className="text-sm sm:text-lg md:text-xl text-center font-[poppins] pb-2 sm:pb-4 md:pb-6 opacity-70">
        {t("welcome")}
      </p>
      <h1 className="text-5xl sm:text-7xl md:text-8xl text-center font-bold font-[poppins] pb-4 sm:pb-7 md:pb-8">
        {t("introduction")}
      </h1>
      <p className="text-sm sm:text-lg md:text-xl text-center font-[poppins] opacity-70">
        {t("description")}
      </p>

      <div className="flex flex-col items-center justify-center pt-16">
        <Mouse className="motion-preset-oscillate motion-delay-100" />
        <ChevronDown className="motion-preset-oscillate" />
      </div>
    </section>
  );
}
