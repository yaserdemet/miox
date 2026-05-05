import React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { createCrudApi } from "@/services/team.service"
import { Loader2 } from "lucide-react"

const NewTeamForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const teamApi = createCrudApi("/teams")
  const onSubmit = async (data: any) => {
    try {
      const response = await teamApi.create(data)
      if (response) {
        toast.success("Takım başarıyla oluşturuldu.")
        reset()
      }
    } catch (error: any) {
      toast.error("Takım oluşturulurken bir hata oluştu.")
      console.error(error)
    }
  }

  return (
    <Card className="mx-auto w-full max-w-2xl border-sidebar-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight">
          Yeni Takım Oluştur
        </CardTitle>
        <CardDescription>
          Platformda yeni bir çalışma grubu oluşturmak için gerekli bilgileri
          giriniz.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="teamName" className="text-sm font-semibold">
              Takım Adı
            </Label>
            <Input
              {...register("name", { required: true })}
              id="teamName"
              placeholder="Örn: Geliştirme Ekibi"
              className="h-11"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="teamLeader" className="text-sm font-semibold">
              Takım Lideri
            </Label>
            <Input
              {...register("leader", { required: true })}
              id="teamLeader"
              placeholder="Lider adını giriniz"
              className="h-11"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-3 border-t pt-4">
          <Button variant="outline" type="button">
            İptal
          </Button>
          <Button
            disabled={isSubmitting}
            type="submit"
            className="bg-sidebar-primary px-8 text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Takımı Kaydet"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default NewTeamForm
