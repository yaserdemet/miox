import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { DamageProcess } from "./damage-types";
import { Eye, Calendar } from "lucide-react";

interface DamageRowProps {
  process: DamageProcess;
}

import { useNavigate } from "react-router-dom";

export const DamageRow: React.FC<DamageRowProps> = ({ process }) => {
  const navigate = useNavigate();

  const getStatusVariant = (status: string) => {
    if (status.includes("Tamamlandı")) return "success";
    if (status.includes("Devam Ediyor") || status.includes("Bekleniyor")) return "pastel-blue";
    if (status.includes("Kapatıldı") || status.includes("Kapatılmak Üzere")) return "pastel-purple";
    if (status.includes("Hasar Bildirimi Alındı")) return "pastel-yellow";
    return "pastel-slate";
  };

  const getTitleVariant = (title: string) => {
    if (title.includes("Hasar")) return "pastel-blue";
    if (title.includes("Cam")) return "pastel-purple";
    if (title.includes("Pert")) return "pastel-yellow";
    return "pastel-slate";
  };

  return (
    <TableRow>
      <TableCell className="font-medium">{process.fileNo}</TableCell>
      <TableCell>
        <Badge variant={getTitleVariant(process.title)} className="font-medium bg-opacity-10">
          {process.title}
        </Badge>
      </TableCell>
      <TableCell>
        <Badge variant={getStatusVariant(process.currentStatus)} className="font-normal">
          {process.currentStatus}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
          <Calendar className="size-3.5 text-blue-500/70" />
          <span>{process.estimatedRemainingTime}</span>
        </div>
      </TableCell>
      <TableCell className="text-right">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(`/damage/${process.fileNo}`)}
          title="Detayları Gör"
        >
          <Eye className="size-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
