import { useEffect, useState } from "react";

import { getCurrentWeather } from "../services/api/weather";
import { useLocationStore } from "../store/location.store";

export default function useCurrentWeather() {
  const location = useLocationStore(
    (state) => state.selectedLocation
  );

  import type { CurrentWeather } from "../services/types/weather";

  const [weather, setWeather] = useState<CurrentWeather | null>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!location) return;

const currentLocation = location;

async function loadWeather() {
  const data = await getCurrentWeather(
    currentLocation.latitude,
    currentLocation.longitude
  );
 }

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
