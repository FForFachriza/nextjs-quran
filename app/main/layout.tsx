import NavbarComponent from "@/components/NavbarComponent";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <NavbarComponent />
      {children}
    </section>
  );
}
