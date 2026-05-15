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

const triggerTranslate = (code: string) => {
  // Try the Google Translate <select> first
  const select = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
  if (select) {
    select.value = code === "en" ? "" : code;
    select.dispatchEvent(new Event("change"));
    return true;
  }
  return false;
};

const LanguageSelector = () => {
  const [current, setCurrent] = useState<string>(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem(STORAGE_KEY) || "en";
  });

  // Apply saved language once Google Translate widget is ready
  useEffect(() => {
    if (current === "en") return;
    let attempts = 0;
    const id = window.setInterval(() => {
      attempts += 1;
      if (triggerTranslate(current) || attempts > 40) {
        window.clearInterval(id);
      }
    }, 250);
    return () => window.clearInterval(id);
  }, [current]);

  const handleSelect = (code: string) => {
    localStorage.setItem(STORAGE_KEY, code);
    setCurrent(code);
    if (code === "en") {
      // Restore: clearing requires a reload because Google Translate
      // doesn't restore original DOM cleanly.
      window.location.reload();
      return;
    }
    if (!triggerTranslate(code)) {
      // Widget not ready — reload, the effect will pick it up
      window.location.reload();
    }
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
