import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface surahstorage {
  surat: string;
  setSurat: (val: string) => void;
  ayat: number;
  setAyat: (val: number) => void;
}

export const useSurahStorage = create<surahstorage>()(
  persist(
    (set) => ({
      ayat: 0,
      setAyat: (val) => set({ ayat: val }),
      surat: "",
      setSurat: (val) => set({ surat: val }),
    }),
    {
      name: "surah-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
