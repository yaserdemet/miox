import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "@/data/data";
import type { DamageProcess } from "@/components/damage-process/damage-types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft } from "lucide-react";

export const DamageDetailsPage: React.FC = () => {
  const { fileNo } = useParams<{ fileNo: string }>();
  const navigate = useNavigate();

  const process = (data as DamageProcess[]).find((d) => d.fileNo === fileNo);

  if (!process) {
    return (
      <div className="container mx-auto py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-destructive">Dosya Bulunamadı</h2>
        <p className="text-muted-foreground">Aradığınız dosya numarasına ait veri sistemde bulunamadı.</p>
        <Button onClick={() => navigate("/")}>Geri Dön</Button>
      </div>
    );
  }

  const getStatusVariant = (status: string) => {
    if (status === "Tamamlandı") return "success";
    return "secondary";
  };

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
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
          <ChevronLeft className="size-4" />
        </Button>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold tracking-tight">Dosya: {process.fileNo}</h1>
          <p className="text-muted-foreground">{process.title} - Detaylı Süreç Takibi</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-card border rounded-lg p-6 space-y-4">
          <h3 className="font-semibold text-lg border-b pb-2">Özet Bilgiler</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Mevcut Durum</p>
              <Badge variant="outline" className="mt-1">{process.currentStatus}</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tahmini Kalan Süre</p>
              <p className="font-medium">{process.estimatedRemainingTime}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-card border rounded-lg p-6">
          <h3 className="font-semibold text-lg border-b pb-4 mb-4">İşlem Adımları</h3>
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
                  <TableCell className="font-medium align-top">{detail.title}</TableCell>
                  <TableCell className="align-top">
                    <Badge variant={getStatusVariant(detail.status)}>
                      {detail.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="grid grid-cols-1 gap-1 text-xs sm:text-sm">
                      {Object.entries(detail).map(([key, value]) => {
                        if (key === "title" || key === "status" || !value || value === "gg/aa/yyyy 00:00" || value === "0 TL" || value === "—" || value === "Atanmadı") return null;
                        return (
                          <div key={key} className="flex gap-2">
                            <span className="font-semibold text-muted-foreground min-w-[120px]">{labelMap[key] || key}:</span>
                            <span>{value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DamageDetailsPage;
