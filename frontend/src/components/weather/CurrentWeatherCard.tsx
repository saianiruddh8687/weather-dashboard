import Card from "../ui/Card";

import WeatherMetric from "./WeatherMetric";

import useCurrentWeather from "../../hooks/useCurrentWeather";

export default function CurrentWeatherCard() {
  const {
    weather,
    loading,
    location,
  } = useCurrentWeather();

  if (!location) {
    return (
      <Card>
        Select a city to view weather.
      </Card>
    );
  }

  if (loading || !weather) {
    return (
      <Card>
        Loading weather...
      </Card>
    );
  }

  return (
    <Card className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">
          {location.name}
        </h2>

        <p className="text-slate-400">
          {location.country}
        </p>
      </div>

      <div className="text-6xl font-bold">
        {weather.temperature}°C
      </div>

      <div className="grid grid-cols-2 gap-4">
        <WeatherMetric
          label="Wind Speed"
          value={`${weather.windspeed} km/h`}
        />

        <WeatherMetric
          label="Wind Direction"
          value={`${weather.winddirection}°`}
        />
      </div>
    </Card>
  );
}
