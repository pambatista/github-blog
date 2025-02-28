import { Link } from "react-router-dom";
import {
  HeaderActions,
  HeaderContainer,
  LinksContent,
  LinkInfo,
} from "./styles";
import {
  ArrowSquareOut,
  BuildingOffice,
  CaretLeft,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderActions>
        <Link to="/">
          <CaretLeft size={18} />
          Voltar
        </Link>

        <a>
          ver no github
          <ArrowSquareOut size={18} />
        </a>
      </HeaderActions>

      <h1>Titulo do post</h1>
      <LinksContent>
        <LinkInfo>
          <GithubLogo size={18} />
          pambatista
        </LinkInfo>
        <LinkInfo>
          <BuildingOffice size={18} />
          Sixchains
        </LinkInfo>
        <LinkInfo>
          <Users size={18} />
          10 seguidores
        </LinkInfo>
      </LinksContent>
    </HeaderContainer>
  );
}
