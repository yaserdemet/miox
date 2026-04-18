import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DamageProcess } from "./damage-types";
import { DamageRow } from "./damage-row";
import { DamageDetails } from "./damage-details";

interface DamageTableProps {
  data: DamageProcess[];
}

export const DamageTable: React.FC<DamageTableProps> = ({ data }) => {
  const [selectedProcess, setSelectedProcess] = useState<DamageProcess | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleViewDetails = (process: DamageProcess) => {
    setSelectedProcess(process);
    setIsDetailsOpen(true);
  };

  return (
    <div className="rounded-md border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Dosya No</TableHead>
            <TableHead>Başlık</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>Kalan Süre</TableHead>
            <TableHead className="text-right">İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((process) => (
            <DamageRow
              key={process.fileNo}
              process={process}
              onViewDetails={handleViewDetails}
            />
          ))}
        </TableBody>
      </Table>

      <DamageDetails
        process={selectedProcess}
        isOpen={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
      />
    </div>
  );
};
