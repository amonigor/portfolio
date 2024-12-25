import dynamic from "next/dynamic";

const DarkModeToggle = dynamic(
  () => import("@/components/Topbar/DarkModeToggle"),
  { ssr: false }
);

export default function Topbar() {
  return (
    <div className="absolute top-4 right-4">
      <DarkModeToggle />
    </div>
  );
}
