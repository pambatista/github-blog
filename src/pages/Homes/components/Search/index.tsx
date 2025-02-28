import { SearchContainer, SearchHeader, SearchInput } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <SearchHeader>
        <h3>Publicações</h3>
        <span>18 publicações</span>
      </SearchHeader>
      <SearchInput type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  );
}
