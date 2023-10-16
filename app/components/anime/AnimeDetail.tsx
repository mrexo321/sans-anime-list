import React, { FC } from "react";
import Image from "next/image";
import Container from "../Container";
import AnimeTrailerFrame from "./partials/AnimeTrailerFrame";
import AnimeDetailHeader from "./partials/AnimeDetailHeader";
import AnimeDetailInformation from "./partials/AnimeDetailInformation";
import type { Metadata } from "next";

interface IApi {
  anime: any;
}

const AnimeDetail: FC<IApi> = ({ anime }) => {
  return (
    <>
      <Container>
        <section className="flex md:flex-row flex-col justify-between md:items-center space-y-2">
          <AnimeDetailHeader
            animeTitle={anime.title}
            animeRating={anime.rating}
            animeStatus={anime.status}
            animeYear={anime.year}
            animeEpisode={anime.episodes}
            animePopularity={anime.popularity}
          />
        </section>
        <section>
          <div className="flex md:flex-row gap-y-4 flex-col items-center space-x-1 py-2">
            <Image
              width={500}
              height={500}
              className="md:w-fit w-full"
              alt={anime.title}
              src={anime.images.webp.image_url}
            />
            {anime.trailer.embed_url ? (
              <AnimeTrailerFrame src={anime.trailer.embed_url} />
            ) : null}
          </div>
          <AnimeDetailInformation data={anime} />
        </section>
      </Container>
    </>
  );
};

export default AnimeDetail;
