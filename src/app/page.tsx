import Image from "next/image";
import Pokemon from "./pokemon/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white justify-between p-24">
      <Pokemon />
    </main>
  );
}
