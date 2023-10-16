import React, { FC } from "react";

interface IData {
  title: string;
  datas: any[];
}

const AnimeProductionDetail: FC<IData> = ({ datas, title }) => {
  return (
    <>
      <div className="flex items-center space-x-4 py-2">
        <span className="font-bold md:text-base text-sm">{title}</span>
        <div className="md:flex items-center space-x-2 whitespace-nowrap">
          {datas.length > 0
            ? datas.map((data: any) => (
                <span
                  className="text-sky-600 md:text-base text-sm"
                  key={data.mal_id}
                >
                  {data.name}
                </span>
              ))
            : "Not Available"}
        </div>
      </div>
    </>
  );
};

export default AnimeProductionDetail;
