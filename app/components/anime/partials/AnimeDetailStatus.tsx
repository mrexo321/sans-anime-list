import React, { FC } from "react";

interface IProps {
  title?: string;
  info?: string | number;
  icon?: any;
}

const AnimeDetailStatus: FC<IProps> = ({ title, info, icon }) => {
  return (
    <div className="flex flex-col leading-relaxed">
      <h1 className="md:text-2xl text-lg font-semibold text-gray-900">
        {title}
      </h1>
      <span className="md:text-md text-sm text-gray-900 flex items-center gap-x-2">
        {icon}
        {info}
      </span>
    </div>
  );
};

export default AnimeDetailStatus;
