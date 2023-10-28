import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface namestore {
  name: string;
  setName: (val: string) => void;
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
    }),
    {
      name: "name-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
