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
  ChatCircle,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";

interface HeaderProps {
  title: string;
  user: {
    login: string;
  };
  html_url: string;
  comments: number;
}
export function Header({ title, user, html_url, comments }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderActions>
        <Link to="/">
          <CaretLeft size={18} />
          Voltar
        </Link>

        <a href={html_url} target="_blank">
          ver no github
          <ArrowSquareOut size={18} />
        </a>
      </HeaderActions>

      <h1>{title}</h1>
      <LinksContent>
        <LinkInfo>
          <GithubLogo size={18} />
          {user.login}
        </LinkInfo>
        <LinkInfo>
          <BuildingOffice size={18} />
          Sixchains
        </LinkInfo>
        <LinkInfo>
          <ChatCircle size={18} />
          {comments} comentários
        </LinkInfo>
      </LinksContent>
    </HeaderContainer>
  );
}
