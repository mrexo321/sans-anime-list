import React, { FC } from "react";

interface ISrc {
  src?: string;
}

const AnimeTrailerFrame: FC<ISrc> = ({ src }) => {
  return (
    <iframe className="md:w-[1000px] md:h-[400px] w-full h-[250px]" src={src} />
  );
};

export default AnimeTrailerFrame;
