import Header from "./components/Header";
import AnimeList from "./components/anime/AnimeList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage",
};

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`,
    {
      cache: "no-store",
    }
  );
  const popularAnimes = await response.json();
  return (
    <section>
      <Header title="Most Popular" linkHref="/anime" linkName="Look all" />
      <AnimeList api={popularAnimes.data} />
    </section>
  );
};

export default Page;
