import { FC } from "react";

type PaginationProps = {
    countPages: number
    currentPage: number
    data: Array<any>
    onChangePage: (pageTo: number) => void
}

export const Pagination: FC<PaginationProps> = ({ countPages, currentPage, data, onChangePage }) => {
  return (
    <section className="mt-6 flex justify-between w-full items-center">
      <div />
      <ul className="flex gap-4">
        {Array.from(Array(countPages)).map((page, index) => (
          <li key={`pagination_page_${index + 1}`}>
            <button
              onClick={() => onChangePage(index + 1)}
              data-page={index + 1}
              className={`w-10 h-10 border border-secondary-800 rounded-full hover:bg-primary-400 ${
                currentPage == index + 1 ? "bg-primary-600" : "bg-white"
              }`}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      <div>total de posts: {data.length}</div>
    </section>
  );
};
