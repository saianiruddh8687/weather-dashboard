interface WeatherMetricProps {
  label: string;
  value: string | number;
}

export default function WeatherMetric({
  label,
  value,
}: WeatherMetricProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-slate-400">
        {label}
      </p>

      <h3 className="mt-2 text-2xl font-semibold">
        {value}
      </h3>
    </div>
  );
}
