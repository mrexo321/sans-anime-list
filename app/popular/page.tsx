import Header from "@/app/components/Header";
import AnimeList from "@/app/components/anime/AnimeList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popular Anime",
};

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`,
    {
      cache: "no-store",
    }
  );
  const popularAnimes = await response.json();
  return (
    <section>
      <Header title="Most Popular" linkHref="/popular" linkName="look all" />
      <AnimeList api={popularAnimes.data} />
    </section>
  );
};

export default Page;
