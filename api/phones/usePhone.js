import { useQuery } from "@tanstack/react-query";
import { api } from "../axiosInstance";

export const usePhone = (id) => {
  return useQuery({
    queryKey: ["phone", id],
    queryFn: async () => {
      const response = await api.get(`/phones/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

