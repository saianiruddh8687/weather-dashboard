
import WeatherSearch from "../components/weather/WeatherSearch";
import CurrentWeatherCard from "../components/weather/CurrentWeatherCard";

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6">
      <WeatherSearch />

      <CurrentWeatherCard />
    </div>
  );
}
