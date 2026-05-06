import api from "@/utils/axios"
import { toast } from "sonner"

export interface ApiMessages {
  success?: string
  error?: string
}

export interface CrudMessages {
  getAll?: ApiMessages
  getById?: ApiMessages
  create?: ApiMessages
  update?: ApiMessages
  remove?: ApiMessages
}

export const createCrudApi = <TCreate, TUpdate>(
  baseUrl: string,
  messages?: CrudMessages
) => {
  return {
    getAll: async (params?: any) => {
      try {
        const res = await api.get(baseUrl, { params })
        return res.data
      } catch (error: any) {
        toast.error(
          messages?.getAll?.error || "Veriler alınırken bir hata oluştu."
        )
        throw error
      }
    },

    getById: async (id: string) => {
      try {
        const res = await api.get(`${baseUrl}/${id}`)
        return res.data
      } catch (error: any) {
        toast.error(
          messages?.getById?.error || "Veri detayı alınırken bir hata oluştu."
        )
        throw error
      }
    },

    create: async (data: TCreate) => {
      try {
        const res = await api.post(baseUrl, data)
        if (res.status === 200 || res.status === 201) {
          toast.success(
            messages?.create?.success || "Kayıt başarıyla oluşturuldu."
          )
        }
        return res.data
      } catch (error: any) {
        toast.error(
          messages?.create?.error || "Kayıt oluşturulurken bir hata oluştu."
        )
        throw error
      }
    },

    update: async (id: string, data: TUpdate) => {
      try {
        const res = await api.put(`${baseUrl}/${id}`, data)
        if (res.status === 200) {
          toast.success(
            messages?.update?.success || "Kayıt başarıyla güncellendi."
          )
        }
        return res.data
      } catch (error: any) {
        toast.error(
          messages?.update?.error || "Güncelleme sırasında bir hata oluştu."
        )
        throw error
      }
    },

    remove: async (id: string) => {
      try {
        const res = await api.delete(`${baseUrl}/${id}`)
        if (res.status === 200) {
          toast.success(messages?.remove?.success || "Kayıt başarıyla silindi.")
        }
        return res.data
      } catch (error: any) {
        toast.error(
          messages?.remove?.error || "Silme işlemi sırasında bir hata oluştu."
        )
        throw error
      }
    },
  }
}
