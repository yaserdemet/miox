import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const { fileNo } = useParams<{ fileNo: string }>();
  const navigate = useNavigate();

  const process = (data as DamageProcess[]).find((d) => d.fileNo === fileNo);

  if (!process) {
    return (
      <div className="container mx-auto py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-destructive">{t("noResults")}</h2>
        <Button onClick={() => navigate("/")}>{t("back")}</Button>
      </div>
    );
  }

  const getStatusVariant = (status: string) => {
    if (status === "Tamamlandı" || status.includes("Tamamlandı")) return "success";
    if (status.includes("Devam Ediyor") || status.includes("Bekleniyor")) return "pastel-blue";
    if (status.includes("Kapatıldı") || status.includes("Kapatılmak Üzere")) return "pastel-purple";
    return "pastel-slate";
  };

  const getTitleVariant = (title: string) => {
    if (title.includes("Hasar")) return "pastel-blue";
    if (title.includes("Cam")) return "pastel-purple";
    if (title.includes("Pert")) return "pastel-yellow";
    return "pastel-slate";
  };

  const labelMap: Record<string, string> = {
    pickupLocation: t("pickupLocation") || "Konum",
    towingDate: t("towingDate") || "Çekici Tarihi",
    dateTime: t("dateTime") || "Tarih/Saat",
    reportType: t("reportType") || "Tutanak Türü",
    reasonForDamage: t("reasonForDamage") || "Hasar Nedeni",
    reportingParty: t("reportingParty") || "İhbar Eden",
    contact: t("contact") || "İletişim",
    expertAssignmentDate: t("expertAssignmentDate") || "Eksper Atama",
    expertInfo: t("expertInfo") || "Eksper Bilgisi",
    vehicleDuration: t("vehicleDuration") || "Süre",
    vehicleModel: t("vehicleModel") || "Araç Modeli",
    extraDuration: t("extraDuration") || "Ek Süre",
    reviewReferralDate: t("reviewReferralDate") || "İnceleme Başlangıç",
    reviewCompletionDate: t("reviewCompletionDate") || "İnceleme Bitiş",
    actionRequired: t("actionRequired") || "Gerekli Aksiyon",
    occupationalDeduction: t("occupationalDeduction") || "Mesleki Kesinti",
    appreciationDeduction: t("appreciationDeduction") || "Değer Artışı",
    policyDeductible: t("policyDeductible") || "Muafiyet",
    nonDamageAmount: t("nonDamageAmount") || "Hasar Dışı",
    paidTo: t("paidTo") || "Ödenen Kişi",
    iban: t("iban") || "IBAN",
    paymentAmount: t("paymentAmount") || "Tutar",
    note: t("note") || "Not",
    completionDate: t("completionDate") || "Kapanış Tarihi"
  };

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
          <ChevronLeft className="size-4" />
        </Button>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{t("fileNo")}: {process.fileNo}</h1>
            <Badge variant={getTitleVariant(process.title)} className="mt-1">
              {process.title}
            </Badge>
          </div>
          <p className="text-muted-foreground">{t("details")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-card border rounded-lg p-6 space-y-4">
          <h3 className="font-semibold text-lg border-b pb-2">{t("summary")}</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">{t("currentStatus")}</p>
              <Badge variant={getStatusVariant(process.currentStatus)} className="mt-1">
                {process.currentStatus}
              </Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t("estimatedTime")}</p>
              <p className="font-medium">{process.estimatedRemainingTime}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-card border rounded-lg p-6">
          <h3 className="font-semibold text-lg border-b pb-4 mb-4">{t("processSteps")}</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("step")}</TableHead>
                <TableHead>{t("status")}</TableHead>
                <TableHead>{t("stepDetails")}</TableHead>
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
