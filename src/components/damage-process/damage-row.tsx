import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { DamageProcess } from "./damage-types";
import { useNavigate } from "react-router-dom";
import { Eye, Calendar, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DamageRowProps {
  process: DamageProcess;
}

export const DamageRow: React.FC<DamageRowProps> = ({ process }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

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

  const getSimplifiedExplanation = () => {
    const lang = i18n.language;
    
    if (process.title.includes("Cam")) {
      return lang === "tr" 
        ? "Bu dosya aracınızın cam hasarı ile ilgilidir. Süreç; hasar bildirimi, uzman incelemesi ve ardından ödemenin yapılması adımlarını içerir. Şu anki durum, camın değiştirilmesi veya tamiri için onay beklediğinizi veya işlemin sürdüğünü belirtir."
        : "This file is about your vehicle's glass damage. The process includes damage reporting, expert review, and then payout. The current status indicates that you are waiting for approval for glass replacement or repair, or that the process is ongoing.";
    }
    
    if (process.title.includes("Pert")) {
      return lang === "tr"
        ? "Aracınızın ağır hasarlı (pert) olduğu değerlendirilmektedir. Bu süreçte aracın piyasa değeri araştırılır, sigorta şirketi ile mutabakat sağlanır ve aracın hurda/satış işlemleri takip edilir. Teknik olarak 'sovtaj' (aracın kalan değeri) ve 'rayiç bedel' hesaplamaları yapılmaktadır."
        : "Your vehicle is assessed as heavily damaged (total loss). In this process, the market value of the vehicle is researched, an agreement is reached with the insurance company, and the scrap/sale transactions of the vehicle are tracked. Technically, 'salvage' (remaining value of the vehicle) and 'market value' calculations are being made.";
    }

    return lang === "tr"
      ? "Bu genel bir hasar dosyasıdır. Aracınızın onarım süreci, parça tedariği ve servis işçilikleri takip edilmektedir. Tüm teknik raporlar uzmanlar (eksperler) tarafından incelenerek onay sürecine sunulur."
      : "This is a general damage file. Your vehicle's repair process, part supply, and service labor are tracked. All technical reports are reviewed by experts (adjusters) and submitted to the approval process.";
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
        <div className="flex items-center justify-end gap-1">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-amber-500 hover:text-amber-600 hover:bg-amber-500/10"
                title={t("explain")}
              >
                <Sparkles className="size-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Sparkles className="size-5 text-amber-500" />
                  {t("explainTitle")}
                </DialogTitle>
                <DialogDescription>
                  {t("explainDesc")}
                </DialogDescription>
              </DialogHeader>
              <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-lg">
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  "{getSimplifiedExplanation()}"
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <Button
            variant="ghost"
            size="icon"
            className="text-blue-500 hover:text-blue-600 hover:bg-blue-500/10"
            onClick={() => navigate(`/damage/${process.fileNo}`)}
            title={t("details")}
          >
            <Eye className="size-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
