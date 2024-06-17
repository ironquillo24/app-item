import { useContext } from "react";
import { homeContext } from "../pages/Home";
import { useDeleteItem } from "../shared/hooks/mutationHooks";

type RemoveItemModalProps = {
  modalRef: React.RefObject<HTMLDialogElement>;
  idForDelete: string;
};

const RemoveItemModal = ({ modalRef, idForDelete }: RemoveItemModalProps) => {
  const deleteItem = useDeleteItem();
  const { setIsMutating, setCatSort, isMutating } = useContext(homeContext);
  const onCancel = () => {
    modalRef.current?.close();
  };

  const onConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsMutating(true);
      await deleteItem.mutate(idForDelete);
      setIsMutating(false);
      setCatSort({ isSorted: false, goSort: false });
      modalRef.current?.close();
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error("Something went wrong");
      }
    }
  };
  return (
    <dialog ref={modalRef} className="border rounded-lg shadow-lg p-4">
      <form onSubmit={onConfirm}>
        <h2 className="font-bold p-2 text-xl text-red-500">
          Are you sure you want to remove this item?
        </h2>
        <div className="p-4">
          Once the item has been deleted, there's no going back.
        </div>
        <div className="flex justify-center gap-12 mb-4">
          <button
            type="submit"
            disabled={isMutating}
            className="py-2 px-4 min-w-32 rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700"
          >
            delete anyway
          </button>
          <button
            type="button"
            className="py-2 px-4 min-w-32 rounded-lg text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default RemoveItemModal;
