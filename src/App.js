import SearchBar from "./components/SearchBar";
import CharacterList from "./components/CharacterList";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-center text-indigo-600">
          DragonBall Character Search
        </h1>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <SearchBar />
        <CharacterList />
      </main>
    </div>
  );
}

export default App;
