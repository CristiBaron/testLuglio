import React from "react";
import characters from "./characters";
import { useParams } from "react-router-dom";
import Header from "./Header";

const Character = () => {
  const { charname } = useParams();

  const character = characters.find(
    (character) => character.name.toLowerCase() === charname.toLowerCase()
  );

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white rounded-lg p-12 shadow-md">
            <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
            <img
              src={character.image}
              alt={character.name}
              className="w-40 h-40 mx-auto my-12 object-contain"
            />
            <p>{character.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
