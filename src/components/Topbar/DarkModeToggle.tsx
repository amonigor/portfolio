import { Monitor, Moon, Sun, SunMoon } from "lucide-react";

import Dropdown from "@/components/Topbar/Dropdown";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("DarkMode");

  return (
    <Dropdown
      ariaLabel="Select color schema"
      trigger={
        theme === "dark" ? (
          <Moon size={24} />
        ) : theme === "light" ? (
          <Sun size={24} />
        ) : (
          <SunMoon size={24} />
        )
      }
      items={[
        { icon: <Sun size={16} />, text: t("light"), value: "light" },
        { icon: <Moon size={16} />, text: t("dark"), value: "dark" },
        { icon: <Monitor size={16} />, text: t("system"), value: "system" },
      ]}
      value={theme}
      onSelect={(value) => setTheme(value)}
    />
  );
}
