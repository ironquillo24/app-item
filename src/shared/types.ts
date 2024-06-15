export type Item = {
  category: string | null;
  name: string | null;
  option: string | null;
  cost: number | null;
  price: number | null;
  stocks: number | null;
};
export type Items = {
  [id: string]: Item;
};

export type TItems = { id: string } & Item;

export type updateDataParams =
  | {
      id: string;
      key: "category" | "name" | "option" | "price" | "cost" | "stocks";
      value: string | number;
    }
  | {
      id: string;
      key: "category" | "name" | "option";
      value: string;
    }
  | {
      id: string;
      key: "price" | "cost" | "stocks";
      value: number;
    };
