import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ character }) => {
  return (
    <li className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex items-center">
        <img
          src={character.image}
          alt={character.name}
          className="w-16 h-16 rounded-full object-contain shadow-md"
        />
        <p className="ml-4">{character.name}</p>
      </div>
      <div className="mt-4">
        <Link to={`/char/${character.name}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center gap-1">
            More info <img src="/img/tap.png" className="w-5" alt="" />
          </button>
        </Link>
      </div>
    </li>
  );
};

export default ListItem;
