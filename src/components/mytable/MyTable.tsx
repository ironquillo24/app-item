import "./MyTable.css";
import { useGetItems } from "../../shared/hooks/queryHooks";
import { useUpdateItem } from "../../shared/hooks/mutationHooks";
import { tableHeader } from "./Column";
import RemoveItemButton from "../buttons/RemoveItemButton";
import TableSkeleton from "./TableSkeleton";
import { GridLoader } from "react-spinners";
import RemoveItemModal from "../RemoveItemModal";
import { useRef, useState, useContext } from "react";
import ChangeNote from "../ChangeNote";
import { homeContext } from "../../pages/Home";

const MyTable = () => {
  const { data, isError, error } = useGetItems();
  const updateItem = useUpdateItem();
  const [idForDelete, setIdForDelete] = useState<string>("");
  const removeItemModalRef = useRef<HTMLDialogElement>(null);
  const [notifyChange, setNotifyChange] = useState({
    notify: false,
    isNotified: false,
  });
  const { setCatSort } = useContext(homeContext);

  // query data is undefined, return loading state
  if (!data) {
    return (
      <TableSkeleton className="animate-pulse">
        {<GridLoader color="#36d7b7" />}
      </TableSkeleton>
    );
  }

  //empty array means user is yet to add an item
  if (data.length === 0)
    return <TableSkeleton>Add new item to get started</TableSkeleton>;

  //error occurred
  if (isError) {
    return (
      <TableSkeleton>Something went wrong... {String(error)}</TableSkeleton>
    );
  }

  //update data base on change of individual input fields
  const onInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyName = e.target.name as
      | "category"
      | "name"
      | "option"
      | "price"
      | "cost"
      | "stocks";
    updateItem.mutate({
      id: String(e.target.parentElement?.id),
      key: keyName,
      value:
        keyName === "category" || keyName === "name" || keyName === "option"
          ? e.target.value.trim()
          : Number(e.target.value),
    });
    setCatSort({ isSorted: false, goSort: false });

    //notify user when applying changes to table only once per session
    if (!notifyChange.notify && !notifyChange.isNotified) {
      setNotifyChange({ notify: true, isNotified: true });
    }
  };

  //remove focus on enter key
  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  return (
    <div>
      <div className=" border rounded border-slate-800 m-0 bg-white bg-opacity-20 w-[400px] h-[330px] sm:w-[600px]  md:w-[700px] lg:h-[480px] xl:w-[910px] overflow-auto">
        <div className="min-w-[900px]">
          <div className="table-grid font-bold py-2 border-b-2 border-emerald-500 bg-emerald-500 text-white">
            {tableHeader.map((column, index) => (
              <div key={index} className="px-4">
                {column}
              </div>
            ))}
          </div>

          <form className="overflow-y-scroll min-w-[900px]">
            <ul>
              {data.map((item, index) => (
                <li
                  id={item.id}
                  key={item.id}
                  className="table-grid hover:bg-slate-100 border  my-2 mx-1 *:bg-white *:text-center *:py-1 *:min-w-24 *:hover:border hover:shadow-md shadow-sm *:hover:rounded-lg *:border opacity-100"
                >
                  <div>{index + 1}</div>
                  <input
                    name="category"
                    type="text"
                    defaultValue={item.category ?? ""}
                    className="focus:bg-green-200"
                    onBlur={onInputBlur}
                    onKeyDown={onInputKeyDown}
                    key={item.category + "_category" + item.id}
                  />
                  <input
                    name="name"
                    type="text"
                    defaultValue={item.name ?? ""}
                    className="focus:bg-green-200"
                    onBlur={onInputBlur}
                    onKeyDown={onInputKeyDown}
                    key={item.name + "_name" + item.id}
                  />
                  <input
                    name="option"
                    type="text"
                    defaultValue={item.option ?? ""}
                    className="focus:bg-green-200"
                    onBlur={onInputBlur}
                    onKeyDown={onInputKeyDown}
                    key={item.option + "_option" + item.id}
                  />

                  <input
                    name="cost"
                    type="number"
                    defaultValue={item.cost ?? ""}
                    min={0}
                    className="focus:bg-green-200"
                    onBlur={onInputBlur}
                    onKeyDown={onInputKeyDown}
                    key={item.cost + "_cost" + item.id}
                  />
                  <input
                    name="price"
                    type="number"
                    defaultValue={item.price ?? ""}
                    min={0}
                    className="focus:bg-green-200"
                    onBlur={onInputBlur}
                    onKeyDown={onInputKeyDown}
                    key={item.price + "_price" + item.id}
                  />
                  <input
                    name="stocks"
                    type="number"
                    defaultValue={item.stocks ?? ""}
                    min={0}
                    className="focus:bg-green-200"
                    onBlur={onInputBlur}
                    onKeyDown={onInputKeyDown}
                    key={item.stocks + "_stocks" + item.id}
                  />
                  <div>
                    <RemoveItemButton
                      id={item.id}
                      modalRef={removeItemModalRef}
                      setter={setIdForDelete}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-between bg-white border border-slate-800 rounded shadow-md py-1 px-2 ">
        <div>No. of rows: {data.length}</div>

        <ChangeNote
          notifyChange={notifyChange}
          setNotifyChange={setNotifyChange}
        />
      </div>
      <RemoveItemModal
        modalRef={removeItemModalRef}
        idForDelete={idForDelete}
      />
    </div>
  );
};

export default MyTable;
