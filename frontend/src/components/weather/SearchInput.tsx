import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div className="relative">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={18}
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search city..."
        className="w-full rounded-2xl border border-white/10 bg-white/10 py-4 pl-12 pr-4 text-white outline-none backdrop-blur-xl placeholder:text-slate-400 focus:border-sky-400"
      />
    </div>
  );
}
