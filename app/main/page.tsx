import HeaderComponent from "@/app/main/partials/HeaderComponent";
import ListSurahComponent from "@/app/main/partials/ListSurahComponent";

export default function Main() {
  return (
    <main className="flex flex-col px-4">
      <HeaderComponent />
      <ListSurahComponent />
    </main>
  );
}
