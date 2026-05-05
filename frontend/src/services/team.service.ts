import api from "@/utils/axios";
import { toast } from "sonner";

export const createCrudApi = <TCreate, TUpdate>(baseUrl: string) => {
  return {
    getAll: async (params?: any) => {
      try {
        const res = await api.get(baseUrl, { params });
        return res.data;
      } catch (error: any) {
        toast.error("Veriler alınırken bir hata oluştu.");
        throw error;
      }
    },

    getById: async (id: string) => {
      try {
        const res = await api.get(`${baseUrl}/${id}`);
        return res.data;
      } catch (error: any) {
        toast.error("Veri detayı alınırken bir hata oluştu.");
        throw error;
      }
    },

    create: async (data: TCreate) => {
      try {
        const res = await api.post(baseUrl, data);
        toast.success("Kayıt başarıyla oluşturuldu.");
        return res.data;
      } catch (error: any) {
        toast.error("Kayıt oluşturulurken bir hata oluştu.");
        throw error;
      }
    },

    update: async (id: string, data: TUpdate) => {
      try {
        const res = await api.put(`${baseUrl}/${id}`, data);
        toast.success("Kayıt başarıyla güncellendi.");
        return res.data;
      } catch (error: any) {
        toast.error("Güncelleme sırasında bir hata oluştu.");
        throw error;
      }
    },

    remove: async (id: string) => {
      try {
        const res = await api.delete(`${baseUrl}/${id}`);
        toast.success("Kayıt başarıyla silindi.");
        return res.data;
      } catch (error: any) {
        toast.error("Silme işlemi sırasında bir hata oluştu.");
        throw error;
      }
    },
  };
};