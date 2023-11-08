"use client";

import { POSTS_MOCK } from "@/mocks/table.mock";
import { Post } from "@/types/post";
import { ChangeEvent, FC, useState } from "react";

type TableConfig = {
  search: string;
  page: number;
};

export const Table: FC = () => {
  const [tableConfig, setTableConfig] = useState<TableConfig>({
    search: "",
    page: 1,
  });
  const [posts, setPosts] = useState<Array<Post>>(POSTS_MOCK);

  const filtredPosts = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(tableConfig.search.toLowerCase()) ||
      post.author.name.toLowerCase().includes(tableConfig.search.toLowerCase())
    );
  });

  const countPages = Math.ceil(filtredPosts.length / 10);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTableConfig({
      page: 1,
      search: e.target.value,
    });
  };

  const handleChangePage = (page: number) => {
    setTableConfig({
        ...tableConfig,
        page,
    });
  };

  return (
    <section className="flex flex-col justify-center items-center w-[60%]">
      <div className="flex justify-between w-full">
        <input
          placeholder="Pesquise aqui..."
          className="placeholder:text-primary-300 focus-visible:outline-primary-600 text-primary-800 border border-primary-800 p-3 w-60 rounded-lg"
          name="search"
          type="text"
          value={tableConfig.search}
          onChange={handleChange}
        />

        <button
          onClick={() => alert("adicionei um novo post")}
          className="border border-secondary-800 px-4 py-3 rounded-lg bg-secondary-500 hover:bg-secondary-300"
        >
          Adicionar Post
        </button>
      </div>

      {tableConfig.search && (
        <span>Resultado da busca: {tableConfig.search}</span>
      )}

      <table className="border-separate p-6 mt-6 rounded-lg border border-secondary-800">
        <thead className="">
          <tr className="">
            <td className="table-row-posts text-center text-secondary-800">
              Título
            </td>
            <td className="table-row-posts text-center text-secondary-800">
              Descrição
            </td>
            <td className="table-row-posts text-center text-secondary-800">
              Autor
            </td>
            <td className="table-row-posts text-center text-secondary-800">
              Data da postagem
            </td>
            <td className="table-row-posts text-center text-secondary-800">
              Açoes
            </td>
          </tr>
        </thead>
        <tbody>
          {filtredPosts.slice(((tableConfig.page - 1 ) * 10), ((tableConfig.page - 1 ) * 10) + 10).map((post) => (
            <tr className="" key={post.id}>
              <td className="table-row-posts">{post.title}</td>
              <td className="text-with-ellipses table-row-posts">
                {post.description}
              </td>
              <td className="text-with-ellipses table-row-posts">
                {post.author.name}
              </td>
              <td className="table-row-posts">
                {post.createdAt.toLocaleString("pt-BR")}
              </td>
              <td className="table-row-posts">
                <button className="mr-2 p-2 bg-primary-900 rounded-lg text-white">
                  Editar
                </button>
                <button className="p-2  bg-secondary-900 rounded-lg text-white">
                  Remover
                </button>
              </td>
            </tr>
          ))}

          {filtredPosts.length == 0 && (
            <div>Não encotramos nenhum resultado</div>
          )}
        </tbody>
      </table>

      <section className="mt-6 flex justify-between w-full items-center">
        <div />
        <ul className="flex gap-4">
          {Array.from(Array(countPages)).map((page, index) => (
            <li key={`pagination_page_${index + 1}`}>
              <button
                onClick={() => handleChangePage(index + 1)}
                data-page={index + 1}
                className={`w-10 h-10 border border-secondary-800 rounded-full hover:bg-primary-400 ${tableConfig.page == index + 1 ? 'bg-primary-600' : 'bg-white'}`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
        <div>total de posts: {filtredPosts.length}</div>
      </section>
    </section>
  );
};
