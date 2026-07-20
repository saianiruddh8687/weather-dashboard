import { create } from "zustand";

export interface Location {
  id?: number;
  name: string;
  country: string;
  admin1?: string;
  latitude: number;
  longitude: number;
}

interface LocationState {
  selectedLocation: Location | null;

  setLocation: (location: Location) => void;

  clearLocation: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  selectedLocation: null,

  setLocation: (location) =>
    set({
      selectedLocation: location,
    }),

  clearLocation: () =>
    set({
      selectedLocation: null,
    }),
}));
