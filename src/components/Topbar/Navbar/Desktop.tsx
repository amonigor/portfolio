import Link from "next/link";

type Props = {
  navItems: {
    name: string;
    href: string;
    icon: React.ReactNode;
  }[];
};

export default function Desktop({ navItems }: Props) {
  return (
    <nav className="glass py-2 px-1 rounded-2xl hidden md:block">
      <ul className="flex divide-x-2 divide-black/10 dark:divide-white/20">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="opacity-70 dark:opacity-50 hover:opacity-100 transition px-2"
          >
            <Link href={item.href} className="flex items-center gap-2">
              {item.icon}
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
