import { ArrowLeft } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react";
import React, { FC } from "react";
interface IPaginator {
  page?: number;
  setPage?: any;
  lastPage?: number;
  prev?: any;
  hasNextPage?: boolean;
}

const Paginator: FC<IPaginator> = ({
  page,
  setPage,
  lastPage,
  hasNextPage,
}) => {
  const scroll = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleNextPage = () => {
    setPage((prev: number) => prev + 1);
    scroll();
  };
  const handlePrevPage = () => {
    if (page != 1) {
      setPage((prev: number) => prev - 1);
      scroll();
    }
    return;
  };
  return (
    <div className="flex items-center gap-x-2 justify-center text-xl">
      <button
        onClick={handlePrevPage}
        className="transition duration-200  hover:text-indigo-500"
      >
        {page !== 1 ? <ArrowLeft size={24} /> : null}
      </button>
      <span className="flex items-center gap-x-2">
        <p className="text-indigo-500">{page}</p>
        of
        <p className="text-indigo-500">{lastPage}</p>
      </span>
      <button
        onClick={handleNextPage}
        className="transition duration-200  hover:text-indigo-500"
      >
        {hasNextPage && <ArrowRight size={24} />}
      </button>
    </div>
  );
};

export default Paginator;
