import MyTable from "./mytable/MyTable.tsx";
import AddItemButton from "./buttons/AddItemButton";
import { useGetItems } from "../shared/hooks/queryHooks";

const TableView = ({ openAddItemModal }: { openAddItemModal: () => void }) => {
  const { data } = useGetItems();

  return (
    <div className="flex flex-col  ">
      <div className="flex justify-between mb-2">
        <div></div>
        <AddItemButton onOpenAddItem={openAddItemModal} data={data} />
      </div>
      <div className="relative flex">
        <MyTable />
        <div></div>
      </div>
    </div>
  );
};

export default TableView;
