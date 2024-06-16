import { type TItems } from "../shared/types";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useUpdateItem } from "../shared/hooks/mutationHooks";

const CardItem = ({ item }: { item: TItems }) => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const updateItem = useUpdateItem();
  const onEdit = () => {
    setIsReadOnly(!isReadOnly);
  };

  const onInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyName = e.target.name as
      | "category"
      | "name"
      | "option"
      | "price"
      | "cost"
      | "stocks";
    updateItem.mutate({
      id: item.id,
      key: keyName,
      value:
        keyName === "category" || keyName === "name" || keyName === "option"
          ? e.target.value.trim()
          : Number(e.target.value),
    });
  };

  //remove focus on enter key
  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };
  return (
    <div className="w-[300px] h-[170px] rounded-lg shadow-lg bg-white hover:-translate-y-1 hover:translate-x-1 hover:shadow-2xl group  ">
      <div className="flex relative items-center justify-center *:text-center font-medium text-xl py-1 mb-2 shadow-md bg-slate-100">
        {isReadOnly ? (
          <div>{item.category || "N/A"}</div>
        ) : (
          <input
            name="category"
            defaultValue={item.category || ""}
            className="border border-slate-500 rounded-md bg-white mx-8"
            onBlur={onInputBlur}
            onKeyDown={onInputKeyDown}
          />
        )}
        <button type="button" onClick={onEdit} className="flex items-center">
          <Pencil
            size={18}
            className="absolute right-2 scale-0 group-hover:scale-100"
          />
        </button>
      </div>

      <div className="grid grid-cols-2 *:pl-5 *:mx-4  *:text-left ">
        <div className="font-medium">Name:</div>
        {isReadOnly ? (
          <div>{item.name || "N/A"}</div>
        ) : (
          <input
            name="name"
            defaultValue={item.name || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
            onKeyDown={onInputKeyDown}
          />
        )}

        <div className="font-medium">Option:</div>
        {isReadOnly ? (
          <div>{item.option || "N/A"}</div>
        ) : (
          <input
            name="option"
            defaultValue={item.option || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
            onKeyDown={onInputKeyDown}
          />
        )}

        <div className="font-medium">Cost:</div>
        {isReadOnly ? (
          <div>{item.cost || "N/A"}</div>
        ) : (
          <input
            name="cost"
            defaultValue={item.cost || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
            onKeyDown={onInputKeyDown}
          />
        )}

        <div className="font-medium">Price:</div>
        {isReadOnly ? (
          <div>{item.price || "N/A"}</div>
        ) : (
          <input
            name="price"
            defaultValue={item.price || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
            onKeyDown={onInputKeyDown}
          />
        )}

        <div className="font-medium">Stocks:</div>
        {isReadOnly ? (
          <div>{item.stocks || "N/A"}</div>
        ) : (
          <input
            name="stocks"
            defaultValue={item.stocks || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
            onKeyDown={onInputKeyDown}
          />
        )}
      </div>
    </div>
  );
};
export default CardItem;

{
  /* <div className="font-medium">Name:</div>
        {isReadOnly ? (
          <div>{item.name || "N/A"}</div>
        ) : (
          <input
            name="name"
            defaultValue={item.name || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
          />
        )}

        <div className="font-medium">Option:</div>
        {isReadOnly ? (
          <div>{item.option || "N/A"}</div>
        ) : (
          <input
            name="option"
            defaultValue={item.option || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
          />
        )}

        <div className="font-medium">Cost:</div>
        {isReadOnly ? (
          <div>{item.cost || "N/A"}</div>
        ) : (
          <input
            name="cost"
            defaultValue={item.cost || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
          />
        )}

        <div className="font-medium">Price:</div>
        {isReadOnly ? (
          <div>{item.price || "N/A"}</div>
        ) : (
          <input
            name="cost"
            defaultValue={item.cost || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
          />
        )}

        <div className="font-medium">Stocks:</div>
        <div>{item.stocks || "N/A"}</div>
 */
}
