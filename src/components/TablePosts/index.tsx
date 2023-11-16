"use client";

import { FC } from "react";
import { Toolbar } from "./Toolbar";
import { Table } from "./Table";
import { Pagination } from "./Pagination";
import { useTablePosts } from "./hook";

export const TablePosts: FC = () => {
  const {
    countPages,
    filtredPosts,
    handleChange,
    handleChangePage,
    tableConfig,
  } = useTablePosts();

  return (
    <section className="flex flex-col justify-center items-center w-[60%]">
      <Toolbar search={tableConfig.search} onChange={handleChange} />

      {tableConfig.search && (
        <span>Resultado da busca: {tableConfig.search}</span>
      )}

      <Table
        data={filtredPosts.slice(
          (tableConfig.page - 1) * 10,
          (tableConfig.page - 1) * 10 + 10
        )}
      />

      <Pagination
        data={filtredPosts}
        countPages={countPages}
        currentPage={tableConfig.page}
        onChangePage={handleChangePage}
      />
    </section>
  );
};
