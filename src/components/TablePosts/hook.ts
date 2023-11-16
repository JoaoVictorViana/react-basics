import { POSTS_MOCK } from "@/mocks/table.mock";
import { Post } from "@/types/post";
import { ChangeEvent, useState } from "react";

type TableConfig = {
    search: string;
    page: number;
  };

export function useTablePosts() {
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


      return {
        tableConfig,
        filtredPosts,
        countPages,
        handleChange,
        handleChangePage
      }
}