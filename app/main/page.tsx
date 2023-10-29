import HeaderComponent from "@/app/main/partials/HeaderComponent";
import ListSurahComponent from "@/app/main/partials/ListSurahComponent";
import NavbarComponent from "@/components/NavbarComponent";

export default function Main() {
  return (
    <>
      <NavbarComponent />
      <main className="flex flex-col px-4 container">
        <HeaderComponent />
        <ListSurahComponent />
      </main>
    </>
  );
}
