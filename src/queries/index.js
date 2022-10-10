import { useQuery } from "@tanstack/react-query";
import api from "./api";

const useExpandedCards = () => {
  return useQuery(["expandedCards"], () => api.get("/expanded-cards"));
};

export { useExpandedCards };
