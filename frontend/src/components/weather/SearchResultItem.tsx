interface SearchResultItemProps {
  name: string;
  country: string;
  admin1?: string;
  latitude: number;
  longitude: number;
  onClick?: () => void;
}

export default function SearchResultItem({
  name,
  country,
  admin1,
  latitude,
  longitude,
  onClick,
}: SearchResultItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-white/10"
    >
      <div className="font-medium text-white">
        {name}
      </div>

      <div className="text-sm text-slate-400">
        {admin1 ? `${admin1}, ` : ""}
        {country}
      </div>

      <div className="mt-1 text-xs text-slate-500">
        {latitude.toFixed(2)}, {longitude.toFixed(2)}
      </div>
    </button>
  );
}
