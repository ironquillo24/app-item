import MyTable from "./mytable/MyTable.tsx";
import AddItemButton from "./buttons/AddItemButton";
import { useGetItems } from "../shared/hooks/queryHooks";
import LowOnStock from "./LowOnStock.tsx";
import BestSeller from "./BestSeller.tsx";
const TableView = () => {
  const { data } = useGetItems();

  return (
    <div className="lg:flex lg:gap-4">
      <div className="flex flex-col  ">
        <div className="flex justify-between mb-2">
          <div></div>
          <AddItemButton data={data} />
        </div>
        <div className="relative">
          <MyTable />
        </div>
      </div>
      <section className="flex gap-4 flex-col sm:flex-row lg:flex-col  justify-center items-center self-center  ">
        {data === undefined || data?.length < 1 ? (
          <div></div>
        ) : (
          <LowOnStock data={data} />
        )}
        <div>
          <BestSeller />
        </div>
      </section>
    </div>
  );
};

export default TableView;
