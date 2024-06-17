import MyTable from "./mytable/MyTable.tsx";
import AddItemButton from "./buttons/AddItemButton";
import { useGetItems } from "../shared/hooks/queryHooks";
import LowOnStock from "./LowOnStock.tsx";

type TableViewProps = {
  openAddItemModal: () => void;
  setCatSort: React.Dispatch<
    React.SetStateAction<{
      isSorted: boolean;
      goSort: boolean;
    }>
  >;
};

const TableView = ({ openAddItemModal, setCatSort }: TableViewProps) => {
  const { data } = useGetItems();

  return (
    <div className="lg:flex lg:gap-4">
      <div className="flex flex-col  ">
        <div className="flex justify-between mb-2">
          <div></div>
          <AddItemButton onOpenAddItem={openAddItemModal} data={data} />
        </div>
        <div className="relative">
          <MyTable setCatSort={setCatSort} />
        </div>
      </div>
      <section className="flex justify-center items-center self-center  ">
        {data === undefined || data?.length < 1 ? (
          <div>you have no items</div>
        ) : (
          <LowOnStock data={data} />
        )}
      </section>
    </div>
  );
};

export default TableView;
