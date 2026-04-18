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

export const DamageFilters: React.FC<DamageFiltersProps> = ({
  onSearchChange,
  onStatusChange,
  statusOptions,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <Input
          placeholder="Dosya no veya başlığa göre ara..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="w-full sm:w-[200px]">
        <Select onValueChange={onStatusChange}>
          <SelectTrigger>
            <SelectValue placeholder="Durum Seçin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tüm Durumlar</SelectItem>
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
