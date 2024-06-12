import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Languages, SunMoon, SlidersHorizontal } from "lucide-react";

import { useTheme } from "next-themes";

export const Options = () => {
  const { theme, setTheme } = useTheme();

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
            <p className="text-sm text-foreground/60">Theme</p>
          </div>
          <Tabs defaultValue={theme} onValueChange={(value) => setTheme(value)}>
            <TabsList>
              <TabsTrigger value="light">Light</TabsTrigger>
              <TabsTrigger value="system">Auto</TabsTrigger>
              <TabsTrigger value="dark">Dark</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-col gap-2 pt-4">
          <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-foreground/60" />
            <p className="text-sm text-foreground/60">Language</p>
          </div>
          <Tabs defaultValue={"pt-BR"} onValueChange={() => {}}>
            <TabsList>
              <TabsTrigger value="pt-BR">pt-BR</TabsTrigger>
              <TabsTrigger value="en-US">en-US</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </PopoverContent>
    </Popover>
  );
};
