import { Moon, Sun, SunMoon } from "lucide-react";

import Dropdown from "@/components/Topbar/Dropdown";
import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

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
        { icon: <Moon size={16} />, text: "Dark", value: "dark" },
        { icon: <Sun size={16} />, text: "Light", value: "light" },
        { icon: <SunMoon size={16} />, text: "System", value: "system" },
      ]}
      value={theme}
      onSelect={(value) => setTheme(value)}
    />
  );
}
