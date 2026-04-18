import React from "react";
import { DamageTable } from "@/components/damage-process/damage-table";
import { data } from "@/data/data";
import type { DamageProcess } from "@/components/damage-process/damage-types";

export const DamageProcessPage: React.FC = () => {
  // Veriyi tip güvenli hale getirmek için cast ediyoruz
  const damageData = data as DamageProcess[];

  return (
    <div className="container mx-auto py-10 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Hasar Süreçleri</h1>
        <p className="text-muted-foreground">
          Sistemdeki tüm hasar dosyalarını ve güncel durumlarını buradan takip edebilirsiniz.
        </p>
      </div>
      
      <DamageTable data={damageData} />
    </div>
  );
};

export default DamageProcessPage;
