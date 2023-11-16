import { Post } from "@/types/post"
import { FC } from "react"

type TableProps = {
    data: Array<Post> 
}

export const Table: FC<TableProps> = ({ data }) => {
    return (<table className="border-separate p-6 mt-6 rounded-lg border border-secondary-800">
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
      {data.map((post) => (
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

      {data.length == 0 && (
        <div>Não encotramos nenhum resultado</div>
      )}
    </tbody>
  </table>)
}