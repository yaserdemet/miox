import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { DamageProcess } from "./damage-types";

interface DamageDetailsProps {
  process: DamageProcess | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DamageDetails: React.FC<DamageDetailsProps> = ({
  process,
  isOpen,
  onOpenChange,
}) => {
  if (!process) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{process.fileNo} - Süreç Detayları</DialogTitle>
          <DialogDescription>
            Bu dosya numarasına ait tüm işlem adımları aşağıda listelenmiştir.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>İşlem</TableHead>
                <TableHead>Durum</TableHead>
                <TableHead>Detaylar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {process.processDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{detail.title}</TableCell>
                  <TableCell>
                    <Badge variant={detail.status === "Tamamlandı" ? "success" : "secondary"}>
                      {detail.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                      {Object.entries(detail).map(([key, value]) => {
                        if (key === "title" || key === "status" || !value || value === "gg/aa/yyyy 00:00" || value === "0 TL" || value === "—" || value === "Atanmadı") return null;
                        
                        // Key formatlama: expertAssignmentDate -> Eksper Atama Tarihi vb. (Opsiyonel)
                        const labelMap: Record<string, string> = {
                          pickupLocation: "Konum",
                          towingDate: "Çekici Tarihi",
                          dateTime: "Tarih/Saat",
                          reportType: "Tutanak Türü",
                          reasonForDamage: "Hasar Nedeni",
                          reportingParty: "İhbar Eden",
                          contact: "İletişim",
                          expertAssignmentDate: "Eksper Atama",
                          expertInfo: "Eksper Bilgisi",
                          vehicleDuration: "Süre",
                          vehicleModel: "Araç Modeli",
                          extraDuration: "Ek Süre",
                          reviewReferralDate: "İnceleme Başlangıç",
                          reviewCompletionDate: "İnceleme Bitiş",
                          actionRequired: "Gerekli Aksiyon",
                          occupationalDeduction: "Mesleki Kesinti",
                          appreciationDeduction: "Değer Artışı",
                          policyDeductible: "Muafiyet",
                          nonDamageAmount: "Hasar Dışı",
                          paidTo: "Ödenen Kişi",
                          iban: "IBAN",
                          paymentAmount: "Tutar",
                          note: "Not",
                          completionDate: "Kapanış Tarihi"
                        };

                        return (
                          <p key={key}>
                            <span className="font-semibold text-muted-foreground">{labelMap[key] || key}:</span> {value}
                          </p>
                        );
                      })}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};
