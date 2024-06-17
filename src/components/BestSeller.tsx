import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BestSeller = () => {
  const data = [
    { name: "Iced Coffee", sold: 103 },
    { name: "Fries", sold: 99 },
    { name: "Carbonara", sold: 82 },
    { name: "My Burger", sold: 78 },
    { name: "Caesar Salad", sold: 53 },
  ];
  return (
    <div className="mt-5">
      <div>
        <h2 className="flex pb-2 font-medium rounded-md justify-center items-center shadow-md bg-white">
          Best Sellers
        </h2>
      </div>
      <div className="  w-[300px] h-[20px] lg:mt-0  min-h-[120px] rounded-md lg:h-[260px] shadow-lg bg-white bg-opacity-50">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={50}
            height={50}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={1} />
            <YAxis dataKey="sold" />
            <Tooltip />
            <Bar
              dataKey="sold"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default BestSeller;
