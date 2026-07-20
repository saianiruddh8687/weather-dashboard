import { useEffect, useState } from "react";

import { getCurrentWeather } from "../services/api/weather";
import { useLocationStore } from "../store/location.store";
import type { CurrentWeather } from "../services/types/weather";

export default function useCurrentWeather() {
  const location = useLocationStore(
    (state) => state.selectedLocation
  );

  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!location) {
      setWeather(null);
      return;
    }

    const currentLocation = location;

    async function loadWeather() {
      try {
        setLoading(true);

        const data = await getCurrentWeather(
          currentLocation.latitude,
          currentLocation.longitude
        );

        setWeather(data);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, [location]);

  return {
    weather,
    loading,
    location,
  };
          }
