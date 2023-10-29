"use client";

import { useTheme } from "next-themes";
import { MagnifyingGlassIcon, TextAlignLeftIcon } from "@radix-ui/react-icons";
import { useSearchStore } from "@/store/useSearch";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function NavbarComponent() {
  const { setSearch } = useSearchStore.getState();
  const { setTheme, theme } = useTheme();

  return (
    <nav className="flex flex-row justify-between container p-4 items-center">
      <Sheet>
        <SheetTrigger>
          <TextAlignLeftIcon className="h-6 w-6 text-[#672cbc]" />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Theme</AccordionTrigger>
                  <AccordionContent>
                    <section className="flex flex-col w-full items-start">
                      <Button
                        className="flex w-full justify-start my-2"
                        variant={"outline"}
                        onClick={() => setTheme("dark")}
                      >
                        Dark Mode
                      </Button>
                      <Button
                        className="flex w-full justify-start my-2"
                        variant={"outline"}
                        onClick={() => setTheme("light")}
                      >
                        Light Mode
                      </Button>
                      <Button
                        className="flex w-full justify-start my-2"
                        variant={"outline"}
                        onClick={() => setTheme("system")}
                      >
                        System Mode
                      </Button>
                      <p className="text-center w-full my-2">Currently Active: {theme}</p>
                    </section>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Repository</AccordionTrigger>
                  <AccordionContent>
                    <section className="flex flex-col w-full items-start">
                      <Link className="w-full " href={"https://github.com/FForFachriza/nextjs-quran"}>
                        <Button className="flex w-full justify-start my-2" variant={"outline"}>
                          Github
                        </Button>
                      </Link>
                      <Link className="w-full" href={"https://quran-api.santrikoding.com/"}>
                        <Button className="flex w-full justify-start my-2" variant={"outline"}>
                          API 
                        </Button>
                      </Link>
                    </section>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <p className="text-[#672cbc] font-bold text-xl">Quran App</p>
      <MagnifyingGlassIcon onClick={() => setSearch()} className="h-6 w-6 text-[#672cbc]" />
    </nav>
  );
}
