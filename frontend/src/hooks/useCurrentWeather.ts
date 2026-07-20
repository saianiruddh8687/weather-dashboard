import { useEffect, useState } from "react";

import { getCurrentWeather } from "../services/api/weather";
import { useLocationStore } from "../store/location.store";

export default function useCurrentWeather() {
  const location = useLocationStore(
    (state) => state.selectedLocation
  );

  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!location) return;

    async function loadWeather() {
      try {
        setLoading(true);

        const data = await getCurrentWeather(
          location.latitude,
          location.longitude
        );

        setWeather(data);
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
