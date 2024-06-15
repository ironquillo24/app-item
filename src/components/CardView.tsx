import { useGetItems } from "../shared/hooks/queryHooks";
import CardItem from "./CardItem";
import AddItemButton from "./buttons/AddItemButton";

const CardView = ({ openAddItemModal }: { openAddItemModal: () => void }) => {
  const { data } = useGetItems();

  const sortedData = data?.slice().sort((a, b) => {
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

  return (
    <div>
      <div className="flex justify-between shadow-md py-2">
        <div></div>
        <div className="mr-2">
          <AddItemButton onOpenAddItem={openAddItemModal} data={data} />
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
