import { useQuery } from "@tanstack/react-query";
import { MODEL_API_URL } from "../constants/api";
import type { ModelApiResponse } from "../types/model";

export const useModelData = () => {
  return useQuery<ModelApiResponse>({
    queryKey: ["modelData"],
    queryFn: async () => {
      const res = await fetch(MODEL_API_URL);
      if (!res.ok) throw new Error("Failed to fetch model data");
      return res.json();
    },
  });
};
