import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Languages, SunMoon, SlidersHorizontal } from "lucide-react";

import { useTheme } from "next-themes";
import { useTranslation, i18n } from "next-i18next";
import Link from "next/link";

export const Options = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" aria-label="Settings" title="Settings">
          <SlidersHorizontal className="w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-max" collisionPadding={8}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <SunMoon className="w-4 h-4 text-foreground/60" />
            <p className="text-sm text-foreground/60">{t("theme")}</p>
          </div>
          <Tabs defaultValue={theme} onValueChange={(value) => setTheme(value)}>
            <TabsList>
              <TabsTrigger value="light">{t("themes.light")}</TabsTrigger>
              <TabsTrigger value="system">{t("themes.system")}</TabsTrigger>
              <TabsTrigger value="dark">{t("themes.dark")}</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-col gap-2 pt-4">
          <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-foreground/60" />
            <p className="text-sm text-foreground/60">{t("language")}</p>
          </div>
          <Tabs defaultValue={i18n?.language}>
            <TabsList>
              <TabsTrigger value="pt" asChild>
                <Link href="/" locale="pt">
                  Português (BR)
                </Link>
              </TabsTrigger>
              <TabsTrigger value="en">
                <Link href="/" locale="en">
                  English (US)
                </Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </PopoverContent>
    </Popover>
  );
};
