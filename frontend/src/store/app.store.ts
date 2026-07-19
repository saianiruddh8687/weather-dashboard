import { create } from "zustand";

export type TemperatureUnit = "celsius" | "fahrenheit";

interface AppState {
  theme: "dark" | "light";

  unit: TemperatureUnit;

  loading: boolean;

  error: string | null;

  setTheme: (theme: "dark" | "light") => void;

  toggleTheme: () => void;

  setUnit: (unit: TemperatureUnit) => void;

  setLoading: (loading: boolean) => void;

  setError: (error: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: "dark",

  unit: "celsius",

  loading: false,

  error: null,

  setTheme: (theme) => set({ theme }),

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    })),

  setUnit: (unit) => set({ unit }),

  setLoading: (loading) => set({ loading }),

  setError: (error) => set({ error }),
}));
