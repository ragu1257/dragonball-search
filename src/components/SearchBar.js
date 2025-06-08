function SearchBar({ name, onNameChange, kiRange, onKiRangeChange }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
      <input
        type="text"
        placeholder="Search by name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="number"
        placeholder="Min Ki"
        value={kiRange.min}
        onChange={(e) => {
          const value = e.target.value;
          if (!isNaN(value) && Number(value) >= 0) {
            onKiRangeChange({ ...kiRange, min: value });
          }
        }}
        className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="number"
        placeholder="Max Ki"
        value={kiRange.max}
        onChange={(e) => {
          const value = e.target.value;
          if (!isNaN(value) && Number(value) >= 0) {
            onKiRangeChange({ ...kiRange, max: value });
          }
        }}
        className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
}

export default SearchBar;
