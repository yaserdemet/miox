import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DamageFiltersProps {
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  statusOptions: string[];
}

import { useTranslation } from "react-i18next";

export const DamageFilters: React.FC<DamageFiltersProps> = ({
  onSearchChange,
  onStatusChange,
  statusOptions,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <Input
          placeholder={t("searchPlaceholder")}
          onChange={(e) => onSearchChange(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="w-full sm:w-[200px]">
        <Select onValueChange={onStatusChange}>
          <SelectTrigger>
            <SelectValue placeholder={t("statusSelectPlaceholder")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("allStatuses")}</SelectItem>
            {statusOptions.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
