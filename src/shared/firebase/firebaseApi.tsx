import { db } from "./firebaseConfig.ts";
import { type Item, type Items, updateDataParams } from "../types.ts";
import { get, update, remove, ref, push } from "firebase/database";

export const getAllData = async () => {
  const itemSnapshot = await get(ref(db));

  if (!itemSnapshot.val()) return [];

  const itemVal = itemSnapshot.val().items as Items;

  const data = Object.entries(itemVal).map(([id, item]) => ({
    ...{ id: id },
    ...item,
  }));

  return data;
};

export const postData = (data: Item) => {
  return push(ref(db, "items/"), {
    category: data.category,
    name: data.name,
    option: data.option,
    price: data.price || null,
    cost: data.cost || null,
    stocks: data.stocks || null,
  });
};

export const deleteData = (id: string) => {
  return remove(ref(db, `/items/${id}`));
};

export const updateData = (data: updateDataParams) => {
  const updateObject = { [data.key]: data.value };

  return update(ref(db, `/items/${data.id}`), updateObject);
};
