import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function NavbarDetail({ namaSurat }: { namaSurat: string }) {
  return (
    <nav className="flex flex-row w-full py-4 items-center">
      <Link href={"/main"}>
        <ArrowLeftIcon className="h-6 w-6 text-[#672cbc]" />
      </Link>

      <p className="ml-4 text-[#672cbc] font-bold text-xl">{namaSurat}</p>
    </nav>
  );
}
