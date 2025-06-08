function SearchBar({ name, onNameChange, kiRange, onKiRangeChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search by name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="number"
        placeholder="Min Ki"
        onChange={(e) => onKiRangeChange({ ...kiRange, min: e.target.value })}
        className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="number"
        placeholder="Max Ki"
        onChange={(e) => onKiRangeChange({ ...kiRange, max: e.target.value })}
        className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
}

export default SearchBar;
