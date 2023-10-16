import React, { FC } from "react";
import Container from "./Container";
import Link from "next/link";

type HeaderProps = {
  title?: string;
  linkHref?: string;
  linkName?: string;
};

const Header: FC<HeaderProps> = ({
  title = "",
  linkHref = "",
  linkName = "",
}) => {
  return (
    <div className="py-1.5">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold md:text-2xl text-xl">{title}</h1>
          <Link className="text-indigo-500 underline" href={linkHref}>
            {linkName}
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
