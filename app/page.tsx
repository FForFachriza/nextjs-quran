import ButtonComponent from "@/components/ButtonComponent";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-[#672cbc] font-bold text-3xl">Quran App</h1>
      <section className="py-4 space-y-1 text-center text-black/60">
        <p>Learn Quran and Recite</p>
        <p>once everyday</p>
      </section>
      <div className="h-[512px] relative flex flex-col items-center">
        <img src="/quran-splash.svg" alt="fotoquran.svg" />
        <ButtonComponent />
      </div>
    </main>
  );
}
