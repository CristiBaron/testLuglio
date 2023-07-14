import React from "react";
import characters from "./characters";
import ListItem from "./ListItem";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold text-center p-8">Famous Characters</h1>
      <div className="container mx-auto">
        <ul className="grid grid-cols-2 gap-4">
          {characters.map((character) => (
            <ListItem key={character.name} character={character} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
