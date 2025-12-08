import { useQuery } from "@tanstack/react-query";
import { api } from "../axiosInstance";

export const useLaptop = (id) => {
  return useQuery({
    queryKey: ["laptop", id],
    queryFn: async () => {
      const response = await api.get(`/laptops/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};


