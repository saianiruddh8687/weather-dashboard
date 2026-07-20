import axios from "axios";

import { WEATHER_BASE_URL } from "./http";

export async function getCurrentWeather(
  latitude: number,
  longitude: number
) {
  const { data } = await axios.get(
    `${WEATHER_BASE_URL}/forecast`,
    {
      params: {
        latitude,
        longitude,
        current: [
  "temperature_2m",
  "relative_humidity_2m",
  "apparent_temperature",
  "weather_code",
  "wind_speed_10m",
]
      },
    }
  );

  return data.current_weather;
}
