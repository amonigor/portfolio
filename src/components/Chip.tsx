import Image from "next/image";

type Props = {
  icon?: React.ReactNode;
  label: string;
};

export default function Chip({ icon, label }: Props) {
  return (
    <div className="flex items-center gap-1 rounded bg-gray-300 dark:bg-slate-800 py-1 px-2 hover:motion-rotate-in-6 cursor-pointer">
      {icon ? (
        <Image src={`/svg/${icon}.svg`} alt={label} width={16} height={16} />
      ) : null}
      <p className="text-sm font-semibold">{label}</p>
    </div>
  );
}
