import { useState } from "react";

import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";

const demoResults = [
  {
    id: 1,
    name: "Hyderabad",
    admin1: "Telangana",
    country: "India",
    latitude: 17.38,
    longitude: 78.48,
  },
  {
    id: 2,
    name: "Chennai",
    admin1: "Tamil Nadu",
    country: "India",
    latitude: 13.08,
    longitude: 80.27,
  },
];

export default function WeatherSearch() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative max-w-xl">
      <SearchInput
        value={query}
        onChange={setQuery}
      />

      {query.length > 1 && (
        <SearchSuggestions
          results={demoResults}
          onSelect={(city) => {
            console.log(city);
            setQuery(city.name);
          }}
        />
      )}
    </div>
  );
}
