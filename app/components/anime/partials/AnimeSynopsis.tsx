import React, { FC } from "react";
interface ISynopsis {
  synopsis: string;
}

const AnimeSynopsis: FC<ISynopsis> = ({ synopsis }) => {
  return (
    <span className="leading-relaxed font-semibold md:text-base text-sm">
      {synopsis}
    </span>
  );
};

export default AnimeSynopsis;
