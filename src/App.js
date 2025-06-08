import { useState } from "react";
import SearchBar from "./components/SearchBar";
import useDebounce from "./hooks/useDebounce";
import CharacterList from "./components/CharacterList";
import "./App.css";
import useCharacters from "./hooks/useCharacters";

function App() {
  const [name, setName] = useState("");
  const [kiRange, setKiRange] = useState({ min: "", max: "" });
  const debouncedName = useDebounce(name, 500);
  const { characters, loading, error } = useCharacters(debouncedName, kiRange);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-center text-indigo-600">
          DragonBall Character Search
        </h1>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <SearchBar
          name={name}
          onNameChange={setName}
          kiRange={kiRange}
          onKiRangeChange={setKiRange}
        />
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">Error: {error}</p>}
        <CharacterList characters={characters} />
      </main>
    </div>
  );
}

export default App;
