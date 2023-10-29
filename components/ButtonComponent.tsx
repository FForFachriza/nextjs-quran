"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useNameStore } from "@/store/useName";

export default function ButtonComponent() {
  const { toast } = useToast();
  const [name, setName] = useState<string>("");
  const router = useRouter();
  const { setName: setGlobalName, name: globalName } = useNameStore.getState();

  const setGlobalNameHandler = async () => {
    setGlobalName(name);

    toast({
      title: "Nama Sukses Di Set!",
      description: `Halo ${name} Selamat Datang Di Website Quran!`,
    });

    router.push("/main");
  };

  useEffect(() => {
    if (globalName) {
      router.push("/main");
    }
  }, [globalName]);

  return (
    <Dialog>
      <DialogTrigger className="bg-[#f9b091] hover:bg-[#f89469] transition-colors duration-300 rounded-full absolute bottom-8  text-white font-bold py-5 px-8">
        Get Started
      </DialogTrigger>
      <DialogContent className="w-[calc(100%-4rem)]">
        <DialogHeader>
          <DialogTitle className="mb-5">Sebelum Masuk Silahkan Masukkan Nama Terlebih Dahulu</DialogTitle>
          <section className="flex flex-col items-start">
            <Label>Nama</Label>
            <Input onChange={(e) => setName(e.target.value)} value={name} className="my-4" />
            <Button disabled={name.length < 3} onClick={setGlobalNameHandler} className="w-full">
              Done
            </Button>
          </section>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
