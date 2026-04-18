import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { DamageProcess } from "./damage-types";
import { Eye } from "lucide-react";

interface DamageRowProps {
  process: DamageProcess;
}

import { useNavigate } from "react-router-dom";

export const DamageRow: React.FC<DamageRowProps> = ({ process }) => {
  const navigate = useNavigate();

  const getStatusVariant = (status: string) => {
    if (status.includes("Tamamlandı")) return "success";
    if (status.includes("Devam Ediyor") || status.includes("Bekleniyor")) return "secondary";
    if (status.includes("Kapatıldı") || status.includes("Kapatılmak Üzere")) return "default";
    if (status.includes("Hasar Bildirimi Alındı")) return "outline";
    return "outline";
  };

  return (
    <TableRow>
      <TableCell className="font-medium">{process.fileNo}</TableCell>
      <TableCell>{process.title}</TableCell>
      <TableCell>
        <Badge variant={getStatusVariant(process.currentStatus)} className="font-normal">
          {process.currentStatus}
        </Badge>
      </TableCell>
      <TableCell>
        <span className="text-muted-foreground">{process.estimatedRemainingTime}</span>
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
