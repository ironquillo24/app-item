import { type TItems } from "../../shared/types";
type AddItemButtonProps = {
  onOpenAddItem: () => void;
  data: TItems[] | undefined;
};

const AddItemButton = ({ onOpenAddItem, data }: AddItemButtonProps) => {
  const isData = data?.length === 0;
  return (
    <button
      type="button"
      className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 relative"
      onClick={onOpenAddItem}
    >
      Add Item
      {isData && (
        <div className="absolute bg-blue-500 p-2 rounded-full animate-ping top-0 right-0"></div>
      )}
    </button>
  );
};

export default AddItemButton;
