import dynamic from "next/dynamic";

import LanguageToggle from "@/components/Topbar/LanguageToggle";
import Navbar from "@/components/Topbar/Navbar/Navbar";

const DarkModeToggle = dynamic(
  () => import("@/components/Topbar/DarkModeToggle"),
  { ssr: false }
);

export default function Topbar() {
  return (
    <div className="absolute motion-preset-slide-left motion-duration-1500 top-4 right-4 flex items-center gap-2">
      <Navbar />
      <LanguageToggle />
      <DarkModeToggle />
    </div>
  );
}
