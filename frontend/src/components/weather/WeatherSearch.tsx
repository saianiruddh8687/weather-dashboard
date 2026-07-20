import { useState } from "react";

import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";

import useCitySearch from "../../hooks/useCitySearch";
import { useLocationStore } from "../../store/location.store";

export default function WeatherSearch() {
  const [query, setQuery] = useState("");

  const { results, loading } = useCitySearch(query);

  const setLocation = useLocationStore(
    (state) => state.setLocation
  );

  function handleSelect(city: any) {
    setLocation(city);
    setQuery(city.name);
  }

  return (
    <div className="relative max-w-xl">
      <SearchInput
        value={query}
        onChange={setQuery}
      />

      {loading && (
        <p className="mt-2 text-sm text-slate-400">
          Searching...
        </p>
      )}

      {!loading && query.length > 1 && (
        <SearchSuggestions
          results={results}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}
