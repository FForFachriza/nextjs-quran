import useSWR from "swr";

async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export function fetchSurah() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useSWR(`https://open-api.my.id/api/quran/surah/`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}
