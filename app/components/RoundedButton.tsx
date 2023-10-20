import Link from "next/link";
import React, { PropsWithChildren, FC } from "react";

const RoundedButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Link
      className="py-1.5 px-3 bg-indigo-500 text-sm hover:bg-gray-900 dark:text-slate-100 text-gray-900 hover:text-gray-100 transition duration-150 font-semibold rounded-full border border-gray-800"
      href="#"
    >
      {children}
    </Link>
  );
};

export default RoundedButton;
