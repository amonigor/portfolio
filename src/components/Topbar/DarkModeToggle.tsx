import { Moon, Sun, SunMoon } from "lucide-react";

import Dropdown from "@/components/Topbar/Dropdown";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("Topbar");

  return (
    <Dropdown
      trigger={
        theme === "dark" ? (
          <Moon size={16} />
        ) : theme === "light" ? (
          <Sun size={16} />
        ) : (
          <SunMoon size={16} />
        )
      }
      items={[
        { icon: <Sun size={16} />, text: t("light"), value: "light" },
        { icon: <Moon size={16} />, text: t("dark"), value: "dark" },
        { icon: <SunMoon size={16} />, text: t("system"), value: "system" },
      ]}
      value={theme}
      onSelect={(value) => setTheme(value)}
    />
  );
}
