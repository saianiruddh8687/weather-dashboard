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
        current_weather: true,
      },
    }
  );

  return data.current_weather;
}
