import dynamic from "next/dynamic";

import LanguageToggle from "@/components/Topbar/LanguageToggle";
import Navbar from "@/components/Topbar/Navbar/Navbar";

const DarkModeToggle = dynamic(
  () => import("@/components/Topbar/DarkModeToggle"),
  { ssr: false }
);

export default function Topbar() {
  return (
    <header className="fixed w-full z-50">
      <div className="container mx-auto p-4 flex items-center justify-end gap-2">
        <Navbar />
        <LanguageToggle />
        <DarkModeToggle />
      </div>
    </header>
  );
}
