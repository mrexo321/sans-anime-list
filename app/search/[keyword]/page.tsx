import React, { FC } from "react";
import Header from "@/app/components/Header";
import AnimeList from "@/app/components/anime/AnimeList";

interface IParams {
  params: any;
}

const Page: FC<IParams> = async ({ params }) => {
  const data = params.keyword;
  const keyword = decodeURI(data);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`,
    { cache: "no-store" }
  );
  const searchAnimes = await response.json();
  return (
    <section>
      <Header title={`Searching about ${keyword} ...`} />
      <AnimeList api={searchAnimes.data} />
    </section>
  );
};

export default Page;
