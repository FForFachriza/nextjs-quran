"use client";

import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon, TextAlignLeftIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useSearchStore } from "@/store/useSearch";
import { useDebounce } from "use-debounce";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavbarComponent() {
  const [text, setText] = useState<string>("");
  const [searchDebounced] = useDebounce(text, 1000);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const { search: getSearch, setSearch } = useSearchStore.getState();

  useEffect(() => {
    setSearch(searchDebounced);
    console.log(searchDebounced);
  }, [searchDebounced]);

  return (
    <>
      <nav className="flex flex-row w-full justify-between py-2 px-4 items-center">
        <Sheet>
          <SheetTrigger>
            <TextAlignLeftIcon className="h-6 w-6 text-[#672cbc]" />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
              {/* TODO: SIDEBAR */}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <p className="text-[#672cbc] font-bold text-xl">Quran App</p>
        <MagnifyingGlassIcon onClick={() => setSearchActive((prev) => !prev)} className="h-6 w-6 text-[#672cbc]" />
      </nav>
      {searchActive ? (
        <section className="px-4">
          <Input onChange={(e) => setText(e.target.value)} className="mt-2" placeholder="Cari Surah" />
        </section>
      ) : null}
    </>
  );
}
