import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { DamageProcess } from "./damage-types";
import { Eye } from "lucide-react";

interface DamageRowProps {
  process: DamageProcess;
  onViewDetails: (process: DamageProcess) => void;
}

export const DamageRow: React.FC<DamageRowProps> = ({ process, onViewDetails }) => {
  return (
    <TableRow className="group">
      <TableCell className="font-medium">{process.fileNo}</TableCell>
      <TableCell>{process.title}</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-normal">
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
          onClick={() => onViewDetails(process)}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="size-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
