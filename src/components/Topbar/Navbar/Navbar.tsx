import { useTranslations } from "next-intl";

import Desktop from "@/components/Topbar/Navbar/Desktop";
import Mobile from "@/components/Topbar/Navbar/Mobile";
import { MessageSquare, Puzzle, Terminal, User } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("Navbar");

  const navItems = [
    {
      name: t("aboutMe"),
      href: "#aboutme",
      icon: <User size={16} />,
    },
    {
      name: t("skills"),
      href: "#skills",
      icon: <Terminal size={16} />,
    },
    {
      name: t("experience"),
      href: "#experience",
      icon: <Puzzle size={16} />,
    },
    {
      name: t("contact"),
      href: "#contact",
      icon: <MessageSquare size={16} />,
    },
  ];

  return (
    <>
      <Desktop navItems={navItems} />
      <Mobile navItems={navItems} />
    </>
  );
}
