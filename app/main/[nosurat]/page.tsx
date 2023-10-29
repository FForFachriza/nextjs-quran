"use client";

import NavbarDetail from "@/app/main/[nosurat]/partials/NavbarDetail";
import HeaderDetail from "@/app/main/[nosurat]/partials/HeaderDetail";
import { useFetchSurahById } from "@/lib/fetchSurah";
import { Skeleton } from "@/components/ui/skeleton";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function SuratDetail({ params }: { params: { nosurat: number } }) {
  const { nosurat } = params;
  const { data, isError, isLoading } = useFetchSurahById(nosurat);

  return (
    <main className="px-4 mb-36 container">
      {isLoading ? (
        <>
          <Skeleton className="h-[220px] my-8 rounded-lg" />
          {Array(10)
            .fill("")
            .map((_val, i) => (
              <Skeleton className="w-full h-14 my-4" key={i} />
            ))}
        </>
      ) : (
        <>
          <NavbarDetail namaSurat={data.nama_latin} />
          <HeaderDetail
            arti={data.arti}
            tempat_turun={data.tempat_turun}
            jumlah_ayat={data.jumlah_ayat}
            nama_latin={data.nama_latin}
          />

          {data.ayat.map((val: any, i: number) => (
            <section key={i}>
              <div className="flex flex-row bg-slate-200 dark:bg-slate-700 rounded-lg p-2 my-4 w-full">
                <div className="w-8 h-8 text-center bg-[#672cbc] rounded-full flex items-center justify-center text-white">
                  {val.nomor}
                </div>
              </div>
              <p className="text-[#672cbc] text-2xl text-right font-semibold">{val.ar}</p>
              <section className="flex flex-col">
                <p dangerouslySetInnerHTML={{ __html: val.tr }} className="font-bold my-4"></p>
                <p>{val.idn}</p>
              </section>
            </section>
          ))}

          <section className="fixed bottom-6 left-0 shadow container right-0">
            <AudioPlayer autoPlay src={data.audio} />
          </section>
        </>
      )}
    </main>
  );
}
