import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface namestore {
  name: string;
  setName: (val: string) => void;
  surat: string;
  setSurat: (val: string) => void;
  ayat: number;
  setAyat: (val: number) => void;
}
// export const useName = create<namestore>((set) => ({
//   name: "",
//   setName: (val) => set({ name: val }),
// }));

export const useNameStore = create<namestore>()(
  persist(
    (set) => ({
      name: "",
      setName: (val) => set({ name: val }),
      ayat: 0,
      setAyat: (val) => set({ ayat: val }),
      surat: "",
      setSurat: (val) => set({ surat: val }),
    }),
    {
      name: "name-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
