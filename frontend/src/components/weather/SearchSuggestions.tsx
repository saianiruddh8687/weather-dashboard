import GlassPanel from "../ui/GlassPanel";
import SearchResultItem from "./SearchResultItem";

interface Suggestion {
  id: number;
  name: string;
  country: string;
  admin1?: string;
  latitude: number;
  longitude: number;
}

interface SearchSuggestionsProps {
  results: Suggestion[];
  onSelect: (item: Suggestion) => void;
}

export default function SearchSuggestions({
  results,
  onSelect,
}: SearchSuggestionsProps) {
  if (!results.length) return null;

  return (
    <GlassPanel className="absolute left-0 right-0 top-full mt-2 p-2">
      <div className="space-y-1">
        {results.map((item) => (
          <SearchResultItem
            key={item.id}
            {...item}
            onClick={() => onSelect(item)}
          />
        ))}
      </div>
    </GlassPanel>
  );
}
