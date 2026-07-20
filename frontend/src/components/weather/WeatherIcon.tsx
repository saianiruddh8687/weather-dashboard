interface WeatherIconProps {
  code: number;
}

export default function WeatherIcon({
  code,
}: WeatherIconProps) {
  if (code === 0) return <span className="text-7xl">☀️</span>;

  if ([1, 2, 3].includes(code))
    return <span className="text-7xl">⛅</span>;

  if ([45, 48].includes(code))
    return <span className="text-7xl">🌫️</span>;

  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code))
    return <span className="text-7xl">🌧️</span>;

  if ([71, 73, 75].includes(code))
    return <span className="text-7xl">❄️</span>;

  if (code === 95)
    return <span className="text-7xl">⛈️</span>;

  return <span className="text-7xl">🌤️</span>;
}
