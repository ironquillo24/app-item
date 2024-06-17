import { type TItems } from "../shared/types";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { useUpdateItem } from "../shared/hooks/mutationHooks";

const CardItem = ({ item }: { item: TItems }) => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [itemInfo, setItemInfo] = useState(item);
  const [error, setError] = useState({ isError: false, errorMessage: "" });
  const updateItem = useUpdateItem();

  useEffect(() => {
    setItemInfo(item);
  }, [item]);
  const onInputBlur = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyName = e.target.name as
      | "category"
      | "name"
      | "option"
      | "price"
      | "cost"
      | "stocks";
    const newValue =
      keyName === "category" || keyName === "name" || keyName === "option"
        ? e.target.value.trim()
        : Number(e.target.value);
    try {
      await updateItem.mutateAsync({
        id: item.id,
        key: keyName,
        value: newValue,
      });
      setItemInfo({ ...itemInfo, [keyName]: newValue });
    } catch (e) {
      if (e instanceof Error) {
        setError({ isError: true, errorMessage: e.message });
      } else {
        setError({ isError: true, errorMessage: "Something went wrong" });
      }
    }
  };

  const onEdit = () => {
    setIsReadOnly(!isReadOnly);
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
          <div>{itemInfo.category || "N/A"}</div>
        ) : (
          <input
            name="category"
            defaultValue={itemInfo.category || ""}
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
          <div>{itemInfo.name || "N/A"}</div>
        ) : (
          <input
            name="name"
            defaultValue={itemInfo.name || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
            onKeyDown={onInputKeyDown}
          />
        )}

        <div className="font-medium">Option:</div>
        {isReadOnly ? (
          <div>{itemInfo.option || "N/A"}</div>
        ) : (
          <input
            name="option"
            defaultValue={itemInfo.option || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
            onKeyDown={onInputKeyDown}
          />
        )}

        <div className="font-medium">Cost:</div>
        {isReadOnly ? (
          <div>{itemInfo.cost || "N/A"}</div>
        ) : (
          <input
            name="cost"
            defaultValue={itemInfo.cost || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
            onKeyDown={onInputKeyDown}
          />
        )}

        <div className="font-medium">Price:</div>
        {isReadOnly ? (
          <div>{itemInfo.price || "N/A"}</div>
        ) : (
          <input
            name="price"
            defaultValue={itemInfo.price || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
            onKeyDown={onInputKeyDown}
          />
        )}

        <div className="font-medium">Stocks:</div>
        {isReadOnly ? (
          <div>{itemInfo.stocks || "N/A"}</div>
        ) : (
          <input
            name="stocks"
            defaultValue={itemInfo.stocks || ""}
            className="border border-slate-500 rounded-md bg-white"
            onBlur={onInputBlur}
            onKeyDown={onInputKeyDown}
          />
        )}
      </div>
      {error.isError ? <div>{error.errorMessage}</div> : null}
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
