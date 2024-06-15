import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
const Header = () => {
  return (
    <div className="bg-white flex justify-between items-center border-b w-screen border-slate-300 pb-2">
      <div className=" pb-2">
        <Link to="/" className="text-3xl font-bold pl-2 italic">
          My App
        </Link>
      </div>
      <CircleUserRound size={40} className="mr-4" />
    </div>
  );
};

export default Header;
