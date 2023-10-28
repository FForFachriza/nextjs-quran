"use client";

import { MagnifyingGlassIcon, TextAlignLeftIcon } from "@radix-ui/react-icons";

export default function NavbarComponent() {
  return (
    <nav className="flex flex-row w-full justify-between py-2 px-4 items-center">
      <TextAlignLeftIcon className="h-6 w-6 text-[#672cbc]" />
      <p className="text-[#672cbc] font-bold text-xl">Quran App</p>
      <MagnifyingGlassIcon className="h-6 w-6 text-[#672cbc]" />
    </nav>
  );
}
