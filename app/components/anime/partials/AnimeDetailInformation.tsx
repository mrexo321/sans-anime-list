import React, { FC } from "react";
import RoundedButton from "@/app/components/RoundedButton";
import Separator from "@/app/components/Separator";
import AnimeSynopsis from "./AnimeSynopsis";
import AnimeProductionDetail from "./AnimeProductionDetail";
import Box from "@/app/components/Box";

interface IData {
  data: any;
}

const AnimeDetailInformation: FC<IData> = ({ data }) => {
  return (
    <div className="flex md:flex-row flex-col justify-evenly md:items-center items-start gap-x-4">
      <div className="flex flex-col md:w-3/4 w-full">
        <div className="md:flex grid grid-cols-2 items-center gap-2">
          {data.genres.map((genre: any) => (
            <RoundedButton key={genre.mal_id}>{genre.name}</RoundedButton>
          ))}
        </div>
        <AnimeSynopsis synopsis={data.synopsis} />
        <Separator />
        <AnimeProductionDetail title="Producers" datas={data.producers} />
        <Separator />
        <AnimeProductionDetail title="Licensors" datas={data.licensors} />
        <Separator />
        <AnimeProductionDetail title="Studios" datas={data.studios} />
        <span></span>
      </div>
      <div className="grid grid-cols-2 w-fit items-start whitespace-nowrap gap-4">
        <Box className="bg-indigo-500" title="Score" data={data.score} />
        <Box className="bg-gray-900" title="Rank" data={data.score} />
        <Box
          className="bg-yellow-500"
          title="Review"
          data={data.scored_by.toLocaleString()}
        />
      </div>
    </div>
  );
};

export default AnimeDetailInformation;
