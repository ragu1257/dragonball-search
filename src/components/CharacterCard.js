function CharacterCard() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        Character Name
      </h2>
      <p className="text-gray-600 mb-4 text-center">Description</p>
      <p className="mt-auto text-indigo-600 font-bold">
        Base Ki: <span className="text-gray-800">0</span>
      </p>
    </div>
  );
}

export default CharacterCard;
