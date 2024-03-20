import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function titleTrim(str) {
  if (str.length > 20) {
    return str.substring(0, 20) + "...";
  } else {
    return str;
  }
}

const PlayListCard = (props) => {
  return (
    <Link
      to={`/playlist/${props.id}`}
      className="w-[230px] h-[280px] bg-transparent/10"
    >
      <img
        src={props.img}
        alt="/"
        className="w-full h-[200px] object-cover rounded-md"
      />
      <div className="flex flex-col justify-center text-black text-left font-bold p-2">
        <div className="flex justify-between">
          <h3 className="font-bold">{titleTrim(props.title)}</h3>
          <FaRegPlayCircle size={25} className="mr-2 mt-2 cursor-pointer" />
        </div>
        <h6 className="font-sm text-gray-600">{props.count}</h6>
      </div>
    </Link>
  );
};

export default PlayListCard;
