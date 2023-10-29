import useSWR from "swr";

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

export function useFetchSurah(): FetchSurah {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const fetcher = (url: any) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(`https://open-api.my.id/api/quran/surah/`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}

export function useFetchSurahById(id: number): FetchSurah {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const fetcher = (url: any) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(`https://open-api.my.id/api/quran/surah/${id}`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}
