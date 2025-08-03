"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import z from "zod";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parseSearchTextSchema = z
      .string()
      .transform(val => val.toLowerCase()) // Transforme en lowercase d'abord
      .pipe(z.enum(["austin", "seattle"])); // Puis valide avec les valeurs attendues

    const validSearchText = parseSearchTextSchema.safeParse(searchText);

    if (!validSearchText.success) {
      // Tu peux afficher l'erreur à l'utilisateur au lieu de throw
      setSearchText("");
      alert("Invalid query, you can only search for austin or seattle");
      return;
    }

    // validSearchText.data contient la valeur validée et transformée
    router.push(`/events/${validSearchText.data}`);
    setSearchText("");
  };

  return (
    <form
      id="searchForm"
      onSubmit={handleSubmit}
      className="w-full sm:w-[580px]"
      action=""
    >
      <input
        id="searchForm__input"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        type="text"
        placeholder="Search events in any city ..."
        spellCheck={false}
      />
    </form>
  );
}
