import { useContextSelector } from "use-context-selector";
import { SearchContainer, SearchHeader, SearchInput } from "./styles";
import { PostsContext } from "../../../../context/Posts";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SearchForm = zod.object({
  search: zod.string(),
});

type SearchFormInputs = zod.infer<typeof SearchForm>;

export function Search() {
  const { register, handleSubmit, setValue } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchForm),
  });

  const { total, fetchPosts } = useContextSelector(PostsContext, (context) => {
    return {
      total: context.posts.total,
      fetchPosts: context.fetchPosts,
    };
  });

  function handleSearch(data: SearchFormInputs) {
    fetchPosts(data.search);
    setValue("search", "");
  }

  return (
    <SearchContainer>
      <SearchHeader>
        <h3>Publicações</h3>
        <span>{total} publicações</span>
      </SearchHeader>
      <form onSubmit={handleSubmit(handleSearch)}>
        <SearchInput
          type="text"
          placeholder="Buscar conteúdo"
          {...register("search")}
        />
      </form>
    </SearchContainer>
  );
}
