import { useState } from "react";
import { Languages } from "lucide-react";
import { useRouter } from "next/router";
import Image from "next/image";

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
      ariaLabel="Select language"
      trigger={<Languages size={24} />}
      value={locale}
      items={[
        {
          icon: (
            <Image
              src="/images/eua.png"
              alt="United States of America"
              width={16}
              height={16}
            />
          ),
          text: "English",
          value: "en-US",
        },
        {
          icon: (
            <Image
              src="/images/brasil.png"
              alt="Brasil"
              width={16}
              height={16}
            />
          ),
          text: "Português",
          value: "pt-BR",
        },
      ]}
      onSelect={(value) => handleLocaleChange(value)}
    />
  );
}
