import { Menu } from "lucide-react";
import Link from "next/link";

import useOutsideClick from "@/hooks/useOutsideClick";

type Props = {
  navItems: {
    name: string;
    href: string;
    icon: React.ReactNode;
  }[];
};

export default function Mobile({ navItems }: Props) {
  const {
    ref,
    isInside: isOpen,
    setIsInside: setIsOpen,
  } = useOutsideClick(false);

  return (
    <div ref={ref} className="relative md:hidden">
      <button
        className="glass group rounded-2xl p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open navigation menu"
      >
        <span
          className={`${
            !isOpen
              ? "opacity-50 group-hover:opacity-100 transition"
              : "opacity-100"
          }`}
        >
          <Menu size={24} />
        </span>
      </button>
      {isOpen && (
        <div className="absolute motion-preset-expand motion-duration-150 right-0 glass rounded-2xl mt-1 px-2">
          <ul className="divide-y-2 divide-black/10 dark:divide-white/10">
            {navItems.map((item) => (
              <li key={item.href} className="py-2">
                <Link href={item.href} className="flex items-center gap-2">
                  {item.icon}
                  <p className="text-sm">{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
