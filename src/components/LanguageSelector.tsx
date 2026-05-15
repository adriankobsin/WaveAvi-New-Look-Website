import { useEffect, useState } from "react";
import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "nl", label: "Nederlands" },
  { code: "pt", label: "Português" },
  { code: "ru", label: "Русский" },
  { code: "zh-CN", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "ar", label: "العربية" },
  { code: "hi", label: "हिन्दी" },
  { code: "th", label: "ไทย" },
];

const getCurrentLang = (): string => {
  const match = document.cookie.match(/googtrans=\/[a-zA-Z-]+\/([a-zA-Z-]+)/);
  return match?.[1] ?? "en";
};

const setGoogleLang = (code: string) => {
  const host = window.location.hostname;
  const domain = host.split(".").slice(-2).join(".");
  const value = `/en/${code}`;
  const expires = "; expires=" + new Date(Date.now() + 31536000000).toUTCString();
  // Clear previous cookies on all domain scopes
  ["", `; domain=${host}`, `; domain=.${host}`, `; domain=.${domain}`].forEach((d) => {
    document.cookie = `googtrans=;${d}; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  });
  document.cookie = `googtrans=${value}; path=/${expires}`;
  document.cookie = `googtrans=${value}; domain=.${host}; path=/${expires}`;
  document.cookie = `googtrans=${value}; domain=.${domain}; path=/${expires}`;
  window.location.reload();
};

const LanguageSelector = () => {
  const [current, setCurrent] = useState("en");

  useEffect(() => {
    setCurrent(getCurrentLang());
  }, []);

  const active = languages.find((l) => l.code === current) ?? languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center gap-2 text-xs font-body font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 notranslate"
        translate="no"
        aria-label="Select language"
      >
        <Globe size={14} />
        <span>{active.code.toUpperCase().split("-")[0]}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-xl border-border/50 max-h-[70vh] overflow-y-auto">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setGoogleLang(lang.code)}
            className="notranslate cursor-pointer flex items-center justify-between gap-4"
            translate="no"
          >
            <span>{lang.label}</span>
            {lang.code === current && <Check size={14} className="opacity-70" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
