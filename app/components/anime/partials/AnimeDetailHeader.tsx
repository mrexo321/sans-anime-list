"use client";
import React, { FC } from "react";
import AnimeDetailStatus from "./AnimeDetailStatus";
import { UserCircle } from "@phosphor-icons/react";

interface IProps {
  animeTitle: string;
  animeRating?: string;
  animeStatus?: string;
  animeYear?: number;
  animeEpisode?: number;
  animePopularity?: number;
}

const AnimeDetailHeader: FC<IProps> = ({
  animeTitle,
  animeRating,
  animeStatus,
  animeYear,
  animeEpisode,
  animePopularity,
}) => {
  return (
    <>
      <div className="flex flex-col dark:text-slate-100 text-gray-900">
        <h1 className="font-semibold md:text-4xl  text-xl">{animeTitle}</h1>
        <div className="flex items-center  space-x-2">
          <span>{animeYear}</span>
          <span>{animeEpisode} Episodes</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <AnimeDetailStatus title="Rating" info={animeRating} />
        <AnimeDetailStatus title="Status" info={animeStatus} />
        <AnimeDetailStatus
          title="Popularity"
          icon={<UserCircle size={24} />}
          info={animePopularity}
        />
      </div>
    </>
  );
};

export default AnimeDetailHeader;
