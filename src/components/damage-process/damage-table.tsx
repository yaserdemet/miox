import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DamageProcess } from "./damage-types";
import { DamageRow } from "./damage-row";

interface DamageTableProps {
  data: DamageProcess[];
}

export const DamageTable: React.FC<DamageTableProps> = ({ data }) => {
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
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
