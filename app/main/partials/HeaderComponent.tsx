"use client";

import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useNameStore } from "@/store/useName";
import { useSurahStorage } from "@/store/useSurah";
import { CheckboxIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

export default function HeaderComponent() {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isTextEdited, setIsTextEdited] = useState<boolean>(false);
  const [textEditedVal, setTextEditedVal] = useState<string>("");

  const { name: globalName, setName: setGlobalName } = useNameStore.getState();
  const { surat: globalSurat, ayat: globalAyat } = useSurahStorage.getState();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="flex flex-col ">
      <section className="my-4 flex flex-col font-semibold">
        <h1 className="text-black/40 text-xl">Assalamualaikum</h1>
        {!isClient ? (
          <Skeleton className="h-8 w-[250px]" />
        ) : (
          <div className="flex flex-row items-center">
            {isTextEdited ? (
              <>
                <Input onChange={(e) => setTextEditedVal(e.target.value)} placeholder="Ganti Nama Kamu" />
                <CheckboxIcon
                  onClick={() => {
                    setGlobalName(textEditedVal);
                    setIsTextEdited((prev) => !prev);
                  }}
                  className="w-8 ml-2 h-8"
                />
              </>
            ) : (
              <>
                <h2 className="text-3xl truncate mt-2">{globalName}</h2>
                <Pencil2Icon onClick={() => setIsTextEdited((prev) => !prev)} className="w-4 ml-2 h-4" />
              </>
            )}
          </div>
        )}
      </section>

      <section className="flex flex-row justify-between bg-gradient-to-br from-[#df98fa] to-[#9055ff] h-[150px] rounded-lg text-white relative overflow-hidden p-5 ">
        <div className="w-1/2 flex flex-col justify-between">
          <div className="flex flex-row items-center ">
            <BookIcon height={20} width={21} />
            <h1 className="ml-2">Last Read</h1>
          </div>
          <div>
            {!isClient ? (
              <Skeleton className="h-14 w-[150px]" />
            ) : globalSurat.length > 0 && globalAyat >= 0 ? (
              <section className="flex flex-col">
                <h1>{globalSurat}</h1>
                <h2>Surah No: {globalAyat}</h2>
              </section>
            ) : (
              <p>You haven&apos;t read anything yet.</p>
            )}
          </div>
        </div>
        <div className="translate-x-[30px] translate-y-[30px]">
          <img src="/quran.svg" alt="" />
        </div>
      </section>
    </section>
  );
}

interface BookIconProps {
  className?: string;
  width?: number;
  height?: number;
}
function BookIcon({ className, width, height }: BookIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1102_1182)">
        <path
          d="M18.3437 3.22563H13.4894C12.6779 3.22508 11.8905 3.50093 11.2568 4.00773C10.6231 4.51453 10.1809 5.22205 10.0031 6.01376C9.82487 5.22227 9.38257 4.515 8.74897 4.00827C8.11536 3.50155 7.32817 3.22554 6.51686 3.22563H1.66623C1.2242 3.2258 0.800322 3.40147 0.487758 3.71403C0.175195 4.0266 -0.000475221 4.45048 -0.000640869 4.89251V13.4275C-0.000475221 13.8695 0.175195 14.2934 0.487758 14.606C0.800322 14.9185 1.2242 15.0942 1.66623 15.0944H4.78061C8.32936 15.0944 9.38811 15.9413 9.89498 17.6988C9.91936 17.7963 10.0756 17.7963 10.1031 17.6988C10.6137 15.9419 11.6725 15.0944 15.2175 15.0944H18.3319C18.7739 15.0942 19.1978 14.9185 19.5103 14.606C19.8229 14.2934 19.9986 13.8695 19.9987 13.4275V4.89626C19.9987 4.45572 19.8247 4.03302 19.5145 3.72022C19.2043 3.40743 18.783 3.22988 18.3425 3.22626L18.3437 3.22563ZM8.40248 12.4406C8.40265 12.4566 8.39963 12.4724 8.3936 12.4872C8.38756 12.502 8.37864 12.5154 8.36734 12.5267C8.35605 12.538 8.34262 12.547 8.32783 12.553C8.31305 12.559 8.2972 12.562 8.28123 12.5619H2.71498C2.69904 12.562 2.68323 12.5589 2.66849 12.5528C2.65374 12.5468 2.64034 12.5378 2.62906 12.5266C2.61779 12.5153 2.60886 12.5019 2.60279 12.4871C2.59673 12.4724 2.59365 12.4566 2.59373 12.4406V11.6456C2.59373 11.58 2.64561 11.5244 2.71498 11.5244H8.28436C8.34998 11.5244 8.40561 11.5763 8.40561 11.6456V12.4406H8.40248ZM8.40248 10.3263C8.40257 10.3422 8.39949 10.358 8.39342 10.3728C8.38736 10.3875 8.37843 10.4009 8.36716 10.4122C8.35588 10.4235 8.34248 10.4324 8.32773 10.4384C8.31298 10.4445 8.29718 10.4476 8.28123 10.4475H2.71498C2.69904 10.4476 2.68323 10.4445 2.66849 10.4384C2.65374 10.4324 2.64034 10.4235 2.62906 10.4122C2.61779 10.4009 2.60886 10.3875 2.60279 10.3728C2.59673 10.358 2.59365 10.3422 2.59373 10.3263V9.53126C2.59373 9.46501 2.64561 9.41001 2.71498 9.41001H8.28436C8.34998 9.41001 8.40561 9.46188 8.40561 9.53126V10.3263H8.40248ZM8.40248 8.21188C8.40257 8.22783 8.39949 8.24363 8.39342 8.25838C8.38736 8.27313 8.37843 8.28653 8.36716 8.2978C8.35588 8.30908 8.34248 8.31801 8.32773 8.32407C8.31298 8.33014 8.29718 8.33322 8.28123 8.33313H2.71498C2.69904 8.33322 2.68323 8.33014 2.66849 8.32407C2.65374 8.31801 2.64034 8.30908 2.62906 8.2978C2.61779 8.28653 2.60886 8.27313 2.60279 8.25838C2.59673 8.24363 2.59365 8.22783 2.59373 8.21188V7.41688C2.59373 7.35126 2.64561 7.29563 2.71498 7.29563H8.28436C8.34998 7.29563 8.40561 7.34751 8.40561 7.41688V8.21188H8.40248ZM17.4062 12.4375C17.4063 12.4535 17.4032 12.4693 17.3972 12.484C17.3911 12.4988 17.3822 12.5122 17.3709 12.5234C17.3596 12.5347 17.3462 12.5436 17.3315 12.5497C17.3167 12.5558 17.3009 12.5588 17.285 12.5588H11.7187C11.7028 12.5588 11.687 12.5558 11.6722 12.5497C11.6575 12.5436 11.6441 12.5347 11.6328 12.5234C11.6215 12.5122 11.6126 12.4988 11.6065 12.484C11.6005 12.4693 11.5974 12.4535 11.5975 12.4375V11.6425C11.5975 11.5769 11.6494 11.5213 11.7187 11.5213H17.2881C17.3544 11.5213 17.4094 11.5731 17.4094 11.6425V12.4375H17.4062ZM17.4062 10.3231C17.4064 10.3391 17.4034 10.3549 17.3973 10.3697C17.3913 10.3845 17.3824 10.3979 17.3711 10.4092C17.3598 10.4205 17.3464 10.4295 17.3316 10.4355C17.3168 10.4415 17.301 10.4445 17.285 10.4444H11.7187C11.7028 10.4445 11.687 10.4414 11.6722 10.4353C11.6575 10.4293 11.6441 10.4203 11.6328 10.4091C11.6215 10.3978 11.6126 10.3844 11.6065 10.3696C11.6005 10.3549 11.5974 10.3391 11.5975 10.3231V9.52813C11.5975 9.46251 11.6494 9.40688 11.7187 9.40688H17.2881C17.3544 9.40688 17.4094 9.45876 17.4094 9.52813V10.3231H17.4062ZM17.4062 8.20813C17.4063 8.22408 17.4032 8.23988 17.3972 8.25463C17.3911 8.26938 17.3822 8.28278 17.3709 8.29405C17.3596 8.30533 17.3462 8.31426 17.3315 8.32032C17.3167 8.32639 17.3009 8.32947 17.285 8.32938H11.7187C11.7028 8.32947 11.687 8.32639 11.6722 8.32032C11.6575 8.31426 11.6441 8.30533 11.6328 8.29405C11.6215 8.28278 11.6126 8.26938 11.6065 8.25463C11.6005 8.23988 11.5974 8.22408 11.5975 8.20813V7.41626C11.5975 7.35063 11.6494 7.29501 11.7187 7.29501H17.2881C17.3544 7.29501 17.4094 7.34688 17.4094 7.41626V8.20813H17.4062Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1102_1182">
          <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
