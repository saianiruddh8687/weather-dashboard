import { useEffect, useState } from "react";

import useDebounce from "./useDebounce";
import { searchCities } from "../services/api/geocoding";

export default function useCitySearch(
  query: string
) {
  const debounced = useDebounce(query);

  const [results, setResults] = useState([]);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (debounced.length < 2) {
      setResults([]);
      return;
    }

    async function fetchCities() {
      try {
        setLoading(true);

        const cities =
          await searchCities(debounced);

        setResults(cities);
      } finally {
        setLoading(false);
      }
    }

    fetchCities();
  }, [debounced]);

  return {
    results,
    loading,
  };
}
