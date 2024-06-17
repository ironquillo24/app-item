import { useGetItems } from "../shared/hooks/queryHooks";
import { useState, useEffect, useContext } from "react";
import CardItem from "./CardItem";
import AddItemButton from "./buttons/AddItemButton";
import { ArrowDownAZ, BadgeInfo } from "lucide-react";
import { type TItems } from "../shared/types";
import { homeContext } from "../pages/Home";

const CardView = () => {
  const { catSort, setCatSort } = useContext(homeContext);
  const { data } = useGetItems();

  const [sortedData, setSortedData] = useState<TItems[] | undefined>(data);

  //sort data
  useEffect(() => {
    if (data) {
      if (!catSort.isSorted) {
        const tempData = data.slice();
        sortData(tempData);
        setSortedData(tempData);
        setCatSort({ ...catSort, isSorted: true });
      }
    }
  }, [data, catSort.goSort]);

  return (
    <div>
      <div className="flex justify-between items-center shadow-md py-2">
        <div className="flex">
          <button
            type="button"
            onClick={() =>
              setCatSort({ isSorted: false, goSort: !catSort.goSort })
            }
            className="flex ml-2 hover:-translate-y-0.5"
          >
            <ArrowDownAZ />
            <span>&nbsp;sort</span>
          </button>
          <div className="flex group">
            <BadgeInfo
              className="ml-2 translate-y-0.5"
              color="#4046f2"
              size={18}
            />
            <span className="ml-2 border border-slate-400 p-1 -translate-y-1 rounded-lg scale-0 group-hover:scale-100 transition-all duration-300">
              sort by category
            </span>
          </div>
        </div>

        <div className="mr-2">
          <AddItemButton data={data} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:h-[500px]   xl:min-w-[1100px] rounded-lg shadow-lg bg-white bg-opacity-5 overflow-auto">
        {sortedData?.map((item) => (
          <div
            key={item.id}
            className="w-[350px] h-[200px] flex items-center justify-center"
          >
            <CardItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;

function sortData(data: TItems[] | undefined) {
  data?.sort((a, b) => {
    if (a.category === null || b.category === null) {
      return 0;
    }
    const aCategory = a?.category?.toLowerCase();
    const bCategory = b?.category?.toLowerCase();
    if (aCategory < bCategory) {
      return -1;
    }
    if (aCategory > bCategory) {
      return 1;
    }
    return 0;
  });
}
