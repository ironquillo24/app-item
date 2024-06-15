import { type Item } from "../types";
import { postData, deleteData, updateData } from "../firebase/firebaseApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Item) => {
      await postData(data);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["myitems"] }),
  });
};

export const useDeleteItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteData,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["myitems"] }),
  });
};

export const useUpdateItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateData,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["myitems"] }),
  });
};
