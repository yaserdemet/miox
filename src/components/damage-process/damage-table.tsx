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
import { useTranslation } from "react-i18next";

interface DamageTableProps {
  data: DamageProcess[];
}

export const DamageTable: React.FC<DamageTableProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="rounded-md border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">{t("fileNo")}</TableHead>
            <TableHead>{t("title")}</TableHead>
            <TableHead>{t("status")}</TableHead>
            <TableHead>{t("remainingTime")}</TableHead>
            <TableHead className="text-right">{t("actions")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((process: DamageProcess) => (
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
