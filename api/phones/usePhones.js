import { useQuery } from "@tanstack/react-query";
import { api } from "../axiosInstance";

export const usePhones = () => {
  return useQuery({
    queryKey: ["phones"],
    queryFn: async () => {
      const response = await api.get("/phones");
      return response.data;
    },
  });
};