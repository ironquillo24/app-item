import { type TItems } from "../shared/types";

const LowOnStock = ({ data }: { data: TItems[] | undefined }) => {
  const sortedDataByStocks = data?.slice().sort((a, b) => {
    if (a.stocks === null || b.stocks === null) {
      return 0;
    }
    return a.stocks - b.stocks;
  });

  const lowStockItems = sortedDataByStocks?.filter((item) => {
    if (item.stocks !== null) {
      if (item.stocks < 10) return true;
    }
    return false;
  });
  return (
    <div className=" mt-5 lg:mt-0 rounded-lg min-h-[120px] max-h-[120px]  lg:max-h-[250px] shadow-lg ">
      <h2 className="text-center font-medium text-[16px] shadow-md w-[300px] mb-2  bg-white">
        Low on Stock
      </h2>
      <div className="grid grid-cols-2 text-center px-8 mb-2">
        <div className="font-medium">Product</div>
        <div className="font-medium">Stocks</div>
      </div>
      {lowStockItems === undefined || lowStockItems?.length === 0 ? (
        <div className="text-center p-2 ">All items are in stock.</div>
      ) : (
        <div className="max-h-[65px] lg:max-h-[180px] px-8 overflow-auto bg-white bg-opacity-10">
          {lowStockItems?.map((item) => (
            <div
              className="grid grid-cols-2 *:text-center hover:font-bold"
              key={item.id}
            >
              <div>{item.name}</div>
              <div>{item.stocks}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default LowOnStock;
