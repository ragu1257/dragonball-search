import { useEffect, useState } from "react";
import { fetchByName, filterByKi } from "../services/api";

function useCharacters(name, { min, max }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchByName(name);

        const filtered = filterByKi(
          data,
          Number(min) || 0,
          Number(max) || Infinity
        );
        if (isMounted) setCharacters(filtered);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, [name, min, max]);
  return { characters, loading, error };
}

export default useCharacters;
