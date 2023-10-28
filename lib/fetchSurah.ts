import useSWR from "swr";

async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

interface Surah {
  nomor: number;
  nama: string;
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
  deskripsi: string;
  audio: string;
}

interface FetchSurah {
  data: Surah[] | any;
  isLoading: boolean;
  isError: any;
}

export function fetchSurah(): FetchSurah {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useSWR(`https://open-api.my.id/api/quran/surah/`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}
