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
import { Loader2 } from "lucide-react"

const NewUserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data: any) => {
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("User Data:", data)
      toast.success("Kullanıcı başarıyla oluşturuldu.")
      reset()
    } catch (error: any) {
      toast.error("Kullanıcı oluşturulurken bir hata oluştu.")
    }
  }

  return (
    <Card className="mx-auto w-full max-w-2xl border-sidebar-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight">
          Yeni Kullanıcı Ekle
        </CardTitle>
        <CardDescription>
          Sisteme yeni bir kullanıcı tanımlamak için bilgileri eksiksiz doldurunuz.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-semibold">
              Ad Soyad
            </Label>
            <Input
              {...register("fullName", { required: true })}
              id="fullName"
              placeholder="Örn: Ahmet Yılmaz"
              className="h-11"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold">
              E-posta Adresi
            </Label>
            <Input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              id="email"
              type="email"
              placeholder="Örn: ahmet@atc.com"
              className="h-11"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role" className="text-sm font-semibold">
              Rol / Ünvan
            </Label>
            <Input
              {...register("role", { required: true })}
              id="role"
              placeholder="Örn: Kıdemli Yazılım Geliştirici"
              className="h-11"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-3 border-t pt-4">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Temizle
          </Button>
          <Button
            disabled={isSubmitting}
            type="submit"
            className="bg-sidebar-primary px-8 text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
          >
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Kullanıcıyı Kaydet"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default NewUserForm
