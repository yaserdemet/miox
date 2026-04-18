import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { DamageTable } from "@/components/damage-process/damage-table";
import { DamageFilters } from "@/components/damage-process/damage-filters";
import { fetchDamageData } from "@/data/data";
import Loading from "@/pages/Loading";

export const DamageProcessPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const { data: damageData, isLoading, isError } = useQuery({
    queryKey: ["damageData"],
    queryFn: fetchDamageData,
  });

  // Benzersiz durum listesini oluştur
  const statusOptions = useMemo(() => {
    if (!damageData) return [];
    const statuses = damageData.map((d) => d.currentStatus);
    return Array.from(new Set(statuses));
  }, [damageData]);

  // Filtreleme mantığı
  const filteredData = useMemo(() => {
    if (!damageData) return [];
    return damageData.filter((item) => {
      const matchesSearch = 
        item.fileNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === "all" || item.currentStatus === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [damageData, searchTerm, statusFilter]);

  if (isLoading) return <Loading />;
  
  if (isError) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-destructive font-bold">{t("errorLoading")}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-2 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{t("damageProcesses")}</h1>
        <p className="text-muted-foreground">
          {t("damageProcessesDesc")}
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
          <p className="text-muted-foreground">{t("noResults")}</p>
        </div>
      )}
    </div>
  );
};

export default DamageProcessPage;
