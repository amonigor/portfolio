import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

type Props = {
  trigger: React.ReactNode;
  items: { icon?: React.ReactNode; text: string; value: string }[];
  value: string | undefined;
  onSelect: (value: string) => void;
};

export default function Dropdown({ trigger, items, value, onSelect }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div ref={ref} className="relative">
      <button
        className="glass group rounded-2xl p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`${
            !isOpen
              ? "opacity-50 group-hover:opacity-100 transition"
              : "opacity-100"
          }`}
        >
          {trigger}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 glass rounded-2xl mt-1 px-2 divide-y-2 divide-black/10 dark:divide-white/10 min-w-32">
          {items.map((item) => (
            <button
              key={item.value}
              className="flex items-center gap-1 py-2 w-full"
              onClick={() => handleSelect(item.value)}
            >
              {item.icon}
              <p className="text-base">{item.text}</p>
              {item.value === value && <Check size={16} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
