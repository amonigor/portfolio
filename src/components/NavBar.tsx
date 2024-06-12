import { Button } from "@/components/ui/button";
import { Options } from "@/components/Options";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Link from "next/link";

import { useTranslation } from "next-i18next";

export const NavBar = () => {
  const { t } = useTranslation();

  const navBarItems = [
    {
      name: t("nav.about"),
      href: "/",
    },
    {
      name: t("nav.skills"),
      href: "/",
    },
    {
      name: t("nav.experience"),
      href: "/",
    },
    {
      name: t("nav.contact"),
      href: "/",
    },
  ];

  return (
    <header className="sticky top-0 w-full border-b border-border shadow-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="md:container py-2 md:py-4 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/" className="font-bold">
            amonigor.dev
          </Link>

          {navBarItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              {name}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="flex md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <p className="font-bold text-xl pb-8">amonigor.dev</p>
            <nav className="flex flex-col gap-4">
              {navBarItems.map(({ name, href }) => (
                <SheetClose key={name} asChild>
                  <Link
                    href={href}
                    className="text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {name}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <p className="font-bold flex md:hidden">amonigor.dev</p>

        <Options />
      </div>
    </header>
  );
};
