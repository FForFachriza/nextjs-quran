import { create } from "zustand";

interface searchstore {
  isSearch: boolean;
  setSearch: () => void;
}
export const useSearchStore = create<searchstore>((set) => ({
  isSearch: false,
  setSearch: () => set((state) => ({ isSearch: !state.isSearch })),
}));
