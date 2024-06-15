import MyTable from "./mytable/MyTable.tsx";
import AddItemButton from "./buttons/AddItemButton";
import { useGetItems } from "../shared/hooks/queryHooks";
import { useState, useEffect, useRef } from "react";

const TableView = ({ openAddItemModal }: { openAddItemModal: () => void }) => {
  const { data } = useGetItems();
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [isInputActive, setIsInputActive] = useState({
    state: false,
    count: 0,
  });

  //Check if an input element is active within the table and
  //notify user of changes being saved
  useEffect(() => {
    if (
      tableContainerRef?.current?.contains(document.activeElement) &&
      document.activeElement instanceof HTMLInputElement &&
      isInputActive.count === 0
    ) {
      setIsInputActive({ state: true, count: 1 });
    }
  }, [document.activeElement]);

  return (
    <div className="flex flex-col  ">
      <div className="flex justify-between mb-2">
        <div></div>
        <AddItemButton onOpenAddItem={openAddItemModal} data={data} />
      </div>
      <div className="relative" ref={tableContainerRef}>
        <MyTable
          isInputActive={isInputActive}
          setIsInputActive={setIsInputActive}
        />
      </div>
    </div>
  );
};

export default TableView;
