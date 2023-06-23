import React from "react";

export default function pokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex min-h-screen">{children}</div>;
}
