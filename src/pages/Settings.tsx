import React from "react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/components/theme-provider";

export const Settings = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t("settings")}</h1>
        <p className="text-muted-foreground">{t("languageDesc")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dil Ayarları */}
        <div className="bg-card border rounded-lg p-6 space-y-4 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="language" className="text-base font-semibold">
              {t("language")}
            </Label>
            <Select
              defaultValue={i18n.language}
              onValueChange={handleLanguageChange}
            >
              <SelectTrigger id="language" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tr">{t("turkish")}</SelectItem>
                <SelectItem value="en">{t("english")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tema Ayarları */}
        <div className="bg-card border rounded-lg p-6 space-y-4 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="theme" className="text-base font-semibold">
              {t("theme")}
            </Label>
            <Select
              defaultValue={theme}
              onValueChange={(value) => setTheme(value as any)}
            >
              <SelectTrigger id="theme" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">{t("light")}</SelectItem>
                <SelectItem value="dark">{t("dark")}</SelectItem>
                <SelectItem value="system">{t("system")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
