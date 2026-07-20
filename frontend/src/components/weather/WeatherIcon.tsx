interface Props {
  code: number;
}

export default function WeatherIcon({ code }: Props) {
  if (code === 0) return <span className="text-7xl">☀️</span>;

  if ([1,2,3].includes(code))
    return <span className="text-7xl">⛅</span>;

  if ([61,63,65,80,81].includes(code))
    return <span className="text-7xl">🌧️</span>;

  if ([71,73,75].includes(code))
    return <span className="text-7xl">❄️</span>;

  if (code === 95)
    return <span className="text-7xl">⛈️</span>;

  return <span className="text-7xl">🌤️</span>;
}
