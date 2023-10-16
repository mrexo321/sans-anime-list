import React, { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container max-w-7xl mx-auto md:px-2 px-4">{children}</div>
  );
};

export default Container;
