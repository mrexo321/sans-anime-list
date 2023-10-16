import React, { FC } from "react";
interface IBox {
  title: string;
  data: string | number;
  className?: string;
}

const Box: FC<IBox> = ({ title, data, className }) => {
  return (
    <div
      className={`md:py-1.5 md:px-3 py-1 px-2 flex w-full items-center gap-x-1 rounded-lg text-sm text-white font-semibold ${className}`}
    >
      <span>{title}</span>
      <span>{data}</span>
    </div>
  );
};

export default Box;
