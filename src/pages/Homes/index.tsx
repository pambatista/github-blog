import { Card } from "./components/Card";
import { Perfil } from "./components/Perfil";
import { Search } from "./components/Search";
import { HomeContainer, HomeList } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Perfil />
      <Search />
      <HomeList>
        <Card />
        <Card />
        <Card />
        <Card />
      </HomeList>
    </HomeContainer>
  );
}
