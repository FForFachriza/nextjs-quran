"use client";

import { useTheme } from "next-themes";
import { MagnifyingGlassIcon, TextAlignLeftIcon } from "@radix-ui/react-icons";
import { useSearchStore } from "@/store/useSearch";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function NavbarComponent() {
  const { setSearch } = useSearchStore.getState();
  const { setTheme } = useTheme();

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
                      <Button className="flex w-full justify-start my-2" variant={"outline"} onClick={() => setTheme("dark")}>
                        Dark Mode
                      </Button>
                      <Button className="flex w-full justify-start my-2" variant={"outline"} onClick={() => setTheme("light")}>
                        Light Mode
                      </Button>
                      <Button className="flex w-full justify-start my-2" variant={"outline"} onClick={() => setTheme("system")}>
                        System Mode
                      </Button>
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

function AccordionComponent({ setTheme }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Theme</AccordionTrigger>
        <AccordionContent>
          <section className="flex flex-col w-full items-start">
            <Button className="flex w-full justify-start" onClick={() => setTheme("dark")}>
              Dark Mode
            </Button>
            <Button onClick={() => setTheme("light")}>Light Mode</Button>
            <Button onClick={() => setTheme("system")}>System Mode</Button>
          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
