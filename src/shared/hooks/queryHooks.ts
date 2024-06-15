import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../firebase/firebaseApi";

export const useGetItems = () => {
  return useQuery({
    queryKey: ["myitems"],
    queryFn: () => getAllData(),
  });
};
