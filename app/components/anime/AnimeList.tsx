import React, { FC } from "react";
import Image from "next/image";
import Grid from "../Grid";
import Link from "next/link";
import Container from "../Container";

interface IApi {
  api: any[];
}

const AnimeList: FC<IApi> = ({ api }) => {
  return (
    <Container>
      <Grid>
        {api.map((anime) => (
          <div className="shadow-lg p-4 rounded-lg" key={anime.mal_id}>
            <Link href={`/anime/${anime.mal_id}`}>
              <Image
                alt="..."
                width={300}
                height={300}
                src={anime.images.webp.image_url}
              />
              <span className="text-md md:text-lg">{anime.title}</span>
            </Link>
          </div>
        ))}
      </Grid>
    </Container>
  );
};

export default AnimeList;
