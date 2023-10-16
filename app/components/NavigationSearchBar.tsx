"use client";
import React, { useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const NavigationSearchBar = () => {
  const searchRef = useRef<any>();
  const router = useRouter();

  const handleSearch = (e: any) => {
    if (e.key == "Enter" || e.key == "click") {
      e.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
      <input
        type="text"
        className="rounded-lg w-full py-2 px-4 border-none outline-none"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <MagnifyingGlass
        className="absolute end-2 top-2 cursor-pointer"
        onKeyDown={handleSearch}
        size={24}
      />
    </div>
  );
};

export default NavigationSearchBar;