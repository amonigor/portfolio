import { Check } from "lucide-react";

import useOutsideClick from "@/hooks/useOutsideClick";

type Props = {
  trigger: React.ReactNode;
  items: { icon?: React.ReactNode; text: string; value: string }[];
  value: string | undefined;
  onSelect: (value: string) => void;
};

export default function Dropdown({ trigger, items, value, onSelect }: Props) {
  const {
    ref,
    isInside: isOpen,
    setIsInside: setIsOpen,
  } = useOutsideClick(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

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
        <div className="absolute motion-preset-expand motion-duration-150 right-0 glass rounded-2xl mt-1 px-2 divide-y-2 divide-black/10 dark:divide-white/10 min-w-32">
          {items.map((item) => (
            <button
              key={item.value}
              className="flex items-center gap-1 py-2 w-full"
              onClick={() => handleSelect(item.value)}
            >
              {item.icon}
              <p className="text-sm">{item.text}</p>
              {item.value === value && <Check size={16} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
