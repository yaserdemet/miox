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
import { createCrudApi } from "@/services/team.service"

const NewUserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const userApi = createCrudApi("/users", {
    create: {
      success: "Kullanıcı başarıyla oluşturuldu.",
      error: "Kullanıcı oluşturulurken bir hata oluştu.",
    },
  })

  const onSubmit = async (data: any) => {
    try {
      const response = await userApi.create(data)
      if (response) {
        reset()
      }
    } catch (error: any) {
      console.error("User creation error:", error)
    }
  }

  return (
    <Card className="mx-auto w-full max-w-2xl border-sidebar-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight">
          Yeni Kullanıcı Ekle
        </CardTitle>
        <CardDescription>
          Sisteme yeni bir kullanıcı tanımlamak için bilgileri eksiksiz
          doldurunuz.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold">
                Ad
              </Label>
              <Input
                {...register("name", {
                  required: "Ad alanı zorunludur",
                  minLength: { value: 3, message: "En az 3 karakter olmalı" },
                })}
                id="name"
                placeholder="Örn: Ahmet"
                className={`h-11 ${errors.name ? "border-destructive" : ""}`}
              />
              {errors.name && (
                <p className="animate-in text-[11px] font-medium text-destructive fade-in slide-in-from-top-1">
                  {errors.name.message as string}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="surname" className="text-sm font-semibold">
                Soy Ad
              </Label>
              <Input
                {...register("surname", {
                  required: "Soyad alanı zorunludur",
                  minLength: { value: 2, message: "En az 2 karakter olmalı" },
                })}
                id="surname"
                placeholder="Örn: Yılmaz"
                className={`h-11 ${errors.surname ? "border-destructive" : ""}`}
              />
              {errors.surname && (
                <p className="animate-in text-[11px] font-medium text-destructive fade-in slide-in-from-top-1">
                  {errors.surname.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-semibold">
                Yaş
              </Label>
              <Input
                {...register("age", {
                  required: "Yaş alanı zorunludur",
                  valueAsNumber: true,
                  min: { value: 18, message: "En az 18 yaşında olmalısınız" },
                })}
                id="age"
                type="number"
                placeholder="Örn: 25"
                className={`h-11 ${errors.age ? "border-destructive" : ""}`}
              />
              {errors.age && (
                <p className="animate-in text-[11px] font-medium text-destructive fade-in slide-in-from-top-1">
                  {errors.age.message as string}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-semibold">
                Telefon Numarası
              </Label>
              <Input
                {...register("phoneNumber", {
                  required: "Telefon numarası zorunludur",
                  valueAsNumber: true,
                })}
                id="phoneNumber"
                type="number"
                placeholder="Örn: 555..."
                className={`h-11 ${errors.phoneNumber ? "border-destructive" : ""}`}
              />
              {errors.phoneNumber && (
                <p className="animate-in text-[11px] font-medium text-destructive fade-in slide-in-from-top-1">
                  {errors.phoneNumber.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="education" className="text-sm font-semibold">
              Eğitim Durumu
            </Label>
            <Input
              {...register("education", {
                required: "Eğitim durumu zorunludur",
              })}
              id="education"
              placeholder="Örn: Lisans"
              className={`h-11 ${errors.education ? "border-destructive" : ""}`}
            />
            {errors.education && (
              <p className="animate-in text-[11px] font-medium text-destructive fade-in slide-in-from-top-1">
                {errors.education.message as string}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="role" className="text-sm font-semibold">
              Rol / Ünvan
            </Label>
            <Input
              {...register("role", {
                required: "Rol alanı zorunludur",
                minLength: { value: 3, message: "En az 3 karakter olmalı" },
              })}
              id="role"
              placeholder="Örn: Kıdemli Yazılım Geliştirici"
              className={`h-11 ${errors.role ? "border-destructive" : ""}`}
            />
            {errors.role && (
              <p className="animate-in text-[11px] font-medium text-destructive fade-in slide-in-from-top-1">
                {errors.role.message as string}
              </p>
            )}
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
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Kullanıcıyı Kaydet"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default NewUserForm
