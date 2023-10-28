import { create } from "zustand";

interface searchstore {
  search: string;
  setSearch: (val: string) => void;
}
export const useSearchStore = create<searchstore>((set) => ({
  search: "",
  setSearch: (val: string) => set({ search: val }),
}));
