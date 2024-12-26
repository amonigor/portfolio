import { useState } from "react";
import { Languages } from "lucide-react";
import { useRouter } from "next/router";

import Dropdown from "@/components/Topbar/Dropdown";

export default function LanguageToggle() {
  const router = useRouter();
  const [locale, setLocale] = useState(
    ["en-US", "pt-BR"].includes(router.locale as string)
      ? router.locale
      : "en-US"
  );

  const handleLocaleChange = (value: string) => {
    router.push(router.asPath, router.asPath, { locale: value });
    setLocale(value);
  };

  return (
    <Dropdown
      trigger={<Languages size={24} />}
      value={locale}
      items={[
        { text: "English", value: "en-US" },
        { text: "Português", value: "pt-BR" },
      ]}
      onSelect={(value) => handleLocaleChange(value)}
    />
  );
}
