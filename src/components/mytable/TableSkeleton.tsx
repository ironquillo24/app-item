import { tableHeader } from "./Column";

type TableSkeletonProps = {
  children: React.ReactNode;
  className?: string;
};
const TableSkeleton = ({ children, className }: TableSkeletonProps) => {
  return (
    <div
      className={`border rounded border-slate-800 m-0  bg-zinc-100 w-[400px] h-[200px] md:h-[500px] md:w-[910px] overflow-x-scroll md:overflow-auto overflow-hidden ${className}`}
    >
      <div className="table-grid font-bold py-2 border-b-2 border-emerald-500 bg-emerald-500 text-white min-w-[900px]">
        {tableHeader.map((column, index) => (
          <div key={index} className="px-4">
            {column}
          </div>
        ))}
      </div>
      <div className="grid place-items-center  h-[120px] md:h-[400px]">
        {children}
      </div>
    </div>
  );
};

export default TableSkeleton;
