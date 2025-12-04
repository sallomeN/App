import { useQuery } from "@tanstack/react-query";
import { api } from "../axiosInstance";

export const useLaptops = () => {
  return useQuery({
    queryKey: ["laptops"],
    queryFn: async () => {
      const response = await api.get("/laptops");
      return response.data;
    },
  });
};
