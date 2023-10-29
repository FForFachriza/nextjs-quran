"use client";

import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon, TextAlignLeftIcon } from "@radix-ui/react-icons";
import { useSearchStore } from "@/store/useSearch";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function NavbarComponent() {
  const { setSearch } = useSearchStore.getState();

  return (
    <>
      <nav className="flex flex-row w-full justify-between p-4 items-center">
        <Sheet>
          <SheetTrigger>
            <TextAlignLeftIcon className="h-6 w-6 text-[#672cbc]" />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>{/* TODO: SIDEBAR */}</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <p className="text-[#672cbc] font-bold text-xl">Quran App</p>
        <MagnifyingGlassIcon onClick={() => setSearch()} className="h-6 w-6 text-[#672cbc]" />
      </nav>
    </>
  );
}
