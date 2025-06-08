import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  if (!characters.length) {
    return (
      <p className="text-center text-gray-500 mt-8">No characters found.</p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {characters.map((char) => (
        <div
          key={char.id}
          className="flex-shrink-0 w-full sm:w-[45%] md:w-[30%]"
        >
          <CharacterCard character={char} />
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
