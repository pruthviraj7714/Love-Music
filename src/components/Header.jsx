import { Link } from "react-router-dom";
import Artists from "../data/artistdata";

const Header = () => {
  return (
    <div className="fixed w-full h-16 border top-0 left-0 border-b-black shadow-xl z-10 bg-pink-50">
      <div className="flex justify-between items-center p-2">
        <div className="flex justify-center items-center font-bold">
          <Link to={"/"} className="text-xl font-serif">
            Love<span className="text-pink-400 ml-1">Music</span>
          </Link>
        </div>
        <div className="">
          <ul className="flex justify-between items-center gap-5">
            <li className="font-semibold text-lg cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="font-semibold text-lg cursor-pointer">
              <Link
                to={'/new_release'}
              >
                New Release
              </Link>
            </li>
            <li className="font-semibold text-lg cursor-pointer">
              <Link to={"/genras"}>Genres</Link>
            </li>
            <li className="font-semibold text-lg cursor-pointer">
              <Link
                to={`/artist/${
                  Artists[Math.floor(Math.random() * Artists.length)].id
                }`}
              >
                Artists
              </Link>
            </li>
            <li className="font-semibold text-lg cursor-pointer">
                About us
            </li>
          </ul>
        </div>
        <div className="text-3xl">❤</div>
      </div>
    </div>
  );
};

export default Header;
