/* eslint-disable @next/next/no-img-element */
import { Separator } from "@/components/ui/separator";

interface HeaderDetailProps {
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
}

export default function HeaderDetail({ nama_latin, jumlah_ayat, tempat_turun, arti }: HeaderDetailProps) {
  return (
    <section className="flex flex-col z-[1] justify-between bg-gradient-to-br from-[#df98fa] to-[#9055ff] h-[220px] rounded-lg text-white relative overflow-hidden p-5 ">
      <div className="flex flex-col items-center z-10">
        <p className="text-xl">{nama_latin}</p>
        <p className="text-sm">{arti}</p>
        <Separator className="w-56 my-4 bg-white" />
        <p className="uppercase text-sm">
          {tempat_turun} - {jumlah_ayat} Ayat
        </p>
        <img className="my-4" src="/bismillah.svg" alt="" />
      </div>
      <div className="-translate-y-[180px] opacity-20 z-[2] translate-x-[80px]">
        <img className="h-[300px]" src="/quran.svg" alt="" />
      </div>
    </section>
  );
}
