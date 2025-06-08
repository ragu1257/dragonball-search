function CharacterCard({ character }) {
  console.log(character);

  return (
    <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl p-5 flex flex-col items-center w-full max-w-sm">
      <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-indigo-100">
        <img
          src={character.image}
          alt={character.name}
          className="object-cover w-full h-full"
        />
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-1">
        {character.name}
      </h2>

      <p className="text-sm text-gray-600 text-center mb-4 line-clamp-3">
        {character.description || "No description available."}
      </p>

      <p className="mt-auto text-sm font-medium text-indigo-600">
        Base Ki: <span className="text-gray-800">{character.ki ?? "N/A"}</span>
      </p>
    </div>
  );
}

export default CharacterCard;
