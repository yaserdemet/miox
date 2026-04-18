import React, { useState, useMemo } from "react";
import { DamageTable } from "@/components/damage-process/damage-table";
import { DamageFilters } from "@/components/damage-process/damage-filters";
import { data } from "@/data/data";
import type { DamageProcess } from "@/components/damage-process/damage-types";

export const DamageProcessPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const damageData = data as DamageProcess[];

  // Benzersiz durum listesini oluştur
  const statusOptions = useMemo(() => {
    const statuses = damageData.map((d) => d.currentStatus);
    return Array.from(new Set(statuses));
  }, [damageData]);

  // Filtreleme mantığı
  const filteredData = useMemo(() => {
    return damageData.filter((item) => {
      const matchesSearch = 
        item.fileNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === "all" || item.currentStatus === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [damageData, searchTerm, statusFilter]);

  return (
    <div className="container mx-auto py-10 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Hasar Süreçleri</h1>
        <p className="text-muted-foreground">
          Sistemdeki tüm hasar dosyalarını filtreleyebilir ve detaylarını inceleyebilirsiniz.
        </p>
      </div>
      
      <DamageFilters 
        onSearchChange={setSearchTerm}
        onStatusChange={setStatusFilter}
        statusOptions={statusOptions}
      />

      <DamageTable data={filteredData} />
      
      {filteredData.length === 0 && (
        <div className="text-center py-10 border rounded-lg bg-muted/20">
          <p className="text-muted-foreground">Kriterlere uygun sonuç bulunamadı.</p>
        </div>
      )}
    </div>
  );
};

export default DamageProcessPage;
