import React, { FC } from "react";
import Header from "@/app/components/Header";
import AnimeDetail from "@/app/components/anime/AnimeDetail";
import type { Metadata } from "next";

interface IParams {
  params: any;
}

const Page: FC<IParams> = async ({ params }) => {
  const { id } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
  );
  const animeDetail = await response.json();
  return (
    <section>
      <Header />
      <AnimeDetail anime={animeDetail.data} />
    </section>
  );
};

export default Page;
