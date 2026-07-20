import axios from "axios";

import { GEO_BASE_URL } from "./http";

export async function searchCities(
  query: string
) {
  const { data } = await axios.get(
    `${GEO_BASE_URL}/search`,
    {
      params: {
        name: query,
        count: 8,
        language: "en",
        format: "json",
      },
    }
  );

  return data.results ?? [];
}
