export interface GeoLocation {
  id: number;
  name: string;
  country: string;
  admin1?: string;
  latitude: number;
  longitude: number;
}

export interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
  time: string;
}
