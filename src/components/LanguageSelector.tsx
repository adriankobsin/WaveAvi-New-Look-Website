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

const STORAGE_KEY = "wave_lang";

// Set googtrans cookie on every relevant scope/domain so Google Translate
// picks it up on the next page load. This is the most reliable way to switch
// between languages (including switching from one non-English to another).
const setGoogTransCookie = (code: string) => {
  const value = code && code !== "en" ? `/en/${code}` : "";
  const host = window.location.hostname;
  // Build candidate domain scopes: exact host, host without leading dot,
  // and the registrable parent domain (e.g. ".example.com").
  const parts = host.split(".");
  const parentDomain = parts.length > 1 ? "." + parts.slice(-2).join(".") : host;
  const domains = ["", host, "." + host, parentDomain];
  const expires = value
    ? "expires=Fri, 31 Dec 9999 23:59:59 GMT;"
    : "expires=Thu, 01 Jan 1970 00:00:00 GMT;";
  const cookieVal = value || "deleted";
  for (const d of domains) {
    const domainPart = d ? `domain=${d};` : "";
    document.cookie = `googtrans=${cookieVal}; ${expires} path=/; ${domainPart}`;
  }
};

const getStoredLang = () => {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem(STORAGE_KEY) || "en";
};

// Ensure cookie matches stored preference on every load (before/while
// Google Translate initialises). This makes the choice persist across
// reloads and new sessions.
if (typeof window !== "undefined") {
  const saved = getStoredLang();
  setGoogTransCookie(saved);
}

const LanguageSelector = () => {
  const [current, setCurrent] = useState<string>(getStoredLang);

  // Keep cookie in sync if state ever changes without a reload.
  useEffect(() => {
    setGoogTransCookie(current);
  }, [current]);

  const handleSelect = (code: string) => {
    if (code === current) return;
    localStorage.setItem(STORAGE_KEY, code);
    setCurrent(code);
    setGoogTransCookie(code);
    // Reload to let Google Translate re-render the page in the chosen language.
    // This is the only reliable way to switch between two non-English languages.
    window.location.reload();
  };

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
      <DropdownMenuContent
        align="end"
        className="bg-background/95 backdrop-blur-xl border-border/50 max-h-[70vh] overflow-y-auto z-[200]"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
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
