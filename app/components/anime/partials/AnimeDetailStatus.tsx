import React, { FC } from "react";

interface IProps {
  title?: string;
  info?: string | number;
  icon?: any;
}

const AnimeDetailStatus: FC<IProps> = ({ title, info, icon }) => {
  return (
    <div className="flex flex-col leading-relaxed dark:text-slate-100 text-gray-900">
      <h1 className="md:text-2xl text-lg font-semibold">{title}</h1>
      <span className="md:text-md text-sm flex items-center gap-x-2">
        {icon}
        {info}
      </span>
    </div>
  );
};

export default AnimeDetailStatus;
