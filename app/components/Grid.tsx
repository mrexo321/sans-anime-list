import React, { FC, PropsWithChildren } from "react";

const Grid: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{children}</div>
  );
};

export default Grid;
