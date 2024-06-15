import defaultItem from "../shared/defaultItem";
import { useState } from "react";
import { usePostItem } from "../shared/hooks/mutationHooks";
import { Item } from "../shared/types";
type AddItemModalProps = {
  modalRef: React.RefObject<HTMLDialogElement>;
};
const AddItemModal = ({ modalRef }: AddItemModalProps) => {
  const [item, SetItem] = useState<Item>(defaultItem);
  const [isEmpty, setIsEmpty] = useState(false);
  const addItem = usePostItem();

  const onCancel = () => {
    modalRef.current?.close();
    setIsEmpty(false);
  };

  const onAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item === defaultItem) {
      setIsEmpty(true);
      return;
    }

    addItem.mutate(item);
    setIsEmpty(false);
    SetItem(defaultItem);
    modalRef.current?.close();
    return;
  };

  return (
    <dialog ref={modalRef} className="border rounded-lg shadow-lg bg-white">
      <form onSubmit={onAdd}>
        <h2 className="font-bold p-2 text-center text-xl">Add Item</h2>
        <div className="grid grid-cols-2 m-4 mb-0 *:py-1 *:text-center *:border-y border">
          <div>Category</div>
          <input
            name="category"
            type="text"
            maxLength={30}
            value={item.category ?? ""}
            onChange={(e) =>
              SetItem({
                ...item,
                category: e.target.value.length > 0 ? e.target.value : null,
              })
            }
          />
          <div>Product</div>
          <input
            name="name"
            type="text"
            maxLength={30}
            value={item.name ?? ""}
            onChange={(e) =>
              SetItem({
                ...item,
                name: e.target.value.length > 0 ? e.target.value : null,
              })
            }
          />
          <div>Option</div>
          <input
            name="option"
            type="text"
            maxLength={30}
            value={item.option ?? ""}
            onChange={(e) =>
              SetItem({
                ...item,
                option: e.target.value.length > 0 ? e.target.value : null,
              })
            }
          />
          <div>Cost</div>
          <input
            name="cost"
            type="number"
            min={0}
            value={item.cost ?? ""}
            onChange={(e) =>
              SetItem({
                ...item,
                cost: e.target.value ? Number(e.target.value) : null,
              })
            }
          />
          <div>Price</div>
          <input
            name="price"
            type="number"
            min={0}
            value={item.price ?? ""}
            onChange={(e) =>
              SetItem({
                ...item,
                price: e.target.value ? Number(e.target.value) : null,
              })
            }
          />
          <div>Stocks</div>
          <input
            name="stocks"
            type="number"
            min={0}
            value={item.stocks ?? ""}
            onChange={(e) =>
              SetItem({
                ...item,
                stocks: e.target.value ? Number(e.target.value) : null,
              })
            }
          />
        </div>
        {isEmpty ? (
          <p className="text-red-500 text-center pt-2 mb-0">
            please fill in atleast one field.
          </p>
        ) : (
          <p className="text-red-500 text-center p-4 mb-0"></p>
        )}
        <div className="flex justify-center gap-12 my-4">
          <button
            type="submit"
            className="py-2 px-4 rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-500"
          >
            add item
          </button>
          <button
            type="button"
            className="py-2 px-4 rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-500"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default AddItemModal;
