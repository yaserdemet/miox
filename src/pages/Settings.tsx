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

// Eğer label komponenti yoksa basit bir span kullanacağız, ama shadcn eklemiş olabiliriz.
// Şimdilik standart label kullanıyorum.

export const Settings = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t("settings")}</h1>
        <p className="text-muted-foreground">{t("languageDesc")}</p>
      </div>

      <div className="bg-card border rounded-lg p-6 max-w-md space-y-4">
        <div className="space-y-2">
          <Label htmlFor="language" className="text-base font-semibold">
            {t("language")}
          </Label>
          <Select
            defaultValue={i18n.language}
            onValueChange={handleLanguageChange}
          >
            <SelectTrigger id="language">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tr">{t("turkish")}</SelectItem>
              <SelectItem value="en">{t("english")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
