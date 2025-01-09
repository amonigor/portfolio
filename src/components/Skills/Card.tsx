type Props = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Card({ title, subtitle, children, className }: Props) {
  return (
    <div className={`glass rounded-2xl w-full p-4 ${className}`}>
      <p className="font-semibold font-[poppins]">{title}</p>
      <p className="font-light text-xs opacity-70 dark:opacity-50 pb-4">
        {subtitle}
      </p>

      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}
