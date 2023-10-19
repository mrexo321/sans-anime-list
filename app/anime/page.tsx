"use client";
import React, { useState, useEffect } from "react";
import AnimeList from "../components/anime/AnimeList";
import Header from "../components/Header";
import Paginator from "@/app/components/utilities/Paginator";

const Page = () => {
  const [page, setPage] = useState<number>(1);
  const [animes, setAnimes] = useState<any>([]);

  const fetchAnime = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`,
      {
        cache: "no-store",
      }
    );
    const animes = await response.json();
    setAnimes(animes);
  };

  useEffect(() => {
    fetchAnime();
  }, [page]);

  return (
    <section>
      <Header title={`All animes #${page}`} />
      <AnimeList api={animes.data} />
      <Paginator
        page={page}
        setPage={setPage}
        lastPage={animes.pagination?.last_visible_page}
        hasNextPage={animes.pagination?.has_next_page}
      />
    </section>
  );
};

export default Page;
