"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText}`);
    setSearchText("");
  };

  return (
    <form id="searchForm" onSubmit={handleSubmit} className="w-full sm:w-[580px]" action="">
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
