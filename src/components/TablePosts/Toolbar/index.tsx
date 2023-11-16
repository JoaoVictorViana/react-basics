import { ChangeEvent, FC } from "react";

type ToolbarProps = {
    search: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Toolbar: FC<ToolbarProps> = ({ search, onChange }) => {
  return (
    <div className="flex justify-between w-full">
      <input
        placeholder="Pesquise aqui..."
        className="placeholder:text-primary-300 focus-visible:outline-primary-600 text-primary-800 border border-primary-800 p-3 w-60 rounded-lg"
        name="search"
        type="text"
        value={search}
        onChange={onChange}
      />

      <button
        onClick={() => alert("adicionei um novo post")}
        className="border border-secondary-800 px-4 py-3 rounded-lg bg-secondary-500 hover:bg-secondary-300"
      >
        Adicionar Post
      </button>
    </div>
  );
};
