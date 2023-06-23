import Image from "next/image";
import Pokemon from "./pokemon/page";
export const metadata = {
  title: "Pokedex",
  description: "Data Pokemon",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white justify-between p-24">
      <Pokemon />
    </main>
  );
}
