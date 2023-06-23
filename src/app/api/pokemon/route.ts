import { NextResponse } from "next/server";
export async function GET(res: Response, req: Request) {
  try {
    const baseURL = "https://pokeapi.co/api/v2/pokemon/?limit=80";
    const data = await fetch(baseURL);
    const pokemon: any = await data.json();
    return NextResponse.json({ message: "success", pokemon });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
